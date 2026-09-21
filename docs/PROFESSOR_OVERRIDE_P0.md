# Professor Override Completion — P0

Implemented as App v0.3.2 from the v0.3.1.1 baseline without changing Engine 6.0/6.1 rule packages.

Final evaluation precedence: Professor Override → AI-generated block state → engine rules/defaults.

Implemented review overrides: `infoType`, `track` (`text`/`shape`/`image` review mode), `card`, `subject`, and the existing five `subjectTraits`. `text` is a review/presentation mode that compiles to the existing public `shape` schema while suppressing SVG output, so the published JSON contract is unchanged.

Image prompts are now generated only from an effective Image state with a selected Card. Shape/Text states clear image-only Card/Prompt output. AI Gate evidence is preserved; a professor-forced Image state receives an explicit override warning rather than deleting the Gate result.
