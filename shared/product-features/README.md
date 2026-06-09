# Product Feature Tours

A guided tour of Devin's three product surfaces — what each one does, when to use it, and how they work together.

| Product | What It Is | Guide |
|---------|-----------|-------|
| [Devin Cloud](devin-cloud.md) | Autonomous cloud agent — runs on its own VM, opens PRs, monitors CI, scales to child sessions | Feature tour |
| [Devin Desktop](devin-desktop.md) | AI-powered IDE (Windsurf) with Devin Local, autocomplete, and cloud delegation | Feature tour |
| [Devin CLI](devin-cli.md) | Terminal-based local agent with REPL, permission modes, and cloud handoff | Feature tour |

## How They Relate

```
┌─────────────────────────────────────────────────────────────┐
│                     Devin Platform                           │
├───────────────┬───────────────────────┬─────────────────────┤
│  Devin Cloud  │    Devin Desktop      │     Devin CLI       │
│  (Web App)    │    (IDE / Windsurf)   │     (Terminal)      │
│               │                       │                     │
│  Autonomous   │  Interactive coding   │  Local agent in     │
│  background   │  with AI pair +       │  your terminal +    │
│  agent on     │  cloud delegation     │  cloud delegation   │
│  its own VM   │                       │                     │
└───────┬───────┴───────────┬───────────┴──────────┬──────────┘
        │                   │                      │
        └───────────────────┼──────────────────────┘
                            │
              Shared context and natural integration points
```

- **Devin Cloud** is for autonomous, fire-and-forget tasks — kick off a session and move on
- **Devin Desktop** is for interactive pair programming with an AI that sees your editor context in real time
- **Devin CLI** is for developers who live in the terminal — same agent capabilities, no GUI required

All three products share context through the Devin platform (Knowledge, Secrets, Git connections, MCP) and can delegate work to Devin Cloud for autonomous execution.
