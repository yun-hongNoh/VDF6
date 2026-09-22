# Browser verification — 2026-09-21

Local Vite application, Codex in-app browser, existing UI controls. No external AI service was called.

| Action | Observed result |
|---|---|
| Stable sample through existing example button | PASS; 11 blocks, 2 images, 6 diagrams, 0 warnings |
| B7 Shape → Image | Image state and subject bootstrap available |
| Choose Card C | Canonical six-line prompt with `동전 펀치기, 포도주 압착기, 금속 활자 인쇄기` |
| Edit subject | Prompt subject immediately matches professor text |
| Enable branded_category | Existing unbranded/no-logo fragment appears in prompt |
| Return to Shape | Image prompt/card removed from execution; SVG present |
| Import generated 6.1 ZIP with existing ZIP chooser | 6.1 listed as HOLD / Experimental; active remains 6.0; 4 fixtures shown |
| Activate 6.1 then reload | 6.1 remains active through real IndexedDB/localStorage |
| Generate judgment prompt under 6.1 | Active version 6.1; Semantic Boundary instruction and `semantic_boundary_layer` rules present; output.schema.json present |
| Same sample under 6.1 | PASS; same 11 blocks, 2 images, 6 diagrams, 0 warnings |
| B7 Shape → Image + Card C under 6.1 | Same bootstrap, six-line prompt and preserved Gate warning |
| Reset professor override under 6.1 | Original automatic Shape/SVG state restored |
| Activate 6.0 again and regenerate same notes | 6.0 prompt; no `semantic_boundary_layer`; output schema still present |
| Browser error log after flow | No error entries |

The two engines were tested with existing recorded/sample plan JSON to establish execution compatibility. These observations are not a new LLM-generated benchmark result. Test registration is local; no deployed service was modified.

Baseline display discrepancy preserved: the release banner says App v0.3.2.1 / Engine 6.0.0, while package.json is 0.3.2.6. The active-engine labels in workflow, registry and Prompt Bridge correctly follow selection. The release banner and guide remain baseline reference text.
