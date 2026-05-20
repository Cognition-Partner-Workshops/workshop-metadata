# COBOL Copybook to PySpark/JSON — Facilitator Notes

Companion to [cobol-copybook-to-pyspark-json.md](cobol-copybook-to-pyspark-json.md).

## Setup Notes

- Feed files in `app/data/ASCII/` are ASCII-encoded (not EBCDIC) — no character encoding conversion needed for the basic exercise
- EBCDIC feed files in `app/data/EBCDIC/` are available for an advanced variant requiring encoding handling
- The repo also has 38 JCL files in `app/jcl/` — these are mainframe control files but NOT PySpark/JSON configs, so there is no overlap with the generation task
- Only ~10 of the 62 copybooks map to feed files; the rest are UI/CICS screen definitions (BMS maps, COMMAREA layouts) that don't have corresponding data files

## Recommended Exercise Flow

1. **Warm-up (10 min):** Start with `CVACT03Y.cpy → cardxref.txt` (simplest, 50B record) to build confidence
2. **Core exercise (25 min):** Move to `CVACT01Y.cpy → acctdata.txt` (medium complexity, signed numerics + FILLER)
3. **Stretch (10 min):** Attempt `CUSTREC.cpy → custdata.txt` (largest record, many fields) or the EBCDIC variant

## Common Pitfalls

- Participants may confuse copybooks that define screen layouts (BMS maps) with those that define data records — remind them only ~10 copybooks have feed files
- Byte offset miscalculations when FILLER fields are skipped — encourage participants to verify with the first few records manually
- COMP-3 (packed decimal) fields require specific handling — the EBCDIC exercise is advanced and may need extra time

## Prerequisite Checks

- Ensure the ts-cobol-carddemo repository is connected in Devin's org settings
- DeepWiki indexing for ts-cobol-carddemo should be triggered before the session (5–15 minutes to index)
