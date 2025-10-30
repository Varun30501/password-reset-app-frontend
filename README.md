
---

# 🧩 FRONTEND — `README.md`

```markdown
# 💻 Password Reset App — Frontend (React + Tailwind CSS)

This is the **frontend interface** for the Password Reset App.  
It connects with the backend (Node + Express) to provide a seamless user experience.

---

### MAILBOX to be used to check the mails being sent - testmail30501@getairmail.com
## To access the inbox
## Step 1: Go to inboxes.com
## Step 2: Click on get new inbox
## Step 3: Then enter testmail30501 as username and select the getairmail.com for mailbox domain.
## Step 4: After doing till step 3 you will see the inbox which is used for this Password Reset testing and can send reset mails for your accounts which you have registered through the app.

### IMPORTANT - Please wait a while since the server might be inactive it will take some time to load up and then only the action will be taken. It will take a maximum of 30 seconds and once the email is sent you will receive it in the mailbox and a pop-up which tells that mail has been sent successfully.

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