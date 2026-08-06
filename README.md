# IoT Elderly Watch-over System — Deployment Map

Final task for Advanced Service Engineering. An interactive Bootstrap + Leaflet
web page mapping real-world pilot deployments of a non-contact, mmWave-radar-based
elderly watch-over research project, hosted on GitHub Pages.

Live site: https://soranishizaki.github.io/Service-Engineering-Seminar---final-task/

## Structure

```
.
├── index.html      # Main page (navbar, hero, sensor strip, map, site cards, about, footer)
├── css/
│   └── style.css   # Custom CSS (hero gradient, sensor colors, card hover, marker styling)
├── js/
│   ├── data.js     # Deployment site + sensor type data (single source of truth)
│   └── main.js     # Leaflet map init, markers/circles/layers, dynamic cards
└── README.md
```

## Stack

| Item | Details |
| --- | --- |
| CSS framework | Bootstrap 5.3 (CDN) |
| Icons | Bootstrap Icons |
| Map library | Leaflet 1.9 (CDN) |
| Map tiles | OpenStreetMap |
| Hosting | GitHub Pages |

## Deploying to GitHub Pages

1. Open the repository's **Settings → Pages**
2. Select **Source: Deploy from a branch / Branch: main / (root)** and Save
3. The site is published at `https://<username>.github.io/<repo>/` within a few minutes

## Running locally

```sh
python3 -m http.server 8765
# open http://localhost:8765 in a browser
```
