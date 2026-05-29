# FullStack AI Resume Screener

An AI-powered Resume Screening System built using React, n8n automation, Google Gemini API, and Google Sheets integration.

This project automates the resume evaluation process by allowing users to upload resumes through a React frontend while n8n workflows process, analyze, and score the resumes using AI.

---

# Features

- Resume Upload Form (React Frontend)
- AI-based Resume Analysis
- Automated Candidate Evaluation
- Google Gemini API Integration
- n8n Workflow Automation
- Google Sheets Data Storage
- Real-time Processing Workflow
- Clean and Scalable Architecture

---

# Tech Stack

## Frontend
- React.js
- HTML
- CSS
- JavaScript

## Automation & Backend
- n8n
- Webhooks
- Google Gemini API

## Database / Storage
- Google Sheets

---

# Project Architecture

```bash
User Upload Resume
        ↓
React Frontend Form
        ↓
n8n Webhook Trigger
        ↓
Gemini AI Resume Analysis
        ↓
Candidate Scoring & Evaluation
        ↓
Google Sheets Storage
```

---

# Folder Structure

```bash
fullstack-ai-resume-screener/
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── n8n-workflow/
│   └── workflow.json
│
├── screenshots/
│
├── README.md
└── .env.example
```

---

# Setup Instructions

## 1. Clone Repository

```bash
git clone https://github.com/your-username/fullstack-ai-resume-screener.git
```

---

## 2. Frontend Setup

```bash
cd frontend
npm install
npm start
```

---

## 3. Import n8n Workflow

- Open n8n
- Click "Import Workflow"
- Upload `workflow.json`

---

## 4. Configure Environment Variables

Create a `.env` file and add:

```env
GEMINI_API_KEY=your_api_key
N8N_WEBHOOK_URL=your_webhook_url
```

---

# How It Works

1. User uploads resume from React frontend
2. Data is sent to n8n webhook
3. n8n processes the resume
4. Gemini AI analyzes resume content
5. AI generates evaluation and scoring
6. Results are stored in Google Sheets

---

# Screenshots

Add your project screenshots inside the `screenshots` folder.

Example:
- Upload Form
- n8n Workflow
- Google Sheets Output
- AI Evaluation Response

---

# Future Improvements

- PDF Resume Parsing
- Authentication System
- Dashboard for Recruiters
- MongoDB Integration
- Email Notifications
- Candidate Ranking System

---

# Author

Abdulrehman Khan

---
