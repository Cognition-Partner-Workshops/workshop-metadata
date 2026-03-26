# Events

This directory contains event-specific workshop instances. Each event links to one or more reusable workshops from `workshops/`, adds event-specific details (date, location, audience), and can override any workshop content for that specific instance.

## Workshop vs. Event

- **Workshops** (`workshops/`) are reusable reference templates — they define the labs, modules, repos, and structure.
- **Events** (`events/`) are specific instances — they reference workshops and add facilitator details, audience context, and overrides.

See [`workshops/README.md`](../workshops/README.md) for available workshop templates.

## How to Create a New Event

1. Copy `_template/` to a new directory named `YYYY-MM-DD-city/`
2. Reference the workshop(s) this event is based on (from `workshops/`)
3. Edit the `README.md` to fill in event details and any overrides
4. Specify which repos need to be set up on Devin's machine
5. Note any runtime resources that need to be provisioned

## Event Directory Convention

```
events/
├── _template/
│   └── README.md              ← Copy this to start a new event
├── 2026-03-09-oslo/
│   └── README.md              ← Oslo workshop
├── 2026-03-09-san-francisco/
│   └── README.md              ← SF workshop: Framework Upgrade + CVE Remediation
├── 2026-03-13-dc/
│   └── README.md              ← DC event (demo + hands-on)
├── cobol-modernization-workshop/
│   └── README.md              ← Based on workshops/legacy-modernization
├── dc-2/
│   └── README.md              ← Based on workshops/agentic-ai
├── enterprise-demo-track/
│   └── README.md              ← Based on workshops/security-compliance
├── workshop-variant-2/
│   └── README.md              ← Based on workshops/quality-engineering + workshops/security-compliance
├── platform-microservice-decomposition/
│   └── README.md              ← Based on workshops/platform-microservice-decomposition
└── YYYY-MM-DD-city/
    └── README.md              ← Your new event
```

## Time Budget Guidelines

| Workshop Duration | Recommended Challenges | Notes |
|------------------|----------------------|-------|
| 2 hours | 2–3 challenges | Pick from one category |
| Half day (4 hours) | 4–6 challenges | Mix 2 categories |
| Full day (8 hours) | 8–12 challenges | Mix 3+ categories, include advanced |
| Multi-day | All challenges | Full curriculum |

## Audience-Based Recommendations

| Audience | Recommended Categories | Entry Point |
|----------|----------------------|-------------|
| Developers | D (Feature Dev) + C (Migration) | D1 or D4 |
| QA Engineers | A (Quality) + D (Bug Fixing) | A1 or A2 |
| DevOps/Platform | E (DevOps) + B (Security) | E1 or E3 |
| Security Engineers | B (Security) + E (DevOps) | B2 or B3 |
| Architects | C (Migration) + E (DevOps) | C3 or C5 |
| Mixed/General | A + B + C + D | A1 (warm-up) → B1 → C2 → D4 |
| Executive/Demo | D4 + A1 + C2 | Quick wins with visible output |
| Mainframe/COBOL | C (Migration: MM12→MM13→MM14→MM1) | MM12 (discovery) |
