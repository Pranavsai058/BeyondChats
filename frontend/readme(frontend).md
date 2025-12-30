phase: Phase 3
name: BeyondChats Frontend
description: >
  Phase 3 provides a React-based frontend that displays articles fetched
  from the backend API. It allows users to view both original and updated
  versions of articles along with reference links.

objective:
  - Display list of articles
  - View single article details
  - Show original and updated content
  - Display reference links
  - Provide clean and responsive UI

tech_stack:
  language: JavaScript
  framework: React
  bundler: Vite
  routing: React Router
  http_client: Axios
  styling: CSS

folder_structure:
  frontend:
    - index.html: HTML entry point
    - vite.config.js: Vite configuration
    - package.json: Dependencies and scripts
    - .env: Environment variables
    - src:
        - main.jsx: Application entry
        - App.jsx: Route definitions
        - api.js: Backend API handler
        - index.css: Global styles
        - pages:
            - Home.jsx: Article listing page
            - Article.jsx: Article detail page
    - README.yaml: Documentation

environment_variables:
  VITE_API_URL: Backend API base URL

example_env:
  VITE_API_URL: http://localhost:8000/api

routes:
  home:
    path: /
    description: Displays list of all articles
  article_detail:
    path: /article/:id
    description: Displays original and updated article

data_flow:
  - Frontend sends request to backend API
  - Backend responds with article data
  - UI renders content conditionally:
      - Original article always visible
      - Updated article shown if available
      - References shown if present

how_to_run:
  steps:
    - npm install
    - npm run dev

server:
  default_port: 5173
  backend_dependency: Backend must be running

ui_features:
  - Article list with status
  - Original vs Updated content sections
  - Clickable reference links
  - Responsive layout

notes:
  - No authentication required
  - API base URL is configurable via environment variables
  - Designed to integrate seamlessly with Phase 1 and Phase 2
