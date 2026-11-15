# Pocketlink website

The marketing landing page and privacy policy for [Pocketlink](https://github.com/halans/pocketlink-ios), the iPhone app that turns your contact details into a Lock Screen wallpaper with a QR code.

Plain HTML and CSS: no build step, framework or tracking. Open `index.html` in a browser, or host the folder on any static host (GitHub Pages, Cloudflare Pages, Netlify).

- `index.html` — landing page
- `privacy.html` — privacy policy (use its URL for App Store Connect)
- `styles.css` — styles; colours match the app's asset catalog, in light and dark mode
- `assets/` — app icon, screenshots and wallpaper renders, all made from the app itself

## Preview locally

```sh
python3 -m http.server 8000
# then open http://localhost:8000
```

## Before launch

- Replace the "Coming soon to the App Store" badges with Apple's official Download on the App Store badge and the app's App Store link once it's live.
- Keep `privacy.html` in step with the app's `docs/PRIVACY.md`.
