"""
Renders the hero art for the landing page, and the ASCII the terminal prints.

Run it with:  npm run model:hero

Two outputs from one scene, which is the point of doing it here rather than
faking a render in CSS:

  public/hero/car.png     a lit studio shot, used as the page's hero image
  src/pages/heroAscii.ts  the same render at 128 columns, mapped to characters

The ASCII is not decoration bolted on beside the render — it *is* the render,
resampled. A terminal that draws the same car the page shows is honest about
where the picture came from, and it costs one extra low-res pass.
"""

import math
import os
import sys

import bpy

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import car  # noqa: E402  — the body is built by the same script that exports it

# Darkest to brightest. Space first so the background falls away entirely.
RAMP = " .:-=+*#%@"


def look_at(obj, target):
    """Points an object down the -Z axis at a world-space target."""
    direction = (
        target[0] - obj.location[0],
        target[1] - obj.location[1],
        target[2] - obj.location[2],
    )
    flat = math.hypot(direction[0], direction[1])
    obj.rotation_euler = (
        math.atan2(flat, -direction[2]),
        0.0,
        math.atan2(-direction[0], direction[1]),
    )


def emitter(name, location, colour, energy, size):
    """An area light that shows up as a hard edge highlight on a bevel."""
    data = bpy.data.lights.new(name, "AREA")
    data.color = colour
    data.energy = energy
    data.size = size
    light = bpy.data.objects.new(name, data)
    light.location = location
    bpy.context.collection.objects.link(light)
    look_at(light, (0.0, 0.0, 0.3))
    return light


def material(name, colour, roughness, metallic, emission=None, strength=0.0):
    mat = bpy.data.materials.new(name)
    mat.use_nodes = True
    bsdf = mat.node_tree.nodes["Principled BSDF"]
    bsdf.inputs["Base Color"].default_value = (*colour, 1.0)
    bsdf.inputs["Roughness"].default_value = roughness
    bsdf.inputs["Metallic"].default_value = metallic
    if emission is not None:
        bsdf.inputs["Emission Color"].default_value = (*emission, 1.0)
        bsdf.inputs["Emission Strength"].default_value = strength
    return mat


def build_scene():
    bpy.ops.wm.read_factory_settings(use_empty=True)

    body = car.loft("Body", car.BODY)
    car.finish(body)
    body.data.materials.append(
        material("Shell", (0.055, 0.06, 0.13), 0.28, 0.75)
    )

    canopy = car.loft("Canopy", car.CANOPY)
    car.finish(canopy, width=0.016)
    canopy.data.materials.append(
        material("Canopy", (0.02, 0.05, 0.14), 0.05, 0.9, (0.1, 0.55, 0.9), 0.6)
    )

    # Wheels. Not in the exported model — they spin and steer at runtime, so
    # they live in Vehicle.tsx — but a car render without them is a doorstop.
    for x, y in ((0.80, -1.74), (-0.80, -1.74), (0.86, 1.34), (-0.86, 1.34)):
        bpy.ops.mesh.primitive_cylinder_add(
            radius=0.40, depth=0.30, vertices=28, location=(x, y, -0.17),
            rotation=(0.0, math.pi / 2, 0.0),
        )
        wheel = bpy.context.active_object
        wheel.data.materials.append(material("Tyre", (0.03, 0.03, 0.05), 0.75, 0.0))
        bpy.ops.object.shade_smooth()

    # Ground: a dark mirror, so the car sits in something instead of floating.
    bpy.ops.mesh.primitive_plane_add(size=60, location=(0, 0, -0.62))
    bpy.context.active_object.data.materials.append(
        material("Ground", (0.018, 0.015, 0.05), 0.22, 0.4)
    )

    # Three lights, the neon the world is actually lit by.
    emitter("Key", (5.0, -4.0, 3.4), (0.62, 0.42, 1.0), 380, 5)
    emitter("Rim", (-5.2, 2.8, 2.1), (0.18, 0.85, 1.0), 300, 4.5)
    emitter("Fill", (0.6, 6.0, 2.4), (0.95, 0.3, 0.85), 190, 6)

    camera_data = bpy.data.cameras.new("Camera")
    camera_data.lens = 56
    camera = bpy.data.objects.new("Camera", camera_data)
    camera.location = (6.9, -8.8, 3.05)
    bpy.context.collection.objects.link(camera)
    look_at(camera, (0.0, -0.05, 0.02))
    bpy.context.scene.camera = camera

    world = bpy.data.worlds.new("World")
    world.use_nodes = True
    world.node_tree.nodes["Background"].inputs[0].default_value = (0.012, 0.009, 0.035, 1)
    bpy.context.scene.world = world

    # Filmic, and pulled down a stop. The first pass rendered a night scene
    # into pale lavender because nothing was holding the highlights.
    view = bpy.context.scene.view_settings
    try:
        view.view_transform = "AgX"
        view.look = "AgX - Medium High Contrast"
    except TypeError:
        view.view_transform = "Filmic"
    view.exposure = -0.4


