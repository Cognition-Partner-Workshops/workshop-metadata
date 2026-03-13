# Category B: Security

Challenges focused on dependency management, vulnerability remediation, security engineering practices, and secrets management.

## Modules

| ID | Challenge | Difficulty | Time |
|----|-----------|-----------|------|
| [SEC1](SEC1.md) | Upgrade Dependencies | Beginner to Intermediate | 45 min |
| [SEC2](SEC2.md) | Remediate Vulnerabilities | Intermediate | 60 min |
| [SEC3](SEC3.md) | Shift Left Security | Intermediate to Advanced | 60 min |
| [SEC4](SEC4.md) | Security Antipatterns | Intermediate | 45 min |
| [SEC5](SEC5.md) | Secrets Management & Detection | Intermediate | 45 min |
| [SEC6](SEC6.md) | Event-Driven SAST Remediation | Advanced | 90 min |
| [SEC7](SEC7.md) | Mass Security Backlog Remediation | Advanced | 90 min |

## Repositories

| Repository | Compatible Modules |
|------------|--------------------|
| app_timesheet | [SEC1](SEC1.md#app_timesheet), [SEC2](SEC2.md#app_timesheet), [SEC3](SEC3.md#app_timesheet), [SEC4](SEC4.md#app_timesheet), [SEC5](SEC5.md#app_timesheet), [SEC6](SEC6.md#app_timesheet), [SEC7](SEC7.md#app_timesheet) |
| Online-Banking-System-using-Java | [SEC4](SEC4.md#online-banking-system-using-java) |
| uc-cve-remediation-regulatory-compliance | [SEC1](SEC1.md#uc-cve-remediation-regulatory-compliance), [SEC2](SEC2.md#uc-cve-remediation-regulatory-compliance), [SEC3](SEC3.md#uc-cve-remediation-regulatory-compliance), [SEC4](SEC4.md#uc-cve-remediation-regulatory-compliance), [SEC5](SEC5.md#uc-cve-remediation-regulatory-compliance), [SEC6](SEC6.md#uc-cve-remediation-regulatory-compliance), [SEC7](SEC7.md#uc-cve-remediation-regulatory-compliance) |
| uc-framework-upgrade-monolith-to-microservices | [SEC5](SEC5.md#uc-framework-upgrade-monolith-to-microservices) |

## When to Use This Category

- Security-conscious audiences (AppSec, DevSecOps teams)
- Workshops demonstrating Devin's ability to interpret CVE databases and SAST output
- Paired with Category A for a "quality + security" half-day workshop
- SEC5 covers secrets management — a common compliance requirement across industries
- SEC6 and SEC7 are **enterprise demo modules** — event-driven SAST remediation and mass backlog remediation with agent orchestration
- See the [Enterprise Demo Track](../../events/enterprise-demo-track/README.md) for a lab sequence using SEC6 + SEC7 + MM11
- The `uc-cve-remediation-regulatory-compliance` repo was specifically curated for these challenges (Spring Boot 2.6.3 with known vulnerable dependencies)
