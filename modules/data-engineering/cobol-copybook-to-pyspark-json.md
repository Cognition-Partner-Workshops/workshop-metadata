# COBOL Copybook to PySpark/JSON

## Repositories

- [aws-mainframe-modernization-carddemo](#aws-mainframe-modernization-carddemo)

---

## Challenge

Given COBOL copybooks (record layout definitions) and their corresponding fixed-width feed files, generate PySpark ingestion scripts and JSON schemas that accurately parse and load the mainframe data. The copybooks define field names, types (DISPLAY, COMP, COMP-3), offsets, and lengths — participants use Devin to translate these into modern data engineering artifacts without any manual mainframe knowledge.

## Target Outcomes

- PySpark ingestion script(s) that read fixed-width feed files using copybook-derived schemas
- JSON schema files describing record layouts (field names, types, offsets, lengths, scale)
- Validation output comparing parsed PySpark DataFrame row counts and sample values against the raw feed file
- PR with generated configs, ingestion code, and a `COPYBOOK_PARSING_NOTES.md` documenting type-mapping decisions (e.g., COMP-3 → DecimalType, PIC X → StringType)

## Starting Points

The repo contains several copybook → feed file pairs of varying complexity:

| Copybook | Feed File | Record Size | Fields | Complexity | Good For |
|----------|-----------|-------------|--------|------------|----------|
| `CVACT01Y.cpy` | `acctdata.txt` | 300B | Account ID, balances (S9V99), dates, zip, FILLER | Medium | First attempt — signed numerics + FILLER handling |
| `CUSTREC.cpy` | `custdata.txt` | 500B | Customer PII, addresses, SSN, FICO score | Medium | Largest record — many text + numeric fields |
| `CVACT02Y.cpy` | `carddata.txt` | 150B | Card number, CVV, embossed name, expiry, status | Low-Medium | Quick win — simple types |
| `CVACT03Y.cpy` | `cardxref.txt` | 50B | Card ↔ Customer ↔ Account linkage | Low | Smallest record — good warm-up |
| `CVTRA01Y.cpy` | `tcatbal.txt` | 50B | Nested group key (ACCT-ID + TYPE-CD + CD), signed balance | Medium | Nested COBOL groups → struct types |

Copybooks are in `app/cpy/`, feed files in `app/data/ASCII/`.

## What Participants Will Learn

- How Devin reads COBOL copybooks and extracts field-level metadata (PIC clauses, levels, FILLER)
- How Devin maps COBOL data types to PySpark types (PIC 9 → IntegerType, PIC S9V99 → DecimalType, PIC X → StringType)
- How Devin generates fixed-width parsing logic from byte offsets
- How Devin handles COBOL-specific constructs (signed numerics, FILLER padding, nested group levels)
- The value of automated schema generation for mainframe data migration

## Devin Features Exercised

- Domain-specific code generation (COBOL → PySpark/JSON)
- Schema inference from legacy data definitions
- Fixed-width file parsing logic generation
- PR creation with technical documentation
- DeepWiki for codebase exploration (understanding copybook → program relationships)
- Ask Devin for pre-session research on COBOL data types

## Difficulty

Intermediate

## Estimated Time

45 minutes

## Notes

- Feed files in `app/data/ASCII/` are ASCII-encoded (not EBCDIC) — no character encoding conversion needed for the basic exercise
- EBCDIC feed files in `app/data/EBCDIC/` are available for an advanced variant requiring encoding handling
- The repo also has 38 JCL files in `app/jcl/` — these are mainframe control files but NOT PySpark/JSON configs, so there is no overlap with the generation task
- Only ~10 of the 62 copybooks map to feed files; the rest are UI/CICS screen definitions (BMS maps, COMMAREA layouts) that don't have corresponding data files

---

## <a id="aws-mainframe-modernization-carddemo"></a>aws-mainframe-modernization-carddemo

**Repository:** [aws-mainframe-modernization-carddemo](https://github.com/Cognition-Partner-Workshops/aws-mainframe-modernization-carddemo)

AWS CardDemo — a simulated mainframe credit card management system (Apache 2.0). Contains 62 COBOL copybooks defining record layouts, 9 ASCII fixed-width feed files, 30+ COBOL batch programs, and JCL job definitions. The copybook → feed file pairs provide clean raw material for PySpark schema and ingestion code generation.

### Step 1: Paste into Devin

> Analyze the COBOL copybook `app/cpy/CVACT01Y.cpy` in aws-mainframe-modernization-carddemo. This defines the ACCOUNT-RECORD layout (300 bytes) with fields like ACCT-ID (PIC 9(11)), ACCT-CURR-BAL (PIC S9(10)V99), dates (PIC X(10)), and FILLER. Generate: (1) a PySpark script that reads `app/data/ASCII/acctdata.txt` as a fixed-width file using the copybook-derived schema, (2) a JSON schema file describing each field's name, COBOL PIC clause, PySpark type, byte offset, and length. Validate by printing the DataFrame schema and first 5 rows. Then repeat for `CUSTREC.cpy` → `custdata.txt` and `CVACT02Y.cpy` → `carddata.txt`. Open a PR with all generated artifacts and a `COPYBOOK_PARSING_NOTES.md` documenting your type-mapping decisions.

### Step 2: Research with Ask Devin

- *"What COBOL data types are used across the copybooks in aws-mainframe-modernization-carddemo/app/cpy/? Which copybooks use signed numerics (S9), implied decimals (V99), or COMP/COMP-3 packed fields?"*
- *"Which copybooks in aws-mainframe-modernization-carddemo have corresponding feed files in app/data/ASCII/? Map each copybook to its feed file and record length."*
- Use the analysis to identify which copybook → feed file pairs to prioritize

### Step 3 (Optional): Read the DeepWiki

Open the DeepWiki page for aws-mainframe-modernization-carddemo to understand the application domain (credit card management), how copybooks relate to COBOL programs, and which batch programs read which feed files. This context helps validate whether the generated PySpark schemas capture the right business semantics.

### Step 4 (Optional): Review and Give Feedback

- **Review the diff** — do the PySpark schemas correctly map COBOL PIC clauses to appropriate Spark types? Are byte offsets calculated correctly accounting for FILLER?
- **Leave a comment** asking Devin to add a second ingestion variant that reads the EBCDIC files in `app/data/EBCDIC/` with proper encoding conversion
- **Try extending** the exercise by asking Devin to generate a unified PySpark pipeline that reads all 5 feed files and joins them on ACCT-ID to produce a denormalized customer-account-card DataFrame
