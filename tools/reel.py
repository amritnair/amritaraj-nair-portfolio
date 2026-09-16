"""
Renders the landing page's hero loop: the car, orbited slowly.

Run it with:  npm run model:reel

Same scene as the hero still, so the still doubles as the video's poster
frame. The camera is parented to an empty which turns exactly once over the
clip with linear interpolation — that is what makes it loop without a cut.
"""

import os
import sys

import bpy

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import hero  # noqa: E402 — the reel is the hero still, moving

FRAMES = 96  # four seconds at 24fps


def main():
    hero.build_scene()
    scene = bpy.context.scene

    pivot = bpy.data.objects.new("Pivot", None)
    scene.collection.objects.link(pivot)
    camera = scene.camera
    camera.parent = pivot

    # One full turn, keyframed on every frame rather than eased between two.
    # Blender 5 moved fcurves behind action slots and channelbags, so reaching
    # in to set LINEAR interpolation is version-fragile — and baking the whole
    # turn makes interpolation irrelevant. Ninety-six keyframes costs nothing.
    turn = 6.283185307179586
    for frame in range(1, FRAMES + 1):
        pivot.rotation_euler = (0, 0, turn * (frame - 1) / FRAMES)
        pivot.keyframe_insert("rotation_euler", frame=frame)

    scene.frame_start, scene.frame_end = 1, FRAMES
    scene.render.fps = 24
    scene.render.resolution_x, scene.render.resolution_y = 1280, 800
    scene.render.resolution_percentage = 100
    for engine in ("BLENDER_EEVEE_NEXT", "BLENDER_EEVEE", "CYCLES"):
        try:
            scene.render.engine = engine
            break
        except TypeError:
            continue
    if scene.render.engine != "CYCLES":
        scene.eevee.taa_render_samples = 24

    # Frames, not video. The Homebrew Blender build ships without FFmpeg
    # support — `image_settings.file_format` has no FFMPEG member at all — so
    # the encode happens outside, in npm run model:reel.
    frames = sys.argv[sys.argv.index("--") + 1]
    os.makedirs(frames, exist_ok=True)
    scene.render.image_settings.file_format = "PNG"
    scene.render.filepath = os.path.join(frames, "f")
    bpy.ops.render.render(animation=True)
    print("WROTE", frames)


main()
