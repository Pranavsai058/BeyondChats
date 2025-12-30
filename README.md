# BeyondChats – Full Stack Article Processing System

This repository contains a complete multi-phase system developed as part of the BeyondChats internship assignment.

The project scrapes blog articles, stores them in a backend database, automatically updates them using external references and AI logic, and displays the results through a React frontend.

---

## Project Phases Overview

Phase 1: Backend  
Phase 2: Automated Article Updater  
Phase 3: Frontend Application  

Each phase is modular and can run independently while integrating seamlessly with the others.

---

## Tech Stack

Backend:
- Laravel 10
- PHP 8.1+
- MySQL
- REST APIs

Updater:
- Node.js
- Axios
- Cheerio
- dotenv
- Optional AI integration (OpenAI or similar)

Frontend:
- React
- Vite
- React Router
- Axios
- CSS

---

## Repository Structure

BeyondChats/
├── backend/        # Phase 1 – Laravel Backend
├── updater/        # Phase 2 – Node.js Automation Script
├── frontend/       # Phase 3 – React Frontend
└── README.md       # Master documentation

---

## Phase 1 – Backend (Laravel)

### Responsibilities
- Scrape the 5 oldest articles from https://beyondchats.com/blogs/
- Store articles in a MySQL database
- Expose RESTful CRUD APIs

### Key APIs
- GET /api/articles
- GET /api/articles/{id}
- POST /api/articles
- PUT /api/articles/{id}
- DELETE /api/articles/{id}

### Stored Data
- Original article content
- Updated article content (added in Phase 2)
- Reference links
- Article status (original / updated)

---

## Phase 2 – Article Updater (Node.js)

### Responsibilities
- Fetch articles from backend API
- Find top 2 external reference blog links
- Scrape reference content
- Rewrite articles using AI logic
- Append references
- Update articles back into backend

### Key Features
- Runs as a standalone Node.js script
- Uses environment variables for API and AI keys
- Skips already updated articles
- Can be extended for scheduling (cron / GitHub Actions)

---

## Phase 3 – Frontend (React)

### Responsibilities
- Display list of articles
- Show original and updated article versions
- Display reference links
- Provide clean, responsive UI

### Routes
- `/` → Article list
- `/article/:id` → Article details

---

## Architecture Diagram


::contentReference[oaicite:0]{index=0}


### Logical Architecture Flow



BeyondChats Blog Website
│
▼
Phase 1: Scraper (Backend)
│
▼
MySQL Database
│
▼
Laravel REST API
│
├───────────► Phase 2: Node.js Updater
│ - Fetch articles
│ - Search references
│ - Scrape reference blogs
│ - Rewrite using AI
│ - Update articles
│
▼
Phase 3: React Frontend
- Fetch articles
- Display original & updated content
- Show references


---

## Environment Configuration

### Backend (.env)
- Database credentials
- Application settings

### Updater (.env)
- API_BASE_URL
- OPENAI_API_KEY (optional)
- SEARCH_API_KEY (optional)

### Frontend (.env)
- VITE_API_URL

Each module uses its own `.env` file and should not be committed to version control.

---

## How to Run the Project

### Backend


cd backend
composer install
php artisan key:generate
php artisan migrate
php artisan serve


### Updater
cd updater
npm install
node index.js


### Frontend
cd frontend
npm install
npm run dev


---

## Evaluation Notes

- Phase 1 backend is implemented using Laravel with full CRUD APIs
- Phase 2 automation is handled via Node.js
- Phase 3 frontend is built using React and Vite
- Architecture supports scalability and clear separation of concerns
- Project is designed for clarity, maintainability, and real-world relevance
