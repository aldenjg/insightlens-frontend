# InsightLens Frontend

This is the frontend application for **InsightLens**, a cloud-based document management and classification platform. Built using **React**, **Vite**, and **Tailwind CSS**, it offers a clean and responsive UI for uploading, searching, and viewing documents.

The frontend connects to the [InsightLens backend](https://github.com/aldenjg/insightlens).

---

## ⚙️ Tech Stack

- **React** – Functional components with hooks
- **Vite** – Next-gen frontend tooling
- **Tailwind CSS** – Utility-first styling
- **ESLint** – Code linting with modern config

---

## 🔍 Features

- Drag-and-drop document upload via `UploadForm`
- File preview, search, and display via `ResultsList`
- Real-time interaction with FastAPI backend
- Modular components and clean layout
- Lightning-fast development with Vite

---

## 📁 Project Structure

```
insightlens-frontend/
├── public/
│   ├── icon.svg
│   └── vite.svg
├── src/
│   ├── assets/
│   │   └── react.svg
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Navigation.jsx
│   │   ├── ResultsList.jsx
│   │   ├── SearchBox.jsx
│   │   └── UploadForm.jsx
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── postcss.config.js
├── tailwind.config.js
└── vite.config.js
```

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/aldenjg/insightlens-frontend.git
cd insightlens-frontend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Create a .env file

```bash
VITE_API_URL=http://localhost:8000
```

### 4. Run the development server

```bash
npm run dev
```

---

## 🛠 Build for Production

```bash
npm run build
```

---

## 🔗 Related Project

**Backend API:** [insightlens-backend](https://github.com/aldenjg/insightlens)

---

## 📬 Contact

Developed by **Alden JG**

For feedback, feature requests, or contributions — feel free to reach out!
