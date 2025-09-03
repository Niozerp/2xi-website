# Indescribable Industries — WAAPI Path Marquee (Inline JS)

Animate “WE TURN VISION INTO PRODUCT • …” along an SVG path using the Web Animations API.
All project JavaScript lives in `index.html`.

## Run
1. Serve the folder with any static server.
2. Open `index.html` in a modern browser.
3. Watch the headline scroll left-to-right along the path.

## Customize
- **Speed**: Change `DURATION_MS` inside the inline `<script type="module">`.
- **Message**: Edit the text content within both `<textPath>` elements.
- **Path**: Replace the `d` attribute on `#sinePath` (keep `pathLength="100"`).
- **Size**: Adjust responsive font sizes in `assets/css/styles.css`.

## Accessibility
- Honors `prefers-reduced-motion` automatically.

## Tech
- Vue 2.5, Bootstrap 5, WAAPI; no deprecated features; no external project JS files.
