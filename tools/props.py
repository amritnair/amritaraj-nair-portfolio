"""
Builds the island's scatter props in Blender and exports them as glTF.

Run it with:  npm run model:props

The trees were three stacked cones, which is what they looked like: the most
generic thing on screen, a hundred and thirty times over. These are built the
same way the car is — real geometry, then a bevel so every edge has a
highlight — and each tier is given a faint lit rim, because in a world where
the light comes from neon, anything that does not glow disappears.

Exported as separate objects so the runtime can instance each one and give the
glowing parts their own material. No materials in the file; the palette lives
in palette.ts.
"""

import math
import os
import sys

import bpy

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from car import finish  # noqa: E402 — the same bevel-and-shade pass


def join(objects, name):
    """Joins objects into one mesh and names it."""
    bpy.ops.object.select_all(action="DESELECT")
    for obj in objects:
        obj.select_set(True)
    bpy.context.view_layer.objects.active = objects[0]
    bpy.ops.object.join()
    merged = bpy.context.active_object
    merged.name = merged.data.name = name
    # Bake the transform in, so every prop's local origin is the world origin
    # it was built around. Without this a join inherits the first part's
    # origin, and the tree exports with its base a metre and a half below zero
    # — which the runtime would then have to know about and correct for.
    bpy.ops.object.transform_apply(location=True, rotation=True, scale=True)
    bpy.ops.object.select_all(action="DESELECT")
    return merged


def cone(radius, top, depth, z, sides, spin=0.0):
    bpy.ops.mesh.primitive_cone_add(
        radius1=radius, radius2=top, depth=depth, vertices=sides,
        location=(0, 0, z), rotation=(0, 0, spin),
    )
    return bpy.context.active_object


def ring(radius, z, minor=0.055):
    bpy.ops.mesh.primitive_torus_add(
        major_radius=radius, minor_radius=minor, major_segments=9,
        minor_segments=4, location=(0, 0, z),
    )
    return bpy.context.active_object


# Each canopy tier: base radius, top radius, height, centre height, rotation.
# Tapered rather than repeated so the silhouette reads as one tree instead of
# three cones that happen to be stacked.
TIERS = [
    (2.45, 0.9, 3.0, 3.5, 0.0),
    (1.85, 0.62, 2.5, 5.4, 0.42),
    (1.15, 0.0, 2.3, 7.2, 0.84),
]


def build_tree():
    parts = [cone(0.52, 0.3, 2.6, 1.3, 6)]
    for radius, top, depth, z, spin in TIERS:
        parts.append(cone(radius, top, depth, z, 7, spin))
    tree = join(parts, "Tree")
    finish(tree, width=0.035)

    # A lit rim under each tier. Separate object: it gets an emissive material
    # at runtime, and the solid parts must not.
    rims = [ring(radius * 0.94, z - depth / 2 + 0.12) for radius, _, depth, z, _ in TIERS]
    glow = join(rims, "TreeGlow")
    bpy.ops.object.shade_smooth()
    return tree, glow


def build_rock():
    bpy.ops.mesh.primitive_ico_sphere_add(subdivisions=1, radius=1.0)
    rock = bpy.context.active_object
    rock.name = rock.data.name = "Rock"
    # Shove the vertices around so it is a rock and not a ball. Deterministic:
    # the scatter already varies scale and rotation, and a random mesh on top
    # of that would change every time the script ran.
    for i, vertex in enumerate(rock.data.vertices):
        wobble = 0.78 + 0.34 * ((math.sin(i * 12.9898) * 43758.5453) % 1.0)
        vertex.co *= wobble
        vertex.co.z *= 0.62
    finish(rock, width=0.05)
    return rock


def main():
    bpy.ops.wm.read_factory_settings(use_empty=True)
    build_tree()
    build_rock()

    out = sys.argv[sys.argv.index("--") + 1]
    os.makedirs(os.path.dirname(out), exist_ok=True)
    bpy.ops.export_scene.gltf(
        filepath=out, export_format="GLB", export_apply=True,
        export_materials="NONE", export_cameras=False, export_lights=False,
        export_yup=True,
    )
    print("WROTE", out)


main()
