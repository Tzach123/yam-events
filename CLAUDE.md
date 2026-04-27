# yam-events

Event equipment rental showcase site (Hebrew/RTL).

## Frontend

React 19, TypeScript, Vite, React Router v6, Bootstrap 5, Swiper 12, Axios, CSS Modules

```
frontend/src/
├── Containers/      # Page-level components (Home, SubCategory)
├── Components/      # UI building blocks
├── hoc/             # Layout shell, Fragment wrapper
└── types/index.ts   # Shared interfaces
```

## Backend

Node.js, Express 5, CORS — port 5000

```
server/
├── index.js         # Express entry point
└── routers/
    └── category.js  # Sub-category image file resolver
```

- `GET /sub?id={categoryId}&subId={subId}` → `{ files, path, title }`

## Dev

```bash
npm run dev                  # both frontend + server
cd frontend && npm run dev   # frontend only (port 5173)
```
