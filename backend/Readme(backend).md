# BeyondChats – Phase 1 Backend

This repository contains Phase 1 of the BeyondChats assignment.  
Phase 1 focuses on building a backend system that scrapes blog articles, stores them in a database, and exposes CRUD APIs for further processing in later phases.

---

## Phase 1 Objective

The objectives of Phase 1 are:

1. Scrape the 5 oldest articles from:
   https://beyondchats.com/blogs/
2. Store the scraped articles in a database
3. Expose RESTful CRUD APIs for managing articles

This backend will be used in:
- Phase 2: Automated article updating using Node.js and AI
- Phase 3: React frontend for displaying articles

---

## Tech Stack

- Backend Framework: Laravel 10
- Language: PHP 8.1+
- Database: MySQL
- API Style: REST
- Data Format: JSON

---

## Project Structure

backend/
├── app/
│   ├── Http/
│   │   └── Controllers/
│   │       └── ArticleController.php
│   │
│   └── Models/
│       └── Article.php
│
├── database/
│   └── migrations/
│       └── xxxx_create_articles_table.php
│
├── routes/
│   └── api.php
│
├── .env
├── composer.json
└── README.md

---

## Database Schema

Table: articles

Fields:
- id (primary key)
- title (string)
- author (string, nullable)
- published_at (datetime, nullable)
- original_url (string, unique)
- original_content (long text)
- updated_content (long text, nullable)
- references (json, nullable)
- status (enum: original, updated)
- created_at
- updated_at

---

## API Endpoints

### Get all articles
GET /api/articles

### Get single article
GET /api/articles/{id}

### Create article
POST /api/articles

Request body example:
{
  "title": "Article Title",
  "author": "Author Name",
  "published_at": "2024-01-01",
  "original_url": "https://beyondchats.com/blogs/example",
  "original_content": "Full article content"
}

### Update article
PUT /api/articles/{id}

Request body example:
{
  "updated_content": "Updated article content",
  "references": [
    "https://example.com/ref1",
    "https://example.com/ref2"
  ],
  "status": "updated"
}

### Delete article
DELETE /api/articles/{id}

---

## Environment Setup

### Prerequisites

- PHP 8.1 or higher
- Composer
- MySQL

---

### Environment Configuration

Create a .env file inside the backend directory.

Example:

APP_NAME=BeyondChats
APP_ENV=local
APP_DEBUG=true
APP_URL=http://localhost:8000

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=beyondchats
DB_USERNAME=root
DB_PASSWORD=

---

## Installation Steps

Run the following commands inside the backend directory:

1. Install dependencies
composer install

2. Generate application key
php artisan key:generate

3. Run database migrations
php artisan migrate

4. Start the server
php artisan serve

The backend server will run at:
http://localhost:8000

---

## Scraping Logic

- The scraper identifies the last pagination page of the BeyondChats blog
- From that page, the 5 oldest articles are selected
- Each article page is visited to extract:
  - Title
  - Author
  - Published date
  - Full article content
- Extracted articles are stored in the database

Scraping is executed once to seed the database.

---

## Notes

- This phase implements only the backend functionality
- Updated article fields remain empty until Phase 2
- The backend is designed to support automation and frontend integration in later phases

---

## Author

Developed as part of the BeyondChats internship assignment.
