# GitHub Pages Hotfix v0.3.1.1

This release corrects the deployment problems observed in v0.3.1.

## Changes

1. `src/vite-env.d.ts` was added so TypeScript recognizes Vite asset/CSS imports.
2. `.github/workflows/deploy-pages.yml` explicitly installs devDependencies:
   `npm install --include=dev --no-audit --no-fund`.
3. `DEPLOY_TO_GITHUB.cmd` was added for future one-command build/commit/push after a release has been copied into the cloned repository.

## Engine integrity

VDF Engine 6.0.0 is unchanged. Canonical `rules.json` SHA256:

`c20dae4c893d4455069b90fe2257239af69ca4cd247505b4ed5c69d3b2d5e1d5`
