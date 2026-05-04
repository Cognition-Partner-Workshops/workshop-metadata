# Informatica PowerCenter Analysis

## Repositories

- [ts-informatica-powercenter](#ts-informatica-powercenter)

---

## Challenge

Analyze an Informatica PowerCenter estate exported as XML to produce a comprehensive inventory of mappings, workflows, sources, targets, transformations, and data lineage. This challenge tests Devin's ability to parse complex vendor-specific XML metadata, trace data flows across ETL components, and generate actionable documentation for migration planning.

## PowerCenter XML Artifact Types

| XML Element | Purpose | Key Attributes |
|-------------|---------|---------------|
| `SOURCE` | Source table or flat-file definition | `DATABASETYPE`, `DBDNAME`, `OWNERNAME` |
| `TARGET` | Target table definition | `DATABASETYPE`, `DBDNAME`, `OWNERNAME` |
| `MAPPING` | Transformation logic connecting sources to targets | `NAME`, `OBJECTVERSION` |
| `TRANSFORMATION` | Individual transform (Expression, Filter, Lookup, etc.) | `TYPE`, `NAME`, `TEMPLATENAME` |
| `CONNECTOR` | Dataflow link between transformation ports | `FROMFIELD`, `TOFIELD` |
| `SESSION` | Runtime configuration for a mapping | `MAPPINGNAME`, `SORTORDER` |
| `WORKFLOW` | Orchestration container for one or more sessions | `NAME`, `SCHEDULERNAME` |
| `FOLDER` | Logical grouping of all objects | `NAME`, `OWNER` |

## Target Outcomes

- Complete inventory of all PowerCenter objects (sources, targets, mappings, transformations, sessions, workflows) across all XML exports
- Data lineage documentation tracing source-to-target field mappings through each transformation chain
- Dependency graph showing which sessions/workflows depend on which mappings, and which mappings share sources or targets
- `POWERCENTER_ASSESSMENT.md` documenting the estate scope, complexity metrics (number of mappings, transformation types, source/target systems), and migration risk areas
- PR with all assessment artifacts

## What Participants Will Learn

- How Devin parses and understands vendor-specific XML metadata formats (Informatica PowerCenter `powrmart.dtd`)
- How Devin traces data lineage through transformation chains (Source → Expression → Filter → Lookup → Target)
- How Devin identifies cross-mapping dependencies and shared objects
- The importance of comprehensive estate assessment before starting a migration

## Devin Features Exercised

- Complex XML parsing and metadata extraction
- Data lineage analysis and documentation generation
- Dependency graph construction
- Large-file analysis (21 MB of XML across 12 exports)
- PR creation with structured assessment documentation

## Difficulty

Intermediate

## Estimated Time

45 minutes

## Notes

- The XML exports use the PowerCenter `powrmart.dtd` schema — all standard PowerCenter object types are represented
- The estate uses Oracle as both source and target database (schemas: `HISTDBA`, `NKNIGHT`, `EHRP`)
- Transfer scripts in `Transfer Scripts/` show the orchestration pattern (pmcmd via shell) and can supplement the XML analysis
- The `ehrp2biis_preload` and `ehrp2biis_afterload.sql` scripts reveal pre/post-load logic that won't appear in the XML exports

---

## <a id="informatica-demo"></a>ts-informatica-powercenter

**Repository:** [ts-informatica-powercenter](https://github.com/Cognition-Partner-Workshops/ts-informatica-powercenter)

Informatica PowerCenter 9.6.1 XML exports for a government HR data integration system (EHRP-to-BIIS). Contains 12 mapping exports (CPM, CPM_AFPS, CPM_CDC, CPM_NIH, CPM_OIG, LES, FDA_Leave, EHRP2BIIS_UPDATE, Pay_Calendar, Pseudossn, COMPTIME) totaling 117K lines of XML, plus Oracle SQL pre/post-load scripts and shell transfer workflows.

### Step 1: Paste into Devin

> Analyze all PowerCenter XML exports in ts-informatica-powercenter/XML/. For each XML file, extract: (1) all SOURCE definitions with database, owner, and field details, (2) all TARGET definitions, (3) all MAPPING names with their transformation chains (list each transformation type and name in order), (4) all SESSION and WORKFLOW definitions. Produce a POWERCENTER_INVENTORY.md with a summary table of all objects by type, and a POWERCENTER_LINEAGE.md that documents the source-to-target data flow for each mapping. Also analyze the shell scripts in Transfer Scripts/ to document the orchestration pattern. Open a PR.

### Step 2: Research with Ask Devin

- *"What types of transformations are used across the PowerCenter XML exports in ts-informatica-powercenter? Which mappings are the most complex (most transformations, most source/target connections)?"*
- *"What Oracle schemas and tables appear as sources and targets across all the XML exports? Are there any shared tables that appear in multiple mappings?"*
- Use the analysis to identify which mappings are the highest-risk for migration (most complex, most dependencies)

### Step 3 (Optional): Read the DeepWiki

Open the repo's DeepWiki page to understand the overall structure. Cross-reference the XML exports with the shell transfer scripts and SQL scripts to build a complete picture of the data integration pipeline — not just the PowerCenter metadata but also the orchestration and pre/post-processing layers.

### Step 4 (Optional): Review & Give Feedback

- **Review the diff** — does the inventory capture all object types? Are the lineage diagrams accurate for the transformation chains?
- **Leave a comment** asking Devin to add a migration complexity scoring matrix that rates each mapping by number of transformations, source count, and use of advanced features (Lookup, Joiner, Aggregator)
- **Watch Devin respond** and push a follow-up commit
