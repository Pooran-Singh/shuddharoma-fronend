# ShuddhAroma Frontend

Premium e-commerce frontend built with React + TypeScript + Tailwind.

## Run

```bash
npm install
npm run dev
```

## Instagram embed integration

The homepage uses selected public post/reel URLs from `@shuddharoma.in` and renders image-only tiles (no caption/meta UI) by deriving media URLs from each permalink.

Each tile links out to the original Instagram post/reel.

## Conflict check

```bash
npm run check:conflicts
```

This scans the repository for unresolved merge markers (`<<<<<<<`, `=======`, `>>>>>>>`).
