phase: Phase 2
name: BeyondChats Article Updater
description: >
  Phase 2 implements an automated Node.js script that fetches articles
  from the backend API, finds external reference blogs, rewrites the
  articles using AI logic, and updates them back into the backend.

objective:
  - Fetch articles from Phase 1 backend API
  - Identify top 2 external reference blog links per article
  - Scrape reference content
  - Rewrite original article using references
  - Append references
  - Update article via backend API

tech_stack:
  language: JavaScript
  runtime: Node.js
  libraries:
    - axios
    - cheerio
    - dotenv
  ai: OpenAI (optional / pluggable)
  api_style: REST

folder_structure:
  updater:
    - index.js: Main execution script
    - api.js: Backend API communication
    - scraper.js: Reference blog scraping logic
    - llm.js: AI rewriting logic
    - package.json: Dependencies
    - .env: Environment variables
    - README.yaml: Documentation

environment_variables:
  API_BASE_URL: Backend API base URL
  OPENAI_API_KEY: OpenAI API key (optional)
  SEARCH_API_KEY: Search API key (optional)
  SEARCH_ENGINE_ID: Search engine ID (optional)
  NODE_ENV: development

example_env:
  API_BASE_URL: http://localhost:8000/api
  OPENAI_API_KEY: dummy
  SEARCH_API_KEY: dummy
  SEARCH_ENGINE_ID: dummy
  NODE_ENV: development

execution_flow:
  - Fetch all articles from backend
  - Skip articles already marked as updated
  - For each original article:
      - Identify two external reference URLs
      - Scrape reference content
      - Rewrite article using AI logic
      - Append references
      - Update article in backend
      - Mark status as updated

api_interactions:
  fetch_articles:
    method: GET
    endpoint: /articles
  update_article:
    method: PUT
    endpoint: /articles/{id}

how_to_run:
  steps:
    - npm install
    - node index.js

notes:
  - Script can be executed manually or scheduled
  - AI integration is optional for evaluation
  - Backend must be running before execution

output:
  - Updated article content
  - References stored in backend
  - Article status changed to updated
