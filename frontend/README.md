# AI Chatbot Demo

An AI-powered chatbot built with **React**, **Node.js**, **Express**, **PostgreSQL**, and the **OpenAI API**.  
This project demonstrates how to integrate modern AI into a full-stack application while maintaining clean architecture, scalability, and an intuitive user experience.  

---

## Vision
To **bridge the gap between humans and technology** by creating conversational interfaces that feel natural, trustworthy, and helpful.  
The vision is to empower individuals, businesses, and teams to interact with software in the **simplest and most human way possible: conversation**.  

---

## Mission
Our mission with this project is to:  
- Showcase how **AI can be integrated into real-world applications**.  
- Provide a **starter template** for developers and teams who want to build their own AI-powered apps.  
- Demonstrate **best practices** in full-stack development — from frontend responsiveness to backend API design and database persistence.  
- Deliver an interface that feels **effortless on both mobile and desktop**, just like the messaging apps people already use daily.  

---

## Features (For now)
- **Conversational AI** powered by OpenAI  
- **Persistent storage** of conversations with PostgreSQL  
- **Responsive UI** (works beautifully on mobile and desktop)  
- **Real-time feedback** — user sees when the bot is "thinking"  
- **Scalable architecture** with a separate backend and frontend  
- **Modern stack**: React, TailwindCSS, Node.js, Express, PostgreSQL  

---

## Tech Stack
- **Frontend**: React (Vite), TailwindCSS, Axios  
- **Backend**: Node.js, Express, OpenAI API integration  
- **Database**: PostgreSQL (via Docker)  
- **Dev Tools**: Docker, Git, Codespaces  

---

## Getting Started

### Prerequisites
- Node.js (v18+)  
- Docker installed (for PostgreSQL)  
- OpenAI API key  

### Clone the repository
```bash
git clone https://github.com/yourusername/ai-chatbot-demo.git
cd ai-chatbot-demo

```bash
docker run --name chatbot-db -e POSTGRES_PASSWORD=postgres -p 5432:5432 -d postgres

```bash
cd backend
npm install
npm run dev

```bash
cd frontend
npm install
npm run dev
