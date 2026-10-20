# Web foundation

## Selected development stack

React + TypeScript + Vite on Node.js 24, with npm and a committed lockfile. This is an
implementation choice for the new repository, not a claim about Kotakio's own stack.
The browser-heavy editor does not initially require server-side rendering or credentials.
Use SVG for precise 2D paths; select and add a WebGL renderer when implementing the 3D module.
Do not install speculative backend infrastructure before persistence requirements are defined.

## Planned separation

1. Domain: versioned packaging documents, materials and physical dimensions.
2. Geometry: pure parametric panel/cut/crease calculations with stable panel identifiers.
3. Editor: React controls, selection, undo/redo and 2D SVG interaction.
4. Preview: panel graph, hinges and artwork mapping using the same geometry output.
5. Print/export: exact scale, guides and validation with explicit format support.
6. Persistence: start with versioned local documents; add authenticated cloud storage later.

The current implementation includes only the runtime, startup page and domain type.
No mathematical geometry or print-yield algorithm has been introduced in this setup.

## Validation direction

When geometry is implemented, test dimensional invariants, panel connectivity, closure
clearances and export scaling. Do not use screenshot sample yield values as golden outputs.
Keep production correctness separate from visual UI acceptance.
