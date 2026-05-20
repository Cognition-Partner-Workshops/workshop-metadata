# Data Quality & Validation — Facilitator Notes

Companion to [data-quality-validation.md](data-quality-validation.md).

## Setup Notes

- This module shares the same repository as [Data Source Migration](data-source-migration.md) — plan accordingly if running both in the same workshop
- The legacy seed data in `data-legacy.sql` contains only 5 records per table — enough for validation rule development but not for statistical quality analysis
- Column mappings in `data/mappings/column_mappings.md` document every transformation — use this as the answer key for expected validation rules

## Recommended Exercise Flow

1. **Orientation (5 min):** Walk through the legacy CDW table structure and column mappings
2. **Core exercise (30 min):** Run Step 1 — build the validation framework
3. **Research (10 min):** Use Ask Devin to identify additional quality risks

## Common Pitfalls

- Participants may focus on row-level checks and miss referential integrity between tables — prompt them to check CDW_LN_ACCT ↔ CDW_BORR_MSTR linkage
- The all-VARCHAR legacy schema means every validation rule involves parsing — encourage participants to add format validation before type conversion

## Prerequisite Checks

- Ensure the uc-data-source-migration-jdbc-normalization repository is connected in Devin's org settings
- DeepWiki indexing should be triggered before the session
