# Travelogue (Asia Edition)

Same Next.js + Tailwind + Framer Motion build as the original
Travelogue project, with the design system unchanged — Alpine Frost
palette, floating glassmorphism nav, custom cinematic cursor,
horizontal expanding accordion, slide-over checkout drawer with a
live pricing calculator.

The destination lineup and photos are swapped back to the original 7:

- Kyoto, Japan
- Bali, Indonesia
- Sri Lanka (Ella & the Hill Country)
- Bangkok, Thailand
- Maldives
- Singapore
- India (Agra)

## Run it locally

```
npm install
npm run dev
```

Then open http://localhost:3000

## Build for production

```
npm run build
npm run start
```

## Structure

Identical to the original Travelogue project — see `lib/destinations.js`
for all destination content (description, itinerary, pricing,
inclusions/exclusions). Edit that file to change any destination's
copy or pricing; drop a new photo in `public/images/` and reference
it there to swap an image.

Fonts are self-hosted via `@fontsource/inter` and `@fontsource/fraunces`
— no external network dependency at runtime.

## Verified

Built and run with a real production build (`npm run build` +
`npm run start`), screenshotted against the live local server —
not just written and assumed to work.
