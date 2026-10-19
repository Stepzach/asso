Tongasoa Zazakely — viewport-height and mobile navigation update

FILES
  index.html — updated six-link mobile menu (Accueil, Projets, Nos actions,
               Les séjours, Les dons, Contact).
  styles.css — 100svh snap-aligned sections; vertically fitted desktop layouts;
               rebalanced tablet/phone layouts; full-width mobile menu overlay.
  script.js  — functional menu (open, close, escape, keyboard focus loop,
               close on navigation), active section indication.

INSTALLATION
  Replace index.html and styles.css in the original website project with these
  versions, and add/replace script.js in the same directory. Keep the original
  assets/ folder in place; the source material did not include the image files.
  No dependencies or build tools required.

VISUAL / INTERACTION VERIFICATION
  Chromium automated screenshot/layout checks at 1440x900, 1280x720,
  768x1024, 390x844, 375x667, 320x568, and 844x390.
  Verified six section heights equal the small viewport height; no horizontal
  page overflow; no unexpected spill from visible main section content.
  Checked keyboard Escape, full-width menu coverage, menu link navigation,
  viewport scroll snapping, and prominent element collisions on phone/desktop.
  NOTE: Testing used temporary placeholder images because the original image
  assets were not attached; actual photo crops should be inspected once the
  project is reunited with the original assets.
