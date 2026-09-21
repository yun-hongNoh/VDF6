# VDF Next v0.3.2.1 Release Checklist

- App: v0.3.2.1
- Engine: VDF 6.0.0 STABLE / FREEZE
- Engine rules changed: NO
- Quick Start restored: YES
- Decision Flow restored: YES
- AI proposal / professor review guidance restored: YES
- 6 info types + Card A~F guide restored: YES
- GitHub Pages workflow included: YES
- Vite Pages base: repository-name auto detection
- Repository root must directly contain `package.json`, `vite.config.ts`, `src/`, `.github/`.

## v0.3.2.1 Subject Propagation Hotfix

- [x] Image + Card + empty subject => Prompt blocked
- [x] Existing Image subject + Card override => original subject preserved
- [x] Professor subject override => override remains source of truth
- [x] Card A~F canonical fragments unchanged
- [x] Engine 6.0.0 rules hash unchanged
- [x] Engine 6.1 Experimental package unchanged
