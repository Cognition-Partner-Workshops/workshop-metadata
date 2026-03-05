# Runtime Resources

Some workshop challenges require a running application. This document tracks hosted instances and local run instructions.

## Hosted Applications

> **Note:** No workshop is currently active, so hosted apps may be shut down. Contact your Cognition Partner Account team to provision runtime resources for an upcoming workshop.

| Application | URL | Credentials | Status |
|------------|-----|-------------|--------|
| Client Timesheet App | `http://<IP_Address>` | Any email (no password) | Inactive |
| Cal.com | `http://<xyz>.us-east-1.elb.amazonaws.com/` | john@example.com / password123 | Inactive |

## Local Run Instructions

When hosted instances are unavailable, participants can ask Devin to run applications locally on its machine.

### client-timesheet-app
```bash
# Backend (port 3001)
cd ~/repos/client-timesheet-app/backend && npm run dev

# Frontend (port 5173)
cd ~/repos/client-timesheet-app/frontend && npm run dev

# Access: http://localhost:5173
# Login: any email address (no password required)
```

### cal.com
```bash
cd ~/repos/cal.com && yarn dev
# Access: http://localhost:3000
```

### ts-java-spring-boot-realworld-example-app (Labs 2 & 3)
```bash
cd ~/repos/ts-java-spring-boot-realworld-example-app
export JAVA_HOME=/usr/lib/jvm/java-11-openjdk-amd64
export PATH="$JAVA_HOME/bin:$PATH"
./gradlew bootRun
# Access: http://localhost:8080
# Verify: http://localhost:8080/tags
```

## Provisioning Runtime Resources

To provision hosted instances for a workshop event:

1. Contact brian.smitches@cognition.ai with:
   - Event date and expected participant count
   - Which applications need to be hosted
   - AWS region preference (closest to event location)
2. Hosted instances will be provisioned 24 hours before the event
3. URLs and credentials will be shared via the event site
4. Instances will be shut down 48 hours after the event

## Challenges Requiring Runtime

| Challenge | Application Needed | Can Run Locally? |
|-----------|-------------------|-----------------|
| A3 — E2E Testing | cal.com or client-timesheet-app | Yes |
| D3 — Fix Runtime Bug | cal.com | Yes |
| D4 — Fix UI Bug | client-timesheet-app | Yes |
| D5 — Fix Data Bug | client-timesheet-app | Yes (but code analysis also works) |
