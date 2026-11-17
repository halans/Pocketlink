# Pocketlink website

The marketing landing page and privacy policy for [Pocketlink](https://github.com/halans/pocketlink-ios), the iPhone app that turns your contact details into a Lock Screen wallpaper with a QR code.

Plain HTML and CSS: no build step, framework or tracking. Open `index.html` in a browser, or host the folder on any static host (GitHub Pages, Cloudflare Pages, Netlify).

- `index.html` — landing page
- `privacy.html` — privacy policy (use its URL for App Store Connect)
- `support.html` — support page with help and contact (use its URL as the App Store Connect Support URL)
- `styles.css` — styles; colours match the app's asset catalog, in light and dark mode
- `assets/` — app icon, screenshots and wallpaper renders, all made from the app itself

## Preview locally

```sh
python3 -m http.server 8000
# then open http://localhost:8000
```

## Maintenance

- Keep `privacy.html` in step with the app's `docs/PRIVACY.md`.
