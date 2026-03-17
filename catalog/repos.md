# Repository Catalog

Master inventory of all repositories in the [Cognition-Partner-Workshops](https://github.com/orgs/Cognition-Partner-Workshops/repositories) GitHub org.

## How to Read This Catalog

Each repo entry includes:
- **Description** — what the repo contains
- **Tech Stack** — languages, frameworks, tools
- **License** — open source license
- **Challenges Supported** — links to challenge modules that use this repo
- **Cluster** — if the repo shares git history with another repo (intentional duplication)

---

## Repo Clusters & Upstream Sources

The full machine-readable mapping lives in [`upstream-map.yaml`](upstream-map.yaml). That file records every repo's upstream source, import method (`github-fork`, `clone-and-push`, or `original`), and cluster membership.

Some repos are intentionally duplicated from the same upstream source so that different workshop labs get isolated starting points. This avoids branch confusion during live events. Others are grouped because they belong to the same application or project ecosystem.

> **Why not mirrors?** We intentionally do NOT set up git mirrors between clustered repos. Each repo is meant to diverge from the upstream (and from each other) — mirrors would overwrite lab-specific changes. Instead, add an `upstream` remote when you need to compare: `git remote add upstream <url> && git fetch upstream`.

| Cluster | Label | Upstream Source | Repos | Reason |
|---------|-------|----------------|-------|--------|
| **C1** | Spring Boot RealWorld | [`gothinkster/spring-boot-realworld-example-app`](https://github.com/gothinkster/spring-boot-realworld-example-app) | `ts-java-spring-boot-realworld-example-app`, `uc-framework-upgrade-monolith-to-microservices`, `uc-cve-remediation-regulatory-compliance` | Labs 2 and 3 start from the same Spring Boot 2.6.3 monolith but have different objectives (upgrade vs. CVE remediation). Original import retained with `ts-` prefix. |
| **C2** | AWS CardDemo (COBOL) | [`aws-samples/aws-mainframe-modernization-carddemo`](https://github.com/aws-samples/aws-mainframe-modernization-carddemo) | `aws-mainframe-modernization-carddemo`, `uc-legacy-modernization-cobol-to-java` | Lab 1 uses a dedicated copy for COBOL-to-Java migration. Original fork retained. |
| **C3** | Spring PetClinic | [`spring-projects/spring-petclinic`](https://github.com/spring-projects/spring-petclinic) (family) | `app_petclinic-angular`, `app_petclinic-backend`, `app_petclinic-microservices` | Three repos for the same application ecosystem (Angular frontend, backend monolith, microservices variant). |
| **C4** | Modular Monolith DDD | [`kgrzybek/modular-monolith-with-ddd`](https://github.com/kgrzybek/modular-monolith-with-ddd) | `dotnet-modular-monolith`, `dotnet-modular-monolith-fe-react` | Backend (.NET) + frontend (React) from the same upstream DDD project. |
| **C5** | Cal.com ecosystem | [`calcom/cal.com`](https://github.com/calcom/cal.com) | `cal.com`, `cal.com-infra`, `cal.com-dataeng` | Main app (fork) plus infra and data-eng repos built around it. |
| **C6** | EventFlow demo | *original* | `app_eventflow-order-service`, `app_eventflow-payment-service`, `app_eventflow-infra`, `app_eventflow-devin-integration` | Four-repo event-driven architecture demo (scaffolded from scratch). |
| **C7** | Apache Fineract | [`apache/fineract`](https://github.com/apache/fineract) | `fineract`, `mifos-fineract-web-app` | Backend (Fineract) + frontend (Mifos web app) from the same banking platform. |
| **C8** | Client Timesheet | *original* | `app_timesheet`, `hosting-client-timesheet-app` | The timesheet app and its Terraform hosting/infra repo. |
| **C9** | AngularJS 1.x admins | *different upstreams* | `angular-1.x-bootstrap-admin-dashboard`, `angular-1.x-dashboard` | Two AngularJS 1.x admin dashboards for framework migration demos. |
| **C10** | SAS to Snowflake | [`scottbass/SAS`](https://github.com/scottbass/SAS) | `ts-sas-legacy-codebase`, `uc-data-migration-sas-to-snowflake` | Legacy SAS source paired with Snowflake migration validation tooling. |
| **C11** | OrderManager Monolith-to-Microservices | *original* | `platform-engineering-shared-services`, `app_dotnet-angular-monolith`, `app_dotnet-angular-monolith-iac`, `app_dotnet-angular-microservices` | Platform standard + .NET/Angular monolith + service IaC + microservices landing repo for decomposition demos. Platform repo provides the shared EKS/ArgoCD/monitoring infrastructure; monolith is the source; microservices repo receives all decomposed services and service-level IaC. |

---

## Use-Case Prefixed Repos (`uc-`)

### uc-legacy-modernization-cobol-to-java
| | |
|---|---|
| **URL** | https://github.com/Cognition-Partner-Workshops/uc-legacy-modernization-cobol-to-java |
| **Description** | COBOL mainframe credit card management application (CardDemo). Real COBOL batch programs, JCL, DB2 integration, copybooks. |
| **Tech Stack** | COBOL, JCL, DB2, VSAM |
| **License** | Apache 2.0 |
| **Default Branch** | `main` |
| **Cluster** | C2 (from `aws-mainframe-modernization-carddemo`) |
| **Challenges** | [MM1](../modules/migration-modernization/MM1.md), [MM10](../modules/migration-modernization/MM10.md), [MM12](../modules/migration-modernization/MM12.md), [MM13](../modules/migration-modernization/MM13.md), [MM14](../modules/migration-modernization/MM14.md) |

### uc-framework-upgrade-monolith-to-microservices
| | |
|---|---|
| **URL** | https://github.com/Cognition-Partner-Workshops/uc-framework-upgrade-monolith-to-microservices |
| **Description** | Spring Boot 2.6.3 REST+GraphQL monolith (articles, users, comments domains). Java 11, Gradle, SQLite, Flyway migrations. |
| **Tech Stack** | Java 11, Spring Boot 2.6.3, Gradle, MyBatis, SQLite, GraphQL (DGS) |
| **License** | MIT |
| **Default Branch** | `initial-code` |
| **Cluster** | C1 (from `spring-boot-realworld-example-app`) |
| **Workflows Removed** | `gradle.yml` (PAT lacked `workflow` scope) |
| **Challenges** | [MM2](../modules/migration-modernization/MM2.md), [MM3](../modules/migration-modernization/MM3.md), [MM4](../modules/migration-modernization/MM4.md), [MM11](../modules/migration-modernization/MM11.md) |

### uc-cve-remediation-regulatory-compliance
| | |
|---|---|
| **URL** | https://github.com/Cognition-Partner-Workshops/uc-cve-remediation-regulatory-compliance |
| **Description** | Same Spring Boot 2.6.3 monolith as Lab 2, but intended for security-focused exercises. Known vulnerable dependencies (Spring Boot 2.6.3 era). Pre-configured with OWASP Dependency-Check and SonarQube Gradle plugins for local SAST scanning. |
| **Tech Stack** | Java 11, Spring Boot 2.6.3, Gradle, MyBatis, SQLite, OWASP Dependency-Check, SonarQube |
| **License** | MIT |
| **Default Branch** | `initial-code` |
| **Cluster** | C1 (from `spring-boot-realworld-example-app`) |
| **Workflows Removed** | `gradle.yml` (PAT lacked `workflow` scope) |
| **Challenges** | [SEC1](../modules/security/SEC1.md), [SEC2](../modules/security/SEC2.md), [SEC3](../modules/security/SEC3.md), [SEC4](../modules/security/SEC4.md), [SEC6](../modules/security/SEC6.md), [SEC7](../modules/security/SEC7.md), [MM11](../modules/migration-modernization/MM11.md) |

### uc-data-source-migration-legacy-to-modern
| | |
|---|---|
| **URL** | https://github.com/Cognition-Partner-Workshops/uc-data-source-migration-legacy-to-modern |
| **Description** | Spring Boot 3.2 / Java 17 loan management application reading from legacy CDW-style tables (all-VARCHAR, cryptic column names, denormalized). Includes modern target schema, column mappings, and 5 workshop migration tasks. |
| **Tech Stack** | Java 17, Spring Boot 3.2, Spring Data JPA, H2 |
| **License** | MIT |
| **Default Branch** | `initial-code` |
| **Cluster** | None (scaffolded from scratch) |
| **Key Legacy Characteristics** | All-VARCHAR typing, cryptic column names (BORR_FST_NM, LN_CURR_BAL), denormalized, no FKs, code abbreviations (ACT/CLO/DFT) |
| **Challenges** | [MM8](../modules/migration-modernization/MM8.md), [MM10](../modules/migration-modernization/MM10.md) |

### uc-dw-migration-teradata-to-snowflake
| | |
|---|---|
| **URL** | https://github.com/Cognition-Partner-Workshops/uc-dw-migration-teradata-to-snowflake |
| **Description** | Teradata-based retail banking analytics data warehouse. 7 DDL tables, 3 views, 3 stored procedures, 3 macros, 2 BTEQ scripts, seed data (Norwegian locale), validation queries. |
| **Tech Stack** | Teradata SQL, BTEQ |
| **License** | MIT |
| **Default Branch** | `initial-code` |
| **Cluster** | None (scaffolded from scratch) |
| **Key Teradata Features** | SET/MULTISET, PI/PPI, COMPRESS, CASESPECIFIC, QUALIFY, ZEROIFNULL, CSUM, MAVG, HASHROW, VOLATILE TABLE, MACRO |
| **Challenges** | [MM7](../modules/migration-modernization/MM7.md) |

### uc-data-migration-sas-to-snowflake
| | |
|---|---|
| **URL** | https://github.com/Cognition-Partner-Workshops/uc-data-migration-sas-to-snowflake |
| **Description** | SAS to Snowflake migration validation app — sample SAS data (.sas7bdat), lineage mapping, transformation scenarios, validation configs. Streamlit UI with Gemini LLM integration. |
| **Tech Stack** | Python, Streamlit, SAS data files |
| **License** | — |
| **Challenges** | General data migration demos |

### uc-data-migration-airflow
| | |
|---|---|
| **URL** | https://github.com/Cognition-Partner-Workshops/uc-data-migration-airflow |
| **Description** | Docker Airflow setup for data migration and orchestration demos (Control-M analog). |
| **Tech Stack** | Python, Apache Airflow, Docker |
| **License** | — |
| **Challenges** | General data pipeline/orchestration demos |

### uc-language-upgrade-java-BroadleafCommerce
| | |
|---|---|
| **URL** | https://github.com/Cognition-Partner-Workshops/uc-language-upgrade-java-BroadleafCommerce |
| **Description** | Broadleaf Commerce CE — eCommerce framework based on Java and Spring. For Java language upgrade demos. |
| **Tech Stack** | Java, Spring |
| **License** | Apache 2.0 |
| **Challenges** | General Java upgrade demos |

### uc-product-analysis-loan-modernization
| | |
|---|---|
| **URL** | https://github.com/Cognition-Partner-Workshops/uc-product-analysis-loan-modernization |
| **Description** | Loan modernization analysis — input artifacts and output templates for Product Analyst demos. |
| **Tech Stack** | Documents/templates |
| **License** | — |
| **Challenges** | Business analysis/product analysis demos |

### uc-pod-remediation-credential-rotation
| | |
|---|---|
| **URL** | https://github.com/Cognition-Partner-Workshops/uc-pod-remediation-credential-rotation |
| **Description** | Automated remediation of pod failures after credential rotations. Multi-agent Python system with rotation monitoring, failure detection, ServiceNow approval workflow, and remediation orchestration. |
| **Tech Stack** | Python, Kubernetes, ServiceNow API |
| **License** | MIT |
| **Default Branch** | `initial-scaffold` |
| **Cluster** | None (scaffolded from scratch) |
| **Challenges** | [DA9](../modules/devops-automation/DA9.md) |

### uc-document-review-automation
| | |
|---|---|
| **URL** | https://github.com/Cognition-Partner-Workshops/uc-document-review-automation |
| **Description** | Automated document review for loan processing. Multi-agent Python system with document extraction (PDF, image, form), field comparison (exact, fuzzy, numeric), confidence-based decisioning, and compliance audit logging. |
| **Tech Stack** | Python |
| **License** | MIT |
| **Default Branch** | `initial-scaffold` |
| **Cluster** | None (scaffolded from scratch) |
| **Challenges** | [QE8](../modules/quality-engineering/QE8.md) |

### uc-bdd-test-generation-rest-api
| | |
|---|---|
| **URL** | https://github.com/Cognition-Partner-Workshops/uc-bdd-test-generation-rest-api |
| **Description** | BDD test case generation for REST APIs. Spring Boot + Cucumber + Gherkin framework for automated Swagger-to-test transformation. Imported from RedFroggy/spring-cucumber-rest-api (MIT license). |
| **Tech Stack** | Java, Spring Boot, Cucumber, Gherkin, Maven |
| **License** | MIT |
| **Default Branch** | `initial-scaffold` |
| **Cluster** | None (imported from RedFroggy/spring-cucumber-rest-api) |
| **Challenges** | [QE9](../modules/quality-engineering/QE9.md) |

### uc-volume-anomaly-detection
| | |
|---|---|
| **URL** | https://github.com/Cognition-Partner-Workshops/uc-volume-anomaly-detection |
| **Description** | Volume-based anomaly detection for early issue identification. Multi-agent Python system with z-score and seasonal decomposition detectors, service health correlation, runbook-based recommendation engine, and incident insight reporting. |
| **Tech Stack** | Python |
| **License** | MIT |
| **Default Branch** | `initial-scaffold` |
| **Cluster** | None (scaffolded from scratch) |
| **Challenges** | [DA10](../modules/devops-automation/DA10.md) |

### uc-Quality-Engineering-and-Assurance
| | |
|---|---|
| **URL** | https://github.com/Cognition-Partner-Workshops/uc-Quality-Engineering-and-Assurance |
| **Description** | Quality engineering and assurance use case repo. |
| **Tech Stack** | — |
| **License** | — |
| **Challenges** | [QE2](../modules/quality-engineering/QE2.md), [QE3](../modules/quality-engineering/QE3.md) |

---

## Technology Stack Repos (`ts-`)

### ts-angular-realworld-example-app
| | |
|---|---|
| **URL** | https://github.com/Cognition-Partner-Workshops/ts-angular-realworld-example-app |
| **Description** | Real-world application built with Angular. |
| **Tech Stack** | Angular, TypeScript |
| **License** | — |
| **Challenges** | [MM2](../modules/migration-modernization/MM2.md), [MM9](../modules/migration-modernization/MM9.md) |

### ts-angular-springboot-jhipster-sample
| | |
|---|---|
| **URL** | https://github.com/Cognition-Partner-Workshops/ts-angular-springboot-jhipster-sample |
| **Description** | JHipster sample app (Angular + Spring Boot monolith) for full-stack modernization demos. |
| **Tech Stack** | Angular, Spring Boot, JHipster, Java |
| **License** | Apache 2.0 |
| **Challenges** | General full-stack modernization demos |

### ts-sas-legacy-codebase
| | |
|---|---|
| **URL** | https://github.com/Cognition-Partner-Workshops/ts-sas-legacy-codebase |
| **Description** | Legacy SAS programs and macros — represents a legacy SAS analytics environment for migration demos. |
| **Tech Stack** | SAS |
| **License** | Unlicense |
| **Challenges** | SAS-to-Snowflake migration demos |

### ts-selenium-simple
| | |
|---|---|
| **URL** | https://github.com/Cognition-Partner-Workshops/ts-selenium-simple |
| **Description** | Sample framework based on Page Object Model, Selenium, TestNG using Java. |
| **Tech Stack** | Java, Selenium, TestNG |
| **License** | — |
| **Challenges** | [QE3](../modules/quality-engineering/QE3.md) (alternative repo) |

### ts-swagger-petstore
| | |
|---|---|
| **URL** | https://github.com/Cognition-Partner-Workshops/ts-swagger-petstore |
| **Description** | Swagger Petstore sample API. |
| **Tech Stack** | Java, Swagger/OpenAPI |
| **License** | Apache 2.0 |
| **Challenges** | API documentation/testing demos |

### ts-java-spring-boot-realworld-example-app
| | |
|---|---|
| **URL** | https://github.com/Cognition-Partner-Workshops/ts-java-spring-boot-realworld-example-app |
| **Description** | Original import of RealWorld example Spring Boot app. Java 11, Spring Boot 2.6.3, Gradle. |
| **Tech Stack** | Java 11, Spring Boot 2.6.3, Gradle, MyBatis, SQLite |
| **License** | MIT |
| **Renamed From** | `spring-boot-realworld-example-app` (applied `ts-java-` prefix to clarify tech stack) |
| **Cluster** | C1 (upstream for Labs 2 and 3) |
| **Challenges** | [QE2](../modules/quality-engineering/QE2.md), [QE4](../modules/quality-engineering/QE4.md), [DA3](../modules/devops-automation/DA3.md) (prefer using the `uc-` copies for labs) |

---

## Application Repos (`app_`)

### app_petclinic-angular
| | |
|---|---|
| **URL** | https://github.com/Cognition-Partner-Workshops/app_petclinic-angular |
| **Description** | Spring PetClinic Angular frontend. |
| **Tech Stack** | Angular, TypeScript |
| **License** | — |
| **Cluster** | C3 (PetClinic ecosystem) |
| **Challenges** | [MM2](../modules/migration-modernization/MM2.md), [MM9](../modules/migration-modernization/MM9.md) |

### app_petclinic-backend
| | |
|---|---|
| **URL** | https://github.com/Cognition-Partner-Workshops/app_petclinic-backend |
| **Description** | Spring PetClinic backend — canonical Spring Boot app. |
| **Tech Stack** | Java, Spring Boot |
| **License** | Apache 2.0 |
| **Cluster** | C3 (PetClinic ecosystem) |
| **Challenges** | General Spring Boot demos |

### app_petclinic-microservices
| | |
|---|---|
| **URL** | https://github.com/Cognition-Partner-Workshops/app_petclinic-microservices |
| **Description** | Spring PetClinic Microservices — distributed version for modernization demos. |
| **Tech Stack** | Java, Spring Boot, Spring Cloud |
| **License** | Apache 2.0 |
| **Cluster** | C3 (PetClinic ecosystem) |
| **Challenges** | [MM3](../modules/migration-modernization/MM3.md) |

### app_dotnet-angular-monolith
| | |
|---|---|
| **URL** | https://github.com/Cognition-Partner-Workshops/app_dotnet-angular-monolith |
| **Description** | .NET 8 + Angular 17 monolith application (OrderManager) demonstrating tightly coupled modules (Orders, Products, Customers, Inventory) sharing a single database. Designed as the "before" state for monolith-to-microservices decomposition demos. |
| **Tech Stack** | .NET 8, C#, Angular 17, TypeScript, Entity Framework Core, SQLite |
| **License** | MIT |
| **Default Branch** | `main` |
| **Cluster** | C11 (OrderManager monolith-to-microservices) |
| **Challenges** | [DA5](../modules/devops-automation/DA5.md), [DA6](../modules/devops-automation/DA6.md), [DA8](../modules/devops-automation/DA8.md), [MM3](../modules/migration-modernization/MM3.md) |

### app_dotnet-angular-monolith-iac
| | |
|---|---|
| **URL** | https://github.com/Cognition-Partner-Workshops/app_dotnet-angular-monolith-iac |
| **Description** | Service-specific IaC for the OrderManager monolith. Helm charts, Dockerfile (multi-stage .NET+Angular build), ArgoCD application manifests, CI/CD pipeline, and network policies — all conforming to the platform-engineering-shared-services standard. |
| **Tech Stack** | Helm, Docker, ArgoCD, GitHub Actions, Kubernetes |
| **License** | MIT |
| **Default Branch** | `main` |
| **Cluster** | C11 (OrderManager monolith-to-microservices) |
| **Challenges** | [DA5](../modules/devops-automation/DA5.md), [DA6](../modules/devops-automation/DA6.md), [DA8](../modules/devops-automation/DA8.md) (context), [MM3](../modules/migration-modernization/MM3.md) |

### app_dotnet-angular-microservices
| | |
|---|---|
| **URL** | https://github.com/Cognition-Partner-Workshops/app_dotnet-angular-microservices |
| **Description** | Landing repository for all microservices decomposed from the OrderManager monolith. Houses service source code (.NET 8 Web API + Angular 17), service-level IaC (Dockerfile, Helm chart, ArgoCD manifests, CI/CD pipeline) per service. Each participant works on a `workshop-<participant>` branch. |
| **Tech Stack** | .NET 8, C#, Angular 17, TypeScript, Helm, Docker, ArgoCD, GitHub Actions |
| **License** | MIT |
| **Default Branch** | `main` |
| **Cluster** | C11 (OrderManager monolith-to-microservices) |
| **Challenges** | [DA8](../modules/devops-automation/DA8.md) (landing repo) |

### app_eventflow-storefront
| | |
|---|---|
| **URL** | https://github.com/Cognition-Partner-Workshops/app_eventflow-storefront |
| **Description** | Customer-facing e-commerce storefront for EventFlow demo. Workshop participants experience the zero-decimal currency bug. |
| **Tech Stack** | TypeScript, React |
| **License** | — |
| **Default Branch** | `devin/1772995107-storefront-ui` |
| **Cluster** | C6 (EventFlow multi-service demo) |
| **Challenges** | [DA6](../modules/devops-automation/DA6.md), [FD3](../modules/feature-development/FD3.md) |

### app_dotnet_angular_containerized_decomposition_monolith
| | |
|---|---|
| **URL** | https://github.com/Cognition-Partner-Workshops/app_dotnet_angular_containerized_decomposition_monolith |
| **Description** | Before-state monolithic .NET + Angular application (imported from QuickApp) — starting point for containerized decomposition workshop. |
| **Tech Stack** | .NET, C#, Angular, TypeScript |
| **License** | MIT |
| **Default Branch** | `import/initial` |
| **Cluster** | C12 (.NET/Angular Containerized Decomposition) |
| **Challenges** | [MM3](../modules/migration-modernization/MM3.md), [MM10](../modules/migration-modernization/MM10.md), [MM15](../modules/migration-modernization/MM15.md), [MM16](../modules/migration-modernization/MM16.md) |

### app_dotnet_angular_containerized_decomposition_microservices
| | |
|---|---|
| **URL** | https://github.com/Cognition-Partner-Workshops/app_dotnet_angular_containerized_decomposition_microservices |
| **Description** | Target-state .NET microservices architecture — decomposed from monolith into Identity, Customer, Order, Product, Notification services with YARP API Gateway. |
| **Tech Stack** | .NET, C#, YARP |
| **License** | — |
| **Default Branch** | `scaffold/initial` |
| **Cluster** | C12 (.NET/Angular Containerized Decomposition) |
| **Challenges** | [MM3](../modules/migration-modernization/MM3.md), [MM15](../modules/migration-modernization/MM15.md), [MM16](../modules/migration-modernization/MM16.md), [MM17](../modules/migration-modernization/MM17.md) |

### app_dotnet_angular_containerized_decomposition_microfrontends
| | |
|---|---|
| **URL** | https://github.com/Cognition-Partner-Workshops/app_dotnet_angular_containerized_decomposition_microfrontends |
| **Description** | Target-state Angular micro-frontends — decomposed from monolith using Webpack Module Federation (shell + 4 remote apps). |
| **Tech Stack** | Angular, TypeScript, Webpack Module Federation |
| **License** | — |
| **Default Branch** | `scaffold/initial` |
| **Cluster** | C12 (.NET/Angular Containerized Decomposition) |
| **Challenges** | [MM3](../modules/migration-modernization/MM3.md) |

### app_dotnet_angular_containerized_decomposition_iac
| | |
|---|---|
| **URL** | https://github.com/Cognition-Partner-Workshops/app_dotnet_angular_containerized_decomposition_iac |
| **Description** | App-specific Helm charts for deploying the decomposed .NET microservices and Angular micro-frontends to Kubernetes. |
| **Tech Stack** | Helm, Kubernetes, Docker |
| **License** | — |
| **Default Branch** | `scaffold/initial` |
| **Cluster** | C12 (.NET/Angular Containerized Decomposition) |
| **Challenges** | [MM3](../modules/migration-modernization/MM3.md), [MM15](../modules/migration-modernization/MM15.md), [DA5](../modules/devops-automation/DA5.md) |

### app_timesheet
| | |
|---|---|
| **URL** | https://github.com/Cognition-Partner-Workshops/app_timesheet |
| **Description** | Client timesheet and billable hours tracking application. React 19 + Node.js/Express + SQLite. Full CRUD, auth, reporting, CSV/PDF export. Multi-part app (backend + frontend + Docker). |
| **Tech Stack** | React 19, TypeScript, Node.js, Express, SQLite, Material-UI, Vite |
| **License** | — |
| **Renamed From** | `client-timesheet-app` (applied `app_` prefix for multi-repo application) |
| **Challenges** | [QE1](../modules/quality-engineering/QE1.md), [SEC1](../modules/security/SEC1.md), [SEC6](../modules/security/SEC6.md), [SEC7](../modules/security/SEC7.md), [FD4](../modules/feature-development/FD4.md), [FD5](../modules/feature-development/FD5.md), [FD6](../modules/feature-development/FD6.md), [DA1](../modules/devops-automation/DA1.md) |

---

## Non-Prefixed Repos

### hosting-client-timesheet-app
| | |
|---|---|
| **URL** | https://github.com/Cognition-Partner-Workshops/hosting-client-timesheet-app |
| **Description** | Infrastructure/hosting configuration for the client-timesheet-app. Terraform-based. |
| **Tech Stack** | Terraform, AWS |
| **License** | — |
| **Challenges** | [QE1](../modules/quality-engineering/QE1.md) (terraform fmt), [MM6](../modules/migration-modernization/MM6.md) |

### cal.com
| | |
|---|---|
| **URL** | https://github.com/Cognition-Partner-Workshops/cal.com |
| **Description** | Open-source scheduling infrastructure. Monorepo with Next.js web app, NestJS API v2, Prisma, PostgreSQL. |
| **Tech Stack** | TypeScript, Next.js, NestJS, Prisma, PostgreSQL, Turborepo |
| **License** | AGPLv3 (open core) |
| **Challenges** | [QE3](../modules/quality-engineering/QE3.md), [FD3](../modules/feature-development/FD3.md), [DA1](../modules/devops-automation/DA1.md) |

### cal.com-infra
| | |
|---|---|
| **URL** | https://github.com/Cognition-Partner-Workshops/cal.com-infra |
| **Description** | Infrastructure as code for cal.com deployment. |
| **Tech Stack** | IaC |
| **License** | — |
| **Challenges** | [MM6](../modules/migration-modernization/MM6.md) |

### cal.com-dataeng
| | |
|---|---|
| **URL** | https://github.com/Cognition-Partner-Workshops/cal.com-dataeng |
| **Description** | Data engineering setup for cal.com. |
| **Tech Stack** | Data engineering |
| **License** | — |
| **Challenges** | Data pipeline demos |

### coreui-free-react-admin-template
| | |
|---|---|
| **URL** | https://github.com/Cognition-Partner-Workshops/coreui-free-react-admin-template |
| **Description** | Open source admin template based on Bootstrap 5 and React.js. |
| **Tech Stack** | React, Bootstrap 5, JavaScript |
| **License** | MIT |
| **Challenges** | [MM2](../modules/migration-modernization/MM2.md) (Bootstrap → Material UI) |

### aws-mainframe-modernization-carddemo
| | |
|---|---|
| **URL** | https://github.com/Cognition-Partner-Workshops/aws-mainframe-modernization-carddemo |
| **Description** | Original import of AWS CardDemo COBOL mainframe app. |
| **Tech Stack** | COBOL, JCL, DB2 |
| **License** | Apache 2.0 |
| **Cluster** | C2 (upstream for Lab 1) |
| **Challenges** | General COBOL demos (prefer using the `uc-` copy for labs) |

### jpetstore-6
| | |
|---|---|
| **URL** | https://github.com/Cognition-Partner-Workshops/jpetstore-6 |
| **Description** | Web application built on MyBatis 3, Spring MVC 5.3, Stripes 1.6. **Not recommended for Spring Boot upgrade labs** — Stripes framework is dead, already on modern Spring versions. |
| **Tech Stack** | Java, Spring MVC 5.3, MyBatis 3.5, Stripes 1.6, JSP |
| **License** | Apache 2.0 |
| **Challenges** | Legacy Java exploration only (not suitable for upgrade labs) |

### fineract
| | |
|---|---|
| **URL** | https://github.com/Cognition-Partner-Workshops/fineract |
| **Description** | Apache Fineract — open banking platform. |
| **Tech Stack** | Java, Spring Boot |
| **License** | Apache 2.0 |
| **Challenges** | Banking domain demos, [MM5](../modules/migration-modernization/MM5.md) |

### dotnet-modular-monolith / dotnet-modular-monolith-fe-react
| | |
|---|---|
| **URL** | https://github.com/Cognition-Partner-Workshops/dotnet-modular-monolith |
| **Description** | Full Modular Monolith application with DDD approach (.NET backend + React frontend). |
| **Tech Stack** | .NET, C#, React |
| **License** | MIT |
| **Challenges** | .NET modernization demos, DDD architecture demos |

### platform-engineering-shared-services
| | |
|---|---|
| **URL** | https://github.com/Cognition-Partner-Workshops/platform-engineering-shared-services |
| **Description** | Shared DevOps platform for all workshop runtime environments. Terraform modules for EKS, VPC, ECR, IAM. Helm values for ingress-nginx, cert-manager, Prometheus/Grafana monitoring, ArgoCD GitOps. Namespace provisioning with resource quotas, network policies (default-deny), and RBAC. The "golden path" that decomposed microservices must conform to. |
| **Tech Stack** | Terraform, Helm, Kubernetes, AWS EKS, ArgoCD, Prometheus, Grafana |
| **License** | MIT |
| **Default Branch** | `main` |
| **Cluster** | C11 (OrderManager monolith-to-microservices) |
| **Challenges** | [DA5](../modules/devops-automation/DA5.md), [DA6](../modules/devops-automation/DA6.md), [DA7](../modules/devops-automation/DA7.md), [DA8](../modules/devops-automation/DA8.md) (context) |

### Other Repos

| Repo | Description | Tech Stack |
|------|-------------|-----------|
| [amazon-personalize-immersion-day](https://github.com/Cognition-Partner-Workshops/amazon-personalize-immersion-day) | AWS Personalize ML workshop | Python, AWS |
| [angular-1.x-bootstrap-admin-dashboard](https://github.com/Cognition-Partner-Workshops/angular-1.x-bootstrap-admin-dashboard) | AngularJS 1.x admin panel | AngularJS, Bootstrap |
| [angular-1.x-dashboard](https://github.com/Cognition-Partner-Workshops/angular-1.x-dashboard) | AngularJS dashboard widgets | AngularJS |
| [Informatica-Demo](https://github.com/Cognition-Partner-Workshops/Informatica-Demo) | Informatica PowerCenter data exchanges | Informatica |
| [katalon-web-automation](https://github.com/Cognition-Partner-Workshops/katalon-web-automation) | Katalon web automation sample | Katalon |
| [keycloak](https://github.com/Cognition-Partner-Workshops/keycloak) | Identity and Access Management | Java |
| [liferay-portal](https://github.com/Cognition-Partner-Workshops/liferay-portal) | Liferay Portal | Java |
| [mifos-fineract-web-app](https://github.com/Cognition-Partner-Workshops/mifos-fineract-web-app) | Mifos X Web App (Fineract frontend) | Angular |
| [ofbiz-framework](https://github.com/Cognition-Partner-Workshops/ofbiz-framework) | Apache OFBiz ERP/CRM | Java |
| [Online-Banking-System-using-Java](https://github.com/Cognition-Partner-Workshops/Online-Banking-System-using-Java) | Simple Java banking system | Java |
| [opencms-core](https://github.com/Cognition-Partner-Workshops/opencms-core) | OpenCMS content management | Java |
| [openmrs-core](https://github.com/Cognition-Partner-Workshops/openmrs-core) | OpenMRS medical records | Java |
| [owid-etl](https://github.com/Cognition-Partner-Workshops/owid-etl) | Our World in Data ETL pipeline | Python |
| [real-estate-management](https://github.com/Cognition-Partner-Workshops/real-estate-management) | Real estate property management | Java |
| [ruby-redmine](https://github.com/Cognition-Partner-Workshops/ruby-redmine) | Redmine project management | Ruby |
| [sample-serverless-digital-asset-payments](https://github.com/Cognition-Partner-Workshops/sample-serverless-digital-asset-payments) | Serverless digital asset payments | AWS, Serverless |
| [serverless-eda-insurance-claims-processing](https://github.com/Cognition-Partner-Workshops/serverless-eda-insurance-claims-processing) | Event-driven insurance claims | AWS, Serverless |
| [streamify-data-engineering](https://github.com/Cognition-Partner-Workshops/streamify-data-engineering) | Data engineering with Kafka, Spark, dbt | Python, Kafka, Spark, dbt |
| [todo-app-sandbox-infra](https://github.com/Cognition-Partner-Workshops/todo-app-sandbox-infra) | Todo app sandbox infrastructure | IaC |
| [traderXCognitiondemos](https://github.com/Cognition-Partner-Workshops/traderXCognitiondemos) | TraderX fork for Devin demos | Java |
