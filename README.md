# Package software

Web development foundation for a Kotakio-inspired packaging studio.

## Run

Use Node.js 24 and npm (the selected cloud runtime already provides these).

```sh
bash scripts/setup-cloud.sh
npm run dev
```

The dev server binds to `0.0.0.0:5173`. Forward port 5173 in your cloud IDE.
For a production preview, run `npm run build` followed by `npm run preview` and forward port 4173.

## Checks

`npm run check` runs strict TypeScript checks, setup-script tests and the production build.
Dependencies are pinned by `package-lock.json`; fresh and cached environments use `npm ci`.

## Cloud configuration

For the existing `dukes-snr/package-software` environment, select this repository and Node.js 24.
Set the setup command to `bash scripts/setup-cloud.sh` and the maintenance command to
`bash scripts/maintain-cloud.sh`. Install dependencies during setup. No secrets or external
services are required. Do not start a long-running dev server in the setup command.

GitHub Codespaces and compatible IDEs can use `.devcontainer/devcontainer.json`.
The devcontainer configuration does not automatically update an existing Codex environment.

## Project boundaries

- `src/main.tsx`: minimal startup page; this is not the packaging editor.
- `src/domain/`: shared physical project model, independent of rendering.
- `docs/kotakio-analysis.md`: requirements extracted from the supplied conversation.
- `docs/architecture.md`: implementation direction and deferred decisions.

No CAD engine, 3D renderer, export pipeline, backend or manufacturing validation is implemented.
