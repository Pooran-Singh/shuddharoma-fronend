# ShuddhAroma Frontend

Premium e-commerce frontend built with React + TypeScript + Tailwind.

## Run

```bash
npm install
npm run dev
```

## Instagram live post integration

To pull 3-4 latest posts directly from `https://www.instagram.com/shuddharoma.in/`, configure Instagram Graph credentials in a `.env` file:

```bash
VITE_INSTAGRAM_USER_ID=YOUR_INSTAGRAM_USER_ID
VITE_INSTAGRAM_ACCESS_TOKEN=YOUR_LONG_LIVED_ACCESS_TOKEN
```

When these variables are not available (or API access fails), the UI gracefully falls back to curated placeholder posts.

## Conflict check

```bash
npm run check:conflicts
```

This scans the repository for unresolved merge markers (`<<<<<<<`, `=======`, `>>>>>>>`).
