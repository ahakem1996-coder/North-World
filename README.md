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

Administrators can enter clearance details and attach supporting clearance and transport-document files (PDF, JPG, or PNG; up to four files and 8 MB total per entry). Attachments are stored in PostgreSQL and can be downloaded from the clearance results and document archive. Uploaded files and manually entered document references are not verified by Fasah or other government platforms; the application does not issue government documents.

Administrators can upload a text-based Fasah appointment confirmation PDF (up to 5 MB and 5 pages). The server extracts booking, vehicle, driver, entry, and exit fields locally; the administrator reviews and confirms them before the appointment and source PDF are saved. Scanned PDFs are not OCR-processed. Appointment tickets are stored separately and do not establish that customs clearance has been granted.

Administrators can download Excel templates and import up to 500 driver or truck records per `.xlsx` file (maximum 3 MB). Imports are validated as a whole; duplicate or invalid rows prevent the batch from being saved. A row matching a soft-deleted driver or truck restores that record rather than creating a duplicate. Truck templates can optionally associate a truck with an active driver using the driver's national/residency ID.

Drivers can record fuel or maintenance expenses against accepted trips and attach up to four PDF, JPG, or PNG receipts (8 MB total). Administrators can review the consolidated expense list, including the truck, driver, residency number, amount, type, notes, and downloadable attachments. Drivers can access attachments for their own expenses only.

The administrator's trip-tracking screen shows accepted trips, driver-reported milestones, and their timestamps. It refreshes every 30 seconds while open; it does not provide live GPS tracking.

The app is not yet deployed or connected to government APIs. The database starts empty; enter the company's real truck, driver, port, and account records before operations.

## VPS templates

`deploy/north-world-transport.service` and `deploy/north-world-transport.nginx.conf` are starting templates for a Linux VPS. Replace the sample domain and certificate paths, configure PostgreSQL and HTTPS, and apply migrations before enabling the service.
