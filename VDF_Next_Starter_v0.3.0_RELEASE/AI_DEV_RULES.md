# AI Development Rules
1. VDF engine rules are not UI preferences.
2. Engine changes are versioned packages, not ad-hoc toggles.
3. Built-in VDF 6.0 is a fallback and must remain recoverable.
4. Registration and activation are separate actions.
5. Do not silently normalize provider schema drift; reject it visibly.
6. Keep app version and engine version independent.
