# 🗂 Kanban Board – Frontend Engineering Assignment

A simplified **Kanban Board Application** built using **React + Tailwind CSS** with a strong focus on **Optimistic UI Updates, Robust State Management, and Clean User Experience**.

This project demonstrates how to manage asynchronous operations, UI consistency, and rollback mechanisms without using a real backend.

---

## ✨ Features

- 🔐 Mock Authentication (No Backend)
- 💾 Persistent Login using LocalStorage
- 📋 Three Kanban Columns
  - To Do
  - In Progress
  - Done
- ➕ Add Tasks
- 🔄 Move Tasks Between Columns
- ❌ Delete Tasks
- ⚡ Optimistic UI Updates
- ⏳ Mock API Delay (1–2 Seconds)
- 🎲 Random API Failure (20%)
- 🔁 Automatic Rollback on Failure
- 🔔 Toast Error Notifications
- 📱 Responsive & Minimal UI Design

---

## 🧠 Core Engineering Concepts

### Optimistic UI
User actions update the interface instantly without waiting for server response, creating a zero-latency experience.

### Rollback Mechanism
If the simulated API fails, the UI automatically restores the previous state to maintain data consistency.

### Asynchronous Handling
All add, move, and delete actions simulate network delay using Promises and `setTimeout`.

### Centralized State Management
Handled using **Zustand** to efficiently manage complex state updates and rollbacks.

---

## 🛠 Tech Stack

| Technology | Purpose |
|-----------|--------|
| React (Vite) | Frontend Framework |
| Tailwind CSS | Styling & Responsive Layout |
| Zustand | State Management |
| React Hot Toast | Notifications |
| LocalStorage | Authentication Persistence |
| JavaScript | Application Logic |

---

## 📂 Project Structure
```
src/
├─ api/
│  └─ mockApi.js
│
├─ store/
│  └─ taskStore.js
│
├─ pages/
│  ├─ Login.jsx
│  └─ Board.jsx
│
├─ components/
│  ├─ Column.jsx
│  └─ TaskCard.jsx
│
├─ styles/
│  └─ index.css
│
├─ App.jsx
└─ main.jsx
```


---

## ⚙️ Installation & Running

```bash
npm install
npm run dev

---

## 🔐 Authentication Logic

- Accepts any **non-empty username/email**
- Stored in **LocalStorage**
- Page refresh does **not** log out the user
- Logout clears **LocalStorage**

---

## 📡 Mock API Behavior

| Property | Value |
|---------|------|
| Delay | 1–2 Seconds |
| Failure Rate | 20% Random |
| Affected Actions | Add, Move, Delete |
| On Failure | Toast Notification + UI Rollback |

---

## 🔄 Optimistic Update Flow

1. User performs an action (Add / Move / Delete)
2. UI updates immediately
3. Mock API request begins in background
4. If API succeeds → state remains unchanged
5. If API fails → previous state restored automatically

---

## 🎯 Assignment Objectives Achieved

- Data Consistency
- Optimistic Rendering
- Error Recovery & Rollback
- Clean Component Architecture
- Asynchronous State Control
- Responsive UI / UX
- Scalable State Design

---

## 🚀 Possible Future Enhancements

- Real Backend Integration
- Advanced Drag & Drop Animations
- Task Editing & Labels
- User Profiles
- Dark Mode Theme
- Due Dates & Notifications

---

## 👨‍💻 Author

**Nikhil Ranjan**

---

## 📜 License

This project is developed for **Frontend Engineering Assignment Evaluation Purpose Only**.

---
