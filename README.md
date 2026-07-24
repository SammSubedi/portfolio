# Samundra Subedi — Portfolio

A full-stack portfolio website built with React, Node.js, Express, and PostgreSQL. Features dynamic project filtering, a contact form that saves to a database, and a dark mode toggle.

**Live site:** https://subedisamundra.com.np

---

## Tech Stack

**Frontend**
- React (Vite)
- Plain CSS with CSS custom properties for dark mode
- Deployed on Vercel

**Backend**
- Node.js + Express
- PostgreSQL with raw `pg` queries
- Deployed on Render

---

## Features

- Dynamic projects section fetched from PostgreSQL database
- Tag-based project filtering (`react`, `node`, `unreal-engine`, etc.)
- Contact form that saves submissions to the database
- Dark mode toggle with smooth CSS variable transitions
- Fully responsive layout for mobile and desktop
- Resume download

---

## Project Structure

portfolioPage/
├── client/                  # React frontend (Vite)
│   ├── public/              # Static assets (profile photo, CV PDF)
│   └── src/
│       └── components/
│           ├── Navbar/
│           ├── Hero/
│           ├── About/
│           ├── Projects/
│           ├── Skills/
│           ├── Contact/
│           └── Footer/
└── server/                  # Node.js + Express backend
├── routes/
│   ├── projects.js      # GET /api/projects (with tag filtering)
│   └── messages.js      # POST /api/messages
├── db/
│   ├── schema.sql       # Database table definitions
│   └── seed.sql         # Initial project data
├── db.js                # PostgreSQL connection pool
└── index.js             # Express server entry point

---

## Running Locally

### Prerequisites
- Node.js
- PostgreSQL

### 1. Clone the repo

```bash
git clone https://github.com/SammSubedi/portfolio.git
cd portfolio
```

### 2. Set up the backend

```bash
cd server
npm install
```

Create a `.env` file inside `server/`:

DB_USER=your_postgres_user
DB_PASSWORD=your_postgres_password
DB_HOST=localhost
DB_PORT=5432
DB_NAME=portfolio_db

Create the database and run the schema:

```bash
psql -U your_postgres_user -d portfolio_db -h localhost -f db/schema.sql
psql -U your_postgres_user -d portfolio_db -h localhost -f db/seed.sql
```

Start the server:

```bash
node index.js
```

### 3. Set up the frontend

```bash
cd ../client
npm install
```

Create a `.env` file inside `client/`:

VITE_API_URL=

Leave `VITE_API_URL` empty for local development — the Vite proxy handles routing to `localhost:5000`.

Start the dev server:

```bash
npm run dev
```

### 4. Open the app

Visit `http://localhost:5173`

---

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/projects` | Returns all projects |
| GET | `/api/projects?tag=react` | Returns projects filtered by tag |
| POST | `/api/messages` | Saves a contact form submission |

---

## Environment Variables

### Server (`server/.env`)

| Variable | Description |
|----------|-------------|
| `DB_USER` | PostgreSQL role name |
| `DB_PASSWORD` | PostgreSQL role password |
| `DB_HOST` | Database host |
| `DB_PORT` | Database port (default: 5432) |
| `DB_NAME` | Database name |
| `NODE_ENV` | Set to `production` on Render |

### Client (`client/.env`)

| Variable | Description |
|----------|-------------|
| `VITE_API_URL` | Backend API URL (empty for local dev) |

---

## Author

**Samundra Subedi**
- GitHub: [@SammSubedi](https://github.com/SammSubedi)
- Email: sank.subedi@gmail.com
