"""
Builds the player car's body in Blender and exports it as glTF.

Run it with:  npm run model:car

Why this exists at all, when the rest of the world is generated in TypeScript:
two things are painful-to-impossible with three.js primitives and free here.

The first is the *silhouette*. The body is lofted through a row of
cross-sections down its length, so it can taper into a nose and swell over the
rear wheels. Built out of boxes — which is what it was — a car is a stack of
rectangles, and no amount of material work hides that.

The second is *bevels*. A hard 90-degree edge catches no light, so a low-poly
model reads as flat shapes. A two-millimetre bevel puts a highlight along
every edge, and that single detail is most of the difference between "some
boxes" and "a vehicle".

Everything else about the car — wheels, thrusters, trim, body kits, paint —
stays in Vehicle.tsx, because all of it either animates per frame or changes
with the garage, and neither belongs in a static mesh.
"""

import math
import os
import sys

import bmesh
import bpy

# Stations down the length of the car, nose first: (z, half width, floor, roof).
# The flank trim strips in Vehicle.tsx sit at x = +/-1.0 and the tail light is
# 1.7 wide, so the waist and tail widths here are not free choices.
BODY = [
    (-2.85, 0.50, -0.17, -0.05),
    (-2.35, 0.72, -0.20, 0.02),
    (-1.70, 0.90, -0.22, 0.14),
    (-0.90, 0.99, -0.24, 0.24),
    (0.10, 1.00, -0.24, 0.26),
    (0.95, 1.02, -0.23, 0.26),
    (1.55, 1.00, -0.21, 0.24),
    (1.95, 0.92, -0.18, 0.18),
    (2.10, 0.80, -0.14, 0.10),
]

# The canopy. Starts below the body's roofline so the two never show a seam.
CANOPY = [
    (-1.15, 0.40, 0.10, 0.30),
    (-0.60, 0.60, 0.10, 0.50),
    (0.30, 0.66, 0.10, 0.56),
    (0.95, 0.58, 0.10, 0.48),
    (1.20, 0.44, 0.10, 0.34),
]


def ring(half_width, floor, roof):
    """One cross-section: a rectangle with its corners cut off.

    Eight points rather than four. The cut corners give the bevel modifier an
    edge to work along instead of a single hard corner, which is what stops
    the bevel pinching where three faces meet.
    """
    w = half_width
    r = min(0.11, w * 0.34, (roof - floor) * 0.34)
    return [
        (w, floor + r),
        (w, roof - r),
        (w - r, roof),
        (-(w - r), roof),
        (-w, roof - r),
        (-w, floor + r),
        (-(w - r), floor),
        (w - r, floor),
    ]


def loft(name, stations):
    """Bridges the stations into a closed solid and returns the object."""
    mesh = bpy.data.meshes.new(name)
    obj = bpy.data.objects.new(name, mesh)
    bpy.context.collection.objects.link(obj)

    bm = bmesh.new()
    rings = []
    for z, half_width, floor, roof in stations:
        # Blender is Z-up and the exporter converts to glTF's Y-up, so a
        # station's height goes in Z and its position down the car goes in -Y.
        # Built the obvious way round, the car exports standing on its nose.
        rings.append([bm.verts.new((x, -z, y)) for x, y in ring(half_width, floor, roof)])
    bm.verts.ensure_lookup_table()

    count = len(rings[0])
    for a, b in zip(rings, rings[1:]):
        for i in range(count):
            j = (i + 1) % count
            bm.faces.new((a[i], a[j], b[j], b[i]))

    # Caps, so the solid is closed and the exporter has watertight geometry.
    bm.faces.new(tuple(reversed(rings[0])))
    bm.faces.new(tuple(rings[-1]))

    bm.normal_update()
    bmesh.ops.recalc_face_normals(bm, faces=bm.faces)
    bm.to_mesh(mesh)
    bm.free()
    return obj


def finish(obj, width=0.022):
    """Bevel every edge, then shade it so the facets stay crisp."""
    bevel = obj.modifiers.new("Bevel", "BEVEL")
    bevel.width = width
    bevel.segments = 2
    bevel.limit_method = "ANGLE"
    bevel.angle_limit = math.radians(28)
    bevel.harden_normals = False

    bpy.context.view_layer.objects.active = obj
    obj.select_set(True)
    try:
        # Smooth across the shallow bevel faces, flat across the panels — the
        # look the rest of this world is drawn in.
        bpy.ops.object.shade_auto_smooth(angle=math.radians(24))
    except (AttributeError, RuntimeError):
        bpy.ops.object.shade_flat()
    obj.select_set(False)


def main():
    bpy.ops.wm.read_factory_settings(use_empty=True)

    finish(loft("Body", BODY))
    finish(loft("Canopy", CANOPY), width=0.016)

    out = sys.argv[sys.argv.index("--") + 1]
    os.makedirs(os.path.dirname(out), exist_ok=True)
    bpy.ops.export_scene.gltf(
        filepath=out,
        export_format="GLB",
        export_apply=True,          # bake the bevel in; the runtime gets geometry, not modifiers
        export_materials="NONE",    # paint is chosen in the garage, so it cannot live in the file
        export_cameras=False,
        export_lights=False,
        export_yup=True,
    )
    print("WROTE", out)


main()
