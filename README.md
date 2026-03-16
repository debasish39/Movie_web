# 🎬 FilmBase

FilmBase is a modern movie discovery web application where users can browse trending movies, watch trailers, and rate their favorite films.

The project is built using **Next.js App Router**, **Clerk Authentication**, and the **OMDb API**.

---

## 🚀 Features

- 🔐 User Authentication with Clerk
- 🎥 Watch movie trailers
- ⭐ Rate movies
- 🔍 Search movies
- 📱 Fully responsive design
- ⚡ Fast performance with Next.js
- 🎬 Cinematic UI with Tailwind CSS
- 🧭 Browse movies by category
- 🔔 Toast notifications

---

## 🧰 Tech Stack

- **Next.js (App Router)**
- **React**
- **Tailwind CSS**
- **Clerk Authentication**
- **OMDb API**
- **React Icons**
- **Sonner (Toast Notifications)**

---

## 📁 Project Structure

```text
app
├── components
│   ├── MovieCard.jsx
│   ├── MovieRow.jsx
│   ├── Navbar.jsx
│   ├── TrailerCarousel.jsx
│   └── StarRating.jsx
│
├── hooks
│   └── useMovies.js
│
├── movie
│   └── [id]
│       └── page.jsx
│
├── globals.css
├── layout.js
└── page.js

public
├── icons
├── logo.png
├── og-image.png
└── loading.webm
```
## ⚙️ Installation Guide

Follow these steps to run the **Movie Web** project locally.

---

## 1️⃣ Clone the Repository

First, clone the project from GitHub.

```bash
git clone https://github.com/debasish39/Movie_web.git
cd Movie_web
```

---

## 2️⃣ Install Dependencies

Install all required packages using **npm**.

```bash
npm install
```

This will install dependencies defined in `package.json`.

---

## 3️⃣ Start the Development Server

Run the development server using:

```bash
npm run dev
```

Alternative package managers:

```bash
yarn dev
```

```bash
pnpm dev
```

```bash
bun dev
```

---

## 4️⃣ Open the Application

After starting the server, open your browser and go to:

```
http://localhost:3000
```

The application will now run locally on your machine. ([GitHub][1])

---

## 5️⃣ Edit the Application

You can start editing the main page here:

```
app/page.js
```

The page will automatically reload when you save changes. ([GitHub][1])

---

## 🧰 Requirements

Make sure you have installed:

* Node.js (v18 or later recommended)
* npm or yarn
* Git

---

## 📦 Build for Production

To build the project for production:

```bash
npm run build
```

Then start the production server:

```bash
npm start
```

[1]: https://github.com/debasish39/Movie_web "GitHub - debasish39/Movie_web · GitHub"
## 🚀 Deploying to Netlify

Follow these steps to deploy the FilmBase project on Netlify.

---

### 1️⃣ Install Netlify Next.js Plugin

Install the Netlify plugin required for Next.js support.

```bash
npm install @netlify/plugin-nextjs
```

---

### 2️⃣ Create a Netlify Configuration File

Create a file named:

```
netlify.toml
```

Add the following configuration:

```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

---

### 3️⃣ Add Environment Variables

Since the project uses authentication and APIs, add the required environment variables in Netlify.

Example:

```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_key
CLERK_SECRET_KEY=your_secret
NEXT_PUBLIC_OMDB_API_KEY=your_api_key
```

Add them in:

```
Netlify Dashboard → Site Settings → Environment Variables
```

---

### 4️⃣ Push the Project to GitHub

If your project is not yet on GitHub, run:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/filmbase.git
git push -u origin main
```

---

### 5️⃣ Deploy the Project

1. Go to **https://app.netlify.com**
2. Click **Add new site**
3. Select **Import from Git**
4. Choose **GitHub**
5. Select your repository

Configure build settings:

| Setting           | Value           |
| ----------------- | --------------- |
| Build Command     | `npm run build` |
| Publish Directory | `.next`         |

Click **Deploy Site**.

---

### 🌐 After Deployment

Netlify will generate a live URL similar to:

```
https://filmbase.debasish.xyz
```

Your FilmBase movie discovery app will now be live on the internet.
