# ShuddhAroma Frontend

Premium e-commerce frontend built with React + TypeScript + Tailwind.

## Run

```bash
npm install
npm run dev
```

## Instagram embed integration

The homepage uses official Instagram embeds for selected public post/reel URLs from `@shuddharoma.in`.

It loads `https://www.instagram.com/embed.js` on the client and renders embed cards directly from permalink blockquotes.

## Conflict check

```bash
npm run check:conflicts
```

This scans the repository for unresolved merge markers (`<<<<<<<`, `=======`, `>>>>>>>`).
