# ShuddhAroma Frontend

Premium e-commerce frontend built with React + TypeScript + Tailwind.

## Run

```bash
npm install
npm run dev
```

## Instagram live post integration (no access token required)

The homepage pulls 3-4 latest posts from the public profile `https://www.instagram.com/shuddharoma.in/` through a public RSS bridge (`rsshub`) + JSON converter (`rss2json`).

If public fetch fails (rate limit/network/CORS), the UI gracefully falls back to curated placeholder posts.

## Conflict check

```bash
npm run check:conflicts
```

This scans the repository for unresolved merge markers (`<<<<<<<`, `=======`, `>>>>>>>`).
