# Crop Doctor Pro

Vercel-ready Crop Doctor dashboard for crop health monitoring, crop-image scanning, field mapping, analytics, scan history, alerts and admin workflows.

## Deploy

Import this repository into Vercel. The root is a Next.js app, so Vercel will detect the framework automatically. No environment variables are required for the included demo mode.

## Included functionality

- Responsive dashboard with live clock and farm KPIs
- Crop image upload + deterministic demo diagnosis workflow
- Disease/pest alerts and scan status workflow
- Farm field map visualization
- Yield and crop-health analytics
- Scan history and treatment log UI
- Admin login (`admin` / `cropdoctor`) for the demo control center
- Browser persistence with localStorage/sessionStorage
- No external API keys required

The image detector is intentionally labeled as a demo simulation. For production agricultural diagnosis, replace the `analyze()` function in `app/page.tsx` with your trained vision model/API and add real authentication/database storage.
