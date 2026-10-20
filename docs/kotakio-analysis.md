# Kotakio conversation analysis

Source supplied by the user: https://chatgpt.com/share/6ad70c5e-51ec-83ea-bf5d-1229e417ba51
Reviewed 20 October 2026.

The conversation analyzes an Indonesian packaging editor screenshot. It does not provide source
code or a verified technology stack. Visible interface controls establish product intent, not
proof that the corresponding underlying functions work.

## Product and workflow

An integrated carton design workspace: choose a structure, set physical dimensions and stock,
configure openings and hangers, place artwork, compare the flat dieline with the folded model,
review printing guides, save and export.

## Requirements shown in the reference

- Model, Dimensions, Design and Projects navigation.
- Reverse Tuck End project with 85 × 55 × 135 mm example dimensions.
- Material selector, including Ivory 300 gsm. GSM must not be treated as board thickness.
- Front window toggle and width percentage (70% in the screenshot).
- Round and Euro hanging-tab options.
- 2D, split 2D + 3D, and 3D workspace modes.
- Distinct cut/crease lines, dimensions, bleed and safe-area guides.
- 3D isometric/front/top/side views, rotation, zoom and folding slider/playback.
- Print yield section with sheet dimensions and press allowances.
- Save indicator, undo/redo, export entry point, sign-in and Pro upgrade entry points.

The screenshot reports a 297 × 282 mm blank, six units on 109 × 79 cm stock and one on
48 × 32 cm stock; these are reference UI values, not independently verified calculations.
It lists 12 mm/5 mm gripper allowances, 5 mm edges and 3 mm bleed.

## Unverified or proposed capabilities

Export formats, advanced typography/layers, imported dielines, collaboration, cloud storage,
additional structures, pricing, AI features and manufacturing validation are not established.
Do not claim they exist in Kotakio or in this starter.

## Architectural implication

Use one parametric physical model for both the SVG dieline and the 3D panel graph. Artwork
should be attached to panel identities and rendered consistently in each view. Geometry, folds,
print calculations and export must remain independent of UI code and use millimetres.

The source flags a mismatch between the label Reverse Tuck End and FEFCO 0215. Do not assign
that structural code to the implementation without independent standards verification.
A visual mockup must not be labelled manufacturing-ready merely because it renders correctly.

## Setup scope

This change prepares a web development environment only. The requested editor and all geometry
and manufacturing functionality remain future implementation work.
