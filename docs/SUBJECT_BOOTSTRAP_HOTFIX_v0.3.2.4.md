# v0.3.2.4 Subject Bootstrap HOTFIX

## Purpose
When a professor explicitly changes a Shape/Text block to Image and the AI block has no subject, create an editable subject draft from the block's existing title and slots.

## Safety boundary
- No AI/API call.
- No new semantic content is invented.
- No translation is performed.
- Draft uses only existing title/slots.
- Professor edit overrides the bootstrap immediately.
- Existing AI subject remains preferred when present.
- Engine 6.0/6.1 rules and final JSON contract are unchanged.
