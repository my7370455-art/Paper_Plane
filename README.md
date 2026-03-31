# ✈ Paper Plane

A letter-writing web application for university students to correspond with each other. Built with Vite + React.

## Features

- **Inbox** — Read letters from your pen pals in a warm paper aesthetic. Select any pen pal from the sidebar to view their letter, and reply via a compose modal.
- **Public Letters** — Browse letters from the broader university community. Expand any card to read the full letter, or write and publish your own.
- **Profile** — Edit your display name, email, university, and bio. Toggle notification and appearance settings, and view your letter statistics.

## Tech Stack

- **Vite + React** (with React Router for client-side navigation)
- **Pure CSS** (flexbox layout, CSS custom properties for theming)
- No backend — all data is hardcoded mock data

## Getting Started

```bash
npm install
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173) in your browser.

## Build

```bash
npm run build
```

## Project Structure

```
src/
├── main.jsx              # App entry point with BrowserRouter
├── App.jsx               # Route definitions
├── App.css / index.css   # Global styles and CSS variables
├── components/
│   ├── Navbar.jsx/css    # Sticky top navigation bar
│   └── Sidebar.jsx/css   # Pen pal list sidebar
└── pages/
    ├── MainPage.jsx/css          # Inbox with letter view
    ├── PublicLettersPage.jsx/css # Community letters grid
    └── UserPage.jsx/css          # Profile and settings
```
