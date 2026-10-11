# Ethereal Expo Showcase Website

Responsive static website starter for **Ethereal — Smart Vital Signs Kiosk with Queuing System**.

## Included
- Landing page and startup portfolio
- Demo video embed area
- Prototype screenshot placeholders
- RFID, ESP32, vital-sign sensor, and kiosk overview
- Optional live-system link and contact link
- Responsive mobile navigation
- Dark navy and teal theme

## Files
- `index.html` — page content
- `styles.css` — design and responsive layout
- `script.js` — demo video, live-system, and contact settings
- `assets/` — add your real logo, kiosk photos, and screenshots here

## Customize before publishing
1. Edit `script.js`.
2. Set `demoVideoEmbedUrl` to a YouTube/Vimeo embed URL (example: `https://www.youtube.com/embed/VIDEO_ID`).
3. Set `liveSystemUrl` only if you have a safe public demo environment. Do not use `localhost`, a private IP, admin URLs, or expose your local database.
4. Set `contactUrl` to your team email or contact page.
5. Replace the labeled UI placeholders in `index.html` with actual Ethereal screenshots and photos.
6. Use fictional test records in screenshots. Remove or blur any real patient information.
7. Test on a phone and desktop.

## Hosting and QR code
This is a static site suitable for a static hosting service such as GitHub Pages, Netlify, or Cloudflare Pages. Upload the contents of this folder and configure the host to publish `index.html`. Hosting dashboards change, so follow the provider's current instructions.

After deployment:
1. Copy the final public **HTTPS** URL.
2. Test the URL on a phone using mobile data, not only your own Wi-Fi.
3. Generate a QR code from that exact public URL using a trusted QR-code generator or your design tool.
4. Scan-test with at least two phones and print a readable URL below the QR code as a backup.
5. Print a short label such as **SCAN TO EXPLORE ETHEREAL**.

Do not create the expo QR code from `localhost`, `file:///...`, or a private LAN IP. This package does not itself deploy the site or reserve a public URL.

## Safety note
The live system should remain disabled until you have a purpose-built, safely accessible demo environment. Never expose admin pages, database credentials, API secrets, or unrestricted access to your local kiosk. This site is a showcase and does not provide medical advice or clinical validation.

## Theme colors
- Deep navy: `#071827`
- Secondary navy: `#0b2234`
- Teal: `#2ee0c0`
- Deep teal: `#12bba8`
- Soft white: `#f2f8fb`


Design update: This version uses a simpler light-blue and white layout with navy headers and teal accents, based on the healthcare dashboard reference. Replace the illustrative placeholders with actual Ethereal project photos and screenshots before publishing.
