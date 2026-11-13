# North World Transport Management

The transport management application is independent of the legacy inventory transfer planner.

## Local setup

Requirements: Node.js 20.19+ and PostgreSQL 14+.

1. Create a PostgreSQL database and copy `.env.example` to `.env` in this project root.
2. Set `DATABASE_URL` and a random `SESSION_SECRET` of at least 32 characters. Keep real credentials out of source control.
3. From `server/`, run `npm ci`, `npm run prisma:generate`, and `npm run prisma:migrate`.
4. Run `npm start` from `server/`, then open `http://localhost:4000`. Create the first administrator with a password of at least 12 characters.

Express serves the browser interface from `client/` and the API from the same origin. User accounts and operational records are stored in PostgreSQL.

## Render and Supabase

`render.yaml` configures a Render web service. Create a Supabase PostgreSQL project, then add its connection string as the `DATABASE_URL` secret in Render. The blueprint generates `SESSION_SECRET` and binds the service to `0.0.0.0`. Use an always-on paid plan for operational use; a free instance may sleep.

## Manual data entry and integrations

Administrators can enter clearance details and search the saved records. A trip can store an externally issued transport-document number and date as a manual reference. These entries are not verified by Fasah or other government platforms, and an official PDF is not attached or issued by this application.

The app is not yet deployed or connected to government APIs. The database starts empty; enter the company's real truck, driver, port, and account records before operations.

## VPS templates

`deploy/north-world-transport.service` and `deploy/north-world-transport.nginx.conf` are starting templates for a Linux VPS. Replace the sample domain and certificate paths, configure PostgreSQL and HTTPS, and apply migrations before enabling the service.
