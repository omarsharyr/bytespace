# Landing page artwork

These assets are cropped from the user-supplied `Home.png` (1440 × 6377).
They preserve the original illustrations, photography, brand marks, and
decorative course/statistics mockups. Page headings, descriptions, navigation,
course details, testimonials, and forms are rendered as HTML in React.

To reproduce the exports on Windows:

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File scripts/export-design-assets.ps1 -Reference "F:/projects/Home.png"
```

The reference image is only needed to regenerate assets, not to build or run
the website.