def render(path, width, height, samples, transparent=False):
    scene = bpy.context.scene
    for engine in ("BLENDER_EEVEE_NEXT", "BLENDER_EEVEE", "CYCLES"):
        try:
            scene.render.engine = engine
            break
        except TypeError:
            continue
    if scene.render.engine == "CYCLES":
        scene.cycles.samples = samples
    else:
        scene.eevee.taa_render_samples = samples

    scene.render.resolution_x = width
    scene.render.resolution_y = height
    scene.render.resolution_percentage = 100
    scene.render.film_transparent = transparent
    # JPEG, not PNG: this is a photograph of a dark scene, and the PNG of it
    # came out at 2.2MB — which is heavier than the rest of the site put
    # together, for a picture nobody would notice the compression in.
    scene.render.image_settings.file_format = "JPEG" if path.endswith(".jpg") else "PNG"
    scene.render.image_settings.quality = 88
    scene.render.filepath = path
    os.makedirs(os.path.dirname(path), exist_ok=True)
    bpy.ops.render.render(write_still=True)
    return path


def to_ascii(path, columns):
    """Resamples the render to characters by luminance.

    Two passes, because one does not work. The scene is deliberately dark —
    most of the frame is near-black backdrop — so any fixed curve from
    luminance to character either crushes the car into the background or lifts
    the background into the car. The first pass measures what range the image
    actually occupies; the second maps that range across the ramp.
    """
    image = bpy.data.images.load(path)
    width, height = image.size
    pixels = tuple(image.pixels)  # flat RGBA, bottom row first

    # Characters are about twice as tall as they are wide.
    rows = max(1, int(columns * (height / width) * 0.5))
    step_x = width / columns
    step_y = height / rows

    grid = []
    for row in range(rows):
        line = []
        for col in range(columns):
            # Average a block rather than point-sample it: a single pixel off a
            # bevel highlight makes the whole character jump a ramp step.
            total = 0.0
            count = 0
            for sy in range(int(row * step_y), int((row + 1) * step_y)):
                for sx in range(int(col * step_x), int((col + 1) * step_x)):
                    i = ((height - 1 - sy) * width + sx) * 4
                    # Weighted by alpha, so everything off the car is nothing
                    # at all rather than a dim value competing with its paint.
                    lum = 0.2126 * pixels[i] + 0.7152 * pixels[i + 1] + 0.0722 * pixels[i + 2]
                    total += lum * pixels[i + 3]
                    count += 1
            line.append((total / count) if count else 0.0)
        grid.append(line)
    bpy.data.images.remove(image)

    flat = sorted(value for line in grid for value in line)
    floor = flat[int(len(flat) * 0.55)]          # over half the frame is backdrop
    ceiling = flat[int(len(flat) * 0.995)]
    span = max(ceiling - floor, 1e-5)

    lines = []
    for line in grid:
        out = []
        for value in line:
            t = min(1.0, max(0.0, (value - floor) / span)) ** 0.8
            out.append(RAMP[min(len(RAMP) - 1, int(t * len(RAMP)))])
        lines.append("".join(out).rstrip())

    # Trim blank rows top and bottom so the art is not mostly padding.
    while lines and not lines[0].strip():
        lines.pop(0)
    while lines and not lines[-1].strip():
        lines.pop()
    return lines


def main():
    args = sys.argv[sys.argv.index("--") + 1 :]
    png, ascii_out = args[0], args[1]

    build_scene()
    render(png, 1600, 1000, 96)

    # The ASCII gets its own pass: the ground hidden and the film transparent.
    # Shot against the lit floor the car is a dark silhouette on a bright
    # backdrop, which inverts in a luminance ramp — the first attempt drew a
    # careful picture of the two pools of light either side of the car.
    ground = bpy.data.objects["Plane"]
    view = bpy.context.scene.view_settings
    camera = bpy.context.scene.camera
    ground.hide_render = True
    # Tighter and brighter than the hero shot. At a hundred columns the car has
    # about six thousand characters to exist in, so it has to fill the frame,
    # and a silhouette needs its interior lifted or the whole thing lands on
    # two rungs of the ramp.
    camera.data.lens, view.exposure = 108, 1.6
    small = render("/tmp/hero-ascii.png", 560, 350, 32, transparent=True)
    camera.data.lens, view.exposure = 56, -0.4
    ground.hide_render = False
    lines = to_ascii(small, 76)

    with open(ascii_out, "w") as handle:
        handle.write(
            "// Generated by tools/hero.py — do not edit.\n"
            "// The landing page's terminal prints the same render the page shows,\n"
            "// resampled to characters. Regenerate with `npm run model:hero`.\n"
            "export const HERO_ASCII = `"
            + "\n".join(line.replace("\\", "\\\\").replace("`", "\\`").replace("$", "\\$") for line in lines)
            + "`;\n"
        )
    print("WROTE", png, ascii_out)


main()
