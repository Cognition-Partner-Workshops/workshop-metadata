# Data Source Migration — Facilitator Notes

Companion to [data-source-migration.md](data-source-migration.md).

## Setup Notes

- The app uses H2 in-memory database — both legacy and modern schemas can coexist in the same instance
- The column mapping doc in `data/mappings/column_mappings.md` provides the complete field-level reference
- Bonus exercise: implement a feature flag for dual-read mode (switch between data sources at runtime)

## Recommended Exercise Flow

1. **Orientation (5 min):** Have participants review the legacy schema characteristics and column mappings before starting
2. **Core exercise (40 min):** Run Step 1 — entity creation, migration service, service rewiring
3. **Validation (10 min):** Verify API parity using golden-file comparison
4. **Stretch (5 min):** Add the dual-read feature flag for advanced participants

## Common Pitfalls

- Participants may try to connect to an external database — remind them H2 in-memory handles everything locally
- Date parsing edge cases (null values, empty strings) are common sources of migration bugs — encourage participants to check these in review
- The denormalized borrower fields in loan records need careful handling during normalization

## Prerequisite Checks

- Ensure the uc-data-source-migration-jdbc-normalization repository is connected in Devin's org settings
- DeepWiki indexing should be triggered before the session
