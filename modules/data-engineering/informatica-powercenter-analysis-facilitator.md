# Informatica PowerCenter Analysis — Facilitator Notes

Companion to [informatica-powercenter-analysis.md](informatica-powercenter-analysis.md).

## Setup Notes

- The XML exports use the PowerCenter `powrmart.dtd` schema — all standard PowerCenter object types are represented
- The estate uses Oracle as both source and target database (schemas: `HISTDBA`, `NKNIGHT`, `EHRP`)
- Transfer scripts in `Transfer Scripts/` show the orchestration pattern (pmcmd via shell) and can supplement the XML analysis
- The `ehrp2biis_preload` and `ehrp2biis_afterload.sql` scripts at the repo root reveal pre/post-load logic that does not appear in the XML exports
- XML exports are individual files in `XML/` without `.xml` extensions (CPM, CPM_AFPS, etc.)

## Recommended Exercise Flow

1. **Orientation (5 min):** Walk through the PowerCenter XML artifact types table and explain the EHRP-to-BIIS integration context
2. **Core exercise (30 min):** Run Step 1 — inventory and lineage extraction from XML exports
3. **Research (10 min):** Use Ask Devin to identify highest-complexity mappings

## Common Pitfalls

- Participants may expect the XML files to have `.xml` extensions — they don't; they are named after the mapping (CPM, LES, etc.)
- The CPM mapping is the largest (33K lines) — suggest starting with a smaller mapping like Pseudossn or COMPTIME for initial exploration
- Pre/post-load SQL scripts are at the repo root, not in the XML directory — remind participants to check these for complete pipeline understanding

## Prerequisite Checks

- Ensure the ts-informatica-powercenter repository is connected in Devin's org settings
- DeepWiki indexing should be triggered before the session (the 21 MB of XML may take longer to index)
