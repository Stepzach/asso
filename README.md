# Tongasoa Zazakely — website recreation

A responsive, **HTML/CSS/vanilla JavaScript** recreation of the six desktop and six smaller-screen mockup pages provided in `Larger screens.pdf` and `Smaller screens.pdf`.

## Run it

Open `index.html` in your browser. For local hosting, from this directory run:

```bash
python -m http.server 8000
```

Then visit http://localhost:8000.

## What is included

- Six connected sections: accueil, projets, actions, séjours, dons and contact.
- Desktop layout matches the 1190 × 841 reference; the different small-screen composition matches the 708 × 1190 reference.
- Additional narrow-phone adjustments below 540px.
- The actual photographs extracted from the supplied PDF documents (not placeholders or stock imagery).
- Working, keyboard-accessible hamburger menu, responsive navigation and scroll links.
- Working HelloAsso fundraiser/donation links to the verified association campaign.
- Semantic structure, alternative image text, accessible focus states, reduced-motion support and lazy-loaded images.

## Before publishing

1. **Fonts:** Uses Google Fonts for the same families embedded in the original PDFs: Newsreader, Nunito and Caveat. An internet connection is needed to fetch the fonts when the site first loads; fallback fonts are defined in the CSS.
2. **Social links:** The mockups did not provide actual Instagram or Facebook page addresses. The two links currently open a web search for the association instead of claiming an unverified account. Replace those URLs in `index.html` with official social profile URLs before publishing.
3. **Email:** `email@adreess.com` is exactly the example address shown in the supplied reference. Replace it with the organization's real contact email before publishing.
4. **Creator credit:** The supplied design says “Zachary Stephens.” Add a verified portfolio URL if you want the name to be clickable.
5. **Campaign details:** The €2,000 target follows the mockups, and the live fundraiser link shows up-to-date information. This design does not pretend the collected amount is static/current.

## Files

- `index.html` — semantic page content
- `styles.css` — desktop artboard, smaller-screen artboard, and narrow-phone breakpoints
- `script.js` — hamburger menu, keyboard interactions, active navigation
- `assets/` — extracted original photographs from the supplied PDFs

All 6 PDF pages form a single scrollable site. Desktop header links use on-page anchors and stay visible while scrolling.
