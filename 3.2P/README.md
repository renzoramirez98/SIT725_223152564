# SIT725 3.2P: Locate a Socket

This is a small Express and Materialize prototype built around sample EV charging locations. It follows Workshop 3's server and public folder structure with a GET endpoint consumed by the browser. All locations are **illustrative data**, not verified charging stations.

## Requirements
- Node.js 18 or newer
- npm
- An internet connection to load Materialize CSS/JavaScript from its CDN (the custom CSS provides a basic fallback)

## Run locally (Windows PowerShell)
```powershell
cd C:\Users\Admin\SIT725_223152564\task-3.2p
npm install
npm start
```

Open http://localhost:3000 in your browser. To view the API directly, open http://localhost:3000/api/chargers. The health endpoint is at http://localhost:3000/api/health.

If your repository is stored somewhere else, replace the `cd` path with the actual directory.

## Demonstrate Task 3.2P
1. Open the landing page and check the three sample charger cards appear.
2. Change the connector filter to `CCS2`; one card should remain.
3. Select `View details` on any card to open a Materialize modal.
4. Open `/api/chargers` and confirm the browser receives the JSON array.
5. Take screenshots of the page (three cards), the endpoint JSON and optionally the modal or terminal.
6. Commit and push the `task-3.2p` folder to your existing course repository.

## Push to GitHub
Run these commands from the root of your existing clone (not inside `task-3.2p`):
```powershell
cd C:\Users\Admin\SIT725_223152564
git add task-3.2p
git commit -m "Add SIT725 Task 3.2P Locate a Socket prototype"
git push origin main
```

Repository: https://github.com/renzoramirez98/SIT725_223152564

## Files
- `server.js`: initialises Express, serves static files and supplies `GET /api/chargers`.
- `data/chargers.js`: three original sample records.
- `public/index.html`: the page and Materialize components.
- `public/js/scripts.js`: fetches JSON and creates filterable cards and modal detail views.
- `public/css/styles.css`: custom colours, layout and responsive styles.
- `public/images/*.svg`: original local SVG illustrations.

## Limits
This is a UI and API demonstration, not the full 2.1P requirements specification. It does not connect to live charger data, user location, maps or payment services. No live charger status is claimed.
