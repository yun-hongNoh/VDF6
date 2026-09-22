# Engine Package Contract v1 — P0

## Scope and versioning

App baseline: **0.3.2.6**. Stable engine: **6.0.0**. Experimental engine: **6.1.0-experimental.1**.

`package_contract_version` and `evaluation_contract_version` are **1.0**. The existing provider `contract.json.version` stays **6.0** for the two supplied engines; these are separate version namespaces. Engine 6.1 remains HOLD / Experimental. No 6.2 judgment changes are included.

## Package files

```text
manifest.json                 engine identity and the three contract versions
rules.json                    this engine's judgment/execution rule source
VDF6_지시문.md                 judgment instruction (judgment.md is an accepted alias)
VDF6_규칙.md                   rule explanations
contract.json                 provider contract metadata, retained for compatibility
output.schema.json            actual provider output JSON Schema (draft-07)
adapter.json                  declarative identity or projection mapping
evaluation.schema.json        exact copy of the shared VdfEvaluation v1 schema
regression/<case>/input.md
regression/<case>/expected.json
regression/<case>/README.md    optional context
```

A single wrapping directory is allowed. Exactly one manifest must exist. Required files are resolved relative to that manifest, never independently across unrelated directories. Conflicting aliases and executable files are rejected. Package v1 requires regression fixtures. Invalid/missing expected JSON is an error, not a silently skipped fixture. Original supporting documents and the experimental internal IR specification survive export.

The bundled engine is assembled from the existing generated 6.0 instruction, Markdown, rules text and fixtures; these sources remain unchanged. `npm run package:engines` generates both distributable v1 ZIPs into `engine-packages/`. The experimental source directory remains the original legacy package; generation migrates its metadata/schema/adapter without changing its rules or judgment instruction.

Registration validates the package and stores it in IndexedDB; activation remains a separate operation. A package cannot replace/delete built-in 6.0 or overwrite/delete the active package. A missing selection resolves to built-in 6.0. Stored legacy packages with the exact existing 6.0 provider contract are upgraded in memory with the shared output schema and identity adapter. Unknown legacy contracts are rejected on import. Export produces an explicit v1 package.

## Shared result

The authoritative schema is `src/contracts/vdf-evaluation-v1.schema.json` and its TypeScript boundary is `src/contracts/vdfEvaluation.ts`.

```ts
type VdfEvaluation = {
  contractVersion: '1.0';
  engine: { id: string; version: string };
  blocks: VdfBlock[];
};
```

`blocks` retain all existing required fields: `id`, `title`, `track`, `info_type`, `item_count`, `slots`, `gate`, `card`, `subject`, `subject_traits`. `item_structure` and `split` remain optional. Unknown keys are rejected, including nested gate/trait/split keys. Counts are nonnegative integers. Gate is null or `{passed:boolean, reason:string}`. Subject is string or null. Card is A–F or null. All five existing traits are required booleans.

The provider's `track` remains `image | shape`, matching the actual baseline parser. **`text` remains an App presentation/override state**, represented by existing `presentationTrack`, not a new provider track. The six public info types and five traits are unchanged.

VdfEvaluation is the canonical judgment result **before** App execution. Existing `BlockEvaluation` remains the App's rendered/reviewed result (prompt, SVG, warnings, presentationTrack). Rendering artifacts are not included in the engine wire schema.

## Adapter

`src/services/engineAdapter.ts` performs:

```text
provider JSON
  → selected package output.schema.json validation
  → selected package adapter.json
  → shared VdfEvaluation v1 validation
  → detached canonical result
  → existing App evaluation / professor review / SVG / six-line prompt
```

Both delivered engines use:

```json
{"kind":"identity","contract_version":"1.0"}
```

They already emit identical public block JSON. Their internal boundary trace remains separate from Final JSON. Identity does not alter an AI subject, bootstrap an entity, infer a track, or add a judgment rule.

For future packages with a different internal representation, `projection` supports a `blocks_path` JSON Pointer and a `fields` map. Each public block field has a source `path` and optionally an explicit `values` lookup. Every required public field must be mapped; optional fields may be omitted. Values without a declared mapping are rejected. Example fragment:

```json
{
  "kind": "projection",
  "contract_version": "1.0",
  "blocks_path": "/items",
  "fields": {
    "track": {"path":"/mode","values":{"object":"image","diagram":"shape"}}
  }
}
```

This fragment is explanatory, not a complete importable adapter; all required fields must be present. The automated test constructs a complete test-only adapter, registers it, and verifies identical App output. It does not introduce a new production engine or rule.

No `eval`, external module import, embedded JavaScript handler, custom executable schema keyword, async schema, or network schema resolution is exposed to packages. Schema validation uses Ajv in the App. Only local `#/...` schema references are accepted. Prototype-related mapping paths are rejected. A projection's private fields stay behind the adapter.

## Prompt and execution binding

`createVdfBridgePrompt()` loads the active package and uses its judgment instruction, rule Markdown, exact rules JSON text, and output schema. The output schema is explicitly authoritative for response shape because frozen `rules.json.output_contract` contains historical explanatory names that differ from the actual baseline JSON keys.

The Prompt Bridge component clears cached prompts and invalidates pending generation when the engine registry/selection changes. A prompt cannot combine an arbitrary instruction/Markdown with another engine object. `analyzePlan()` enters through `parseEngineResult()` and the adapter, then invokes the existing execution evaluator. A checked result retains its `resultEngine` snapshot during professor review.

Review card labels/status and result details receive projected runtime card rules from that same result engine; they no longer read the 6.0 global card data. The user guide remains a reference to the frozen baseline.

## Visual Entity responsibility

- Engine: choose the object/entity through its judgment instruction and emitted `subject`.
- Adapter: validate/map the declared result; no semantic entity inference.
- App: preserve the baseline deterministic normalization and Shape→Image professor override fallback from existing title/slots.
- Explicit professor subject wins over AI subject; AI subject wins over bootstrap. Clearing subject remains explicit and does not re-bootstrap.

## Freeze boundary

Contract v1 is suitable to freeze for the present six info types, A–F cards, five traits, provider image/shape tracks and existing review workflow. Different internal field names/enum values can be handled by declarative projection. Changes requiring new user interaction, tracks, traits, output artifacts, or executable adapter logic require an explicit future contract/App review. P0 does not establish AI semantic performance or promote 6.1 to Stable.
