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

## Duplication Clusters

Some repos are intentionally duplicated from the same upstream source so that different workshop labs get isolated starting points. This avoids branch confusion during live events.

| Cluster ID | Upstream Source | Repos | Reason |
|-----------|----------------|-------|--------|
| **C1** | `ts-java-spring-boot-realworld-example-app` | `uc-framework-upgrade-monolith-to-microservices`, `uc-cve-remediation-regulatory-compliance`, `ts-java-spring-boot-realworld-example-app` | Labs 2 and 3 both start from the same Spring Boot monolith but have different objectives (upgrade vs. CVE remediation). The original import is also retained (renamed from `spring-boot-realworld-example-app`). |
| **C2** | `aws-mainframe-modernization-carddemo` | `uc-legacy-modernization-cobol-to-java`, `aws-mainframe-modernization-carddemo` | Lab 1 uses a dedicated copy. The original import is also retained. |
| **C3** | Spring PetClinic ecosystem | `app_petclinic-angular`, `app_petclinic-backend`, `app_petclinic-microservices` | Three repos for the same application (frontend, backend monolith, microservices variant). |

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
| **Challenges** | [mm-cobol-to-java](../modules/migration-modernization/mm-cobol-to-java.md) |

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
| **Challenges** | [mm-framework-upgrade](../modules/migration-modernization/mm-framework-upgrade.md), [mm-containerization](../modules/migration-modernization/mm-containerization.md), [mm-api-consolidation](../modules/migration-modernization/mm-api-consolidation.md) |

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
| **Challenges** | [sec-upgrade-dependencies](../modules/security/sec-upgrade-dependencies.md), [sec-remediate-vulnerabilities](../modules/security/sec-remediate-vulnerabilities.md), [sec-shift-left](../modules/security/sec-shift-left.md), [sec-antipatterns](../modules/security/sec-antipatterns.md) |

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
| **Challenges** | [mm-data-source-migration](../modules/migration-modernization/mm-data-source-migration.md), [mm-legacy-modernization-combined](../modules/migration-modernization/mm-legacy-modernization-combined.md) |

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
| **Challenges** | [mm-dw-migration-teradata](../modules/migration-modernization/mm-dw-migration-teradata.md)

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

### uc-Quality-Engineering-and-Assurance
| | |
|---|---|
| **URL** | https://github.com/Cognition-Partner-Workshops/uc-Quality-Engineering-and-Assurance |
| **Description** | Quality engineering and assurance use case repo. |
| **Tech Stack** | — |
| **License** | — |
| **Challenges** | [qe-unit-testing](../modules/quality-engineering/qe-unit-testing.md), [qe-e2e-testing](../modules/quality-engineering/qe-e2e-testing.md) |

---

## Technology Stack Repos (`ts-`)

### ts-angular-realworld-example-app
| | |
|---|---|
| **URL** | https://github.com/Cognition-Partner-Workshops/ts-angular-realworld-example-app |
| **Description** | Real-world application built with Angular. |
| **Tech Stack** | Angular, TypeScript |
| **License** | — |
| **Challenges** | [mm-framework-upgrade](../modules/migration-modernization/mm-framework-upgrade.md) (alternative repo) |

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
| **Challenges** | [qe-e2e-testing](../modules/quality-engineering/qe-e2e-testing.md) (alternative repo) |

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
| **Challenges** | General Spring Boot demos, [fd-new-feature](../modules/feature-development/fd-new-feature.md) (prefer using the `uc-` copies for labs) |

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
| **Challenges** | Full-stack demos, [mm-framework-upgrade](../modules/migration-modernization/mm-framework-upgrade.md) (alternative) |

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
| **Challenges** | [mm-containerization](../modules/migration-modernization/mm-containerization.md) (reference architecture) |

### app_timesheet-client
| | |
|---|---|
| **URL** | https://github.com/Cognition-Partner-Workshops/app_timesheet-client |
| **Description** | Client timesheet and billable hours tracking application. React 19 + Node.js/Express + SQLite. Full CRUD, auth, reporting, CSV/PDF export. Multi-part app (backend + frontend + Docker). |
| **Tech Stack** | React 19, TypeScript, Node.js, Express, SQLite, Material-UI, Vite |
| **License** | — |
| **Renamed From** | `client-timesheet-app` (applied `app_` prefix for multi-repo application) |
| **Challenges** | [qe-linting](../modules/quality-engineering/qe-linting.md), [sec-upgrade-dependencies](../modules/security/sec-upgrade-dependencies.md), [fd-fix-ui-bug](../modules/feature-development/fd-fix-ui-bug.md), [fd-fix-data-bug](../modules/feature-development/fd-fix-data-bug.md), [fd-new-feature](../modules/feature-development/fd-new-feature.md), [da-cicd](../modules/devops-automation/da-cicd.md) |

---

## Non-Prefixed Repos

### hosting-client-timesheet-app
| | |
|---|---|
| **URL** | https://github.com/Cognition-Partner-Workshops/hosting-client-timesheet-app |
| **Description** | Infrastructure/hosting configuration for the client-timesheet-app. Terraform-based. |
| **Tech Stack** | Terraform, AWS |
| **License** | — |
| **Challenges** | [qe-linting](../modules/quality-engineering/qe-linting.md) (terraform fmt), [mm-iac-translation](../modules/migration-modernization/mm-iac-translation.md) |

### cal.com
| | |
|---|---|
| **URL** | https://github.com/Cognition-Partner-Workshops/cal.com |
| **Description** | Open-source scheduling infrastructure. Monorepo with Next.js web app, NestJS API v2, Prisma, PostgreSQL. |
| **Tech Stack** | TypeScript, Next.js, NestJS, Prisma, PostgreSQL, Turborepo |
| **License** | AGPLv3 (open core) |
| **Challenges** | [qe-e2e-testing](../modules/quality-engineering/qe-e2e-testing.md), [fd-fix-runtime-bug](../modules/feature-development/fd-fix-runtime-bug.md), [da-cicd](../modules/devops-automation/da-cicd.md) |

### cal.com-infra
| | |
|---|---|
| **URL** | https://github.com/Cognition-Partner-Workshops/cal.com-infra |
| **Description** | Infrastructure as code for cal.com deployment. |
| **Tech Stack** | IaC |
| **License** | — |
| **Challenges** | [mm-iac-translation](../modules/migration-modernization/mm-iac-translation.md) |

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
| **Challenges** | [mm-framework-upgrade](../modules/migration-modernization/mm-framework-upgrade.md) (Bootstrap → Material UI) |

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
| **Challenges** | Banking domain demos, [mm-cloud-native](../modules/migration-modernization/mm-cloud-native.md) |

### dotnet-modular-monolith / dotnet-modular-monolith-fe-react
| | |
|---|---|
| **URL** | https://github.com/Cognition-Partner-Workshops/dotnet-modular-monolith |
| **Description** | Full Modular Monolith application with DDD approach (.NET backend + React frontend). |
| **Tech Stack** | .NET, C#, React |
| **License** | MIT |
| **Challenges** | .NET modernization demos, DDD architecture demos |

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
