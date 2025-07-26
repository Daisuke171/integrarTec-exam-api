# JMusic API 🎵

Welcome to **JMusic API** — an open-source platform to discover Japanese music artists and their live shows.  
Browse artists, explore their members and genres, and check out upcoming events!

This repo is only for an exam 😝

---

## 🚀 Features

- **Artists Catalogue:**  
  Browse a curated list of Japanese music artists, including members, genres, origins, and images.

- **Shows Listing:**  
  Explore upcoming and past live shows, with locations, dates, and participating artists.

- **Modern UI:**  
  Responsive, contemporary frontend built with TypeScript and CSS Grid.

- **RESTful API:**  
  Built with [NestJS](https://nestjs.com/) and [Prisma](https://www.prisma.io/) ORM.

---

## 🛠️ Project Structure

```
client/
  index.html
  artists.html
  shows.html
  scripts/
    artists.ts
    shows.ts
  styles/
    style.css

server/
  src/
    artists/
    shows/
    ...
  prisma/
    schema.prisma
  generated/
    prisma/
  ...
```

---

## ⚡ Quickstart

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/jmusic-api.git
cd jmusic-api
```

### 2. Install dependencies

```bash
cd server
pnpm install
```

### 3. Set up the database

- Make sure you have Docker installed.
- Start PostgreSQL and Adminer:

```bash
docker-compose up -d
```

- Run Prisma migrations:

```bash
pnpm prisma migrate dev
```

### 4. Run the server

```bash
pnpm run start:dev
```

### 5. Run the client

Open `client/index.html` in your browser (or use a static server like [vite](https://vitejs.dev/) or [live-server](https://www.npmjs.com/package/live-server)).

---

## 📚 API Endpoints

- `GET /artists` — List all artists
- `GET /shows` — List all shows
- `POST /artists` — Add a new artist
- `POST /shows` — Add a new show

> More endpoints and details in the code!

---

## 🖥️ Tech Stack

- **Backend:** NestJS, Prisma, PostgreSQL
- **Frontend:** TypeScript, HTML, CSS
- **Dev Tools:** Docker, Adminer

---

## 🤝 Contributing

Pull requests are welcome!  
For major changes, please open an issue first to discuss what you would like to change.

---

## 📄 License

MIT

---

## 👤 Author

- [Daisuke171](https://github.com/Daisuke171)

---

Enjoy exploring Japanese music! 🇯🇵🎶
