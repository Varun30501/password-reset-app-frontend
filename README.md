
---

# 🧩 FRONTEND — `README.md`

```markdown
# 💻 Password Reset App — Frontend (React + Tailwind CSS)

This is the **frontend interface** for the Password Reset App.  
It connects with the backend (Node + Express) to provide a seamless user experience.

---

## ⚙️ Tech Stack

- **React.js** — Frontend library  
- **Tailwind CSS** — Modern utility-first UI styling  
- **Axios** — For API requests  
- **React Router v6** — For navigation  
- **React Toastify** — For success/error notifications  

---

## 🧩 Features

✅ Modern responsive UI  
✅ Login / Register / Forgot / Reset Password pages  
✅ Role-based routing (Admin/User)  
✅ Toast notifications for API responses  
✅ Secure token-based login  
✅ Clean Tailwind layout with overlapping Navbar  
✅ Fully responsive design  

---

## 📁 Folder Structure

password-reset-app-frontend/
│
├── src/
│ ├── components/
│ │ ├── Navbar.jsx
│ │ └── protectedRoute.jsx
│ │
│ ├── pages/
│ │ ├── Login.jsx
│ │ ├── Signup.jsx
│ │ ├── ForgotPassword.jsx
│ │ ├── ResetPassword.jsx
│ │ ├── AdminDashboard.jsx
│ │ └── Home.jsx
│ │
│ ├── utils/
│ │ └── logout.js
│ │
│ ├── api.js # Axios setup
│ ├── App.jsx
│ ├── index.css
│ └── main.jsx
│
├── package.json
└── tailwind.config.js


---

## ⚡ Setup Instructions

### 1️⃣ Move into the frontend folder
```bash
cd password-reset-app-frontend
npm install
npm run dev