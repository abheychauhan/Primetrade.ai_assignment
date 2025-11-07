# ✅ MERN Task Tracker App

**Task Management** application built using the **MERN stack** (MongoDB, Express, React, Node.js) with **JWT authentication using cookies**.  
Users can **register, login, and manage personal tasks** (add, update, mark complete, and delete).  

---

## 🚀 Features

### 🔐 Authentication
- JWT-based user authentication stored securely in **HTTP-only cookies**  
- Protected routes for tasks — each user can access **only their own tasks**

### 🧑‍💻 Task Management
- Add tasks with **title + description**
- Edit tasks inline  
- Mark tasks as completed / uncompleted  
- Delete tasks  
- All CRUD operations connected to MongoDB

### 🛠️ Admin Features
- Admin can view all users
- Admin can delete any user
- When a user is deleted, **all their tasks are automatically deleted**
- Admin Dashboard UI included

### ⚙️ Tech Stack
**Frontend:** React + Axios + Tailwind CSS  
**Backend:** Node.js + Express + MongoDB (Mongoose)  
**Auth:** JWT + Cookies  
**Other:** CORS, dotenv, cookie-parser, bcryptjs  

---



## ⚡ Backend Setup

### 1️⃣ Navigate to the backend
```bash
cd backend
```

### 2️⃣ Install dependencies
```bash
npm install
```

### 3️⃣ Create `.env` file
```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/tasktracker
JWT_SECRET=your_jwt_secret_key
JWT_EXPIRES_IN=7d
```

### 4️⃣ Run the backend
```bash
npm run dev
```

The server should start at:
```
🚀 Server running on port 5000
✅ MongoDB Connected: localhost
```

---

## 💻 Frontend Setup

### 1️⃣ Navigate to the frontend
```bash
cd frontend
```

### 2️⃣ Install dependencies
```bash
npm install
```

### 3️⃣ Start the frontend
```bash
npm run dev
```

Frontend runs by default at:
```
http://localhost:5173
```

---

## 🔄 API Endpoints

### 🔐 Authentication
| Method | Endpoint           | Description             |
|--------|--------------------|-------------------------|
| POST   | `/api/auth/register` | Register new user     |
| POST   | `/api/auth/login`    | Login user & set cookie |
| GET    | `/api/auth/me`       | Get logged-in user info |
| POST   | `/api/auth/logout`   | Logout user (clear cookie) |

### 🧾 Tasks
| Method | Endpoint           | Description             |
|--------|--------------------|-------------------------|
| GET    | `/api/tasks`    | Get all tasks of user   |
| POST   | `/api/tasks`    | Create new task         |
| PUT    | `/api/tasks/:id`| Update existing task    |
| DELETE | `/api/tasks/:id`| Delete a task           |

### 🧑‍💼 Admin Routes
| Method | Endpoint | Description |
|--------|-----------|-------------|
| GET | `/api/admin/users` | Get all users |
| DELETE | `/api/admin/users/:id` | Delete a user (and their tasks) |

---

## 🧰 Common Commands

### Backend
```bash
npm run dev         # Start with nodemon
npm start           # Run normally
```

### Frontend
```bash
npm run dev         # Start React app
npm run build       # Build production files
```

---

## 🧠 Future Enhancements
- Add due dates & priorities  
- Filter by completed / pending  
- Task sharing between users  
- Dark mode toggle  

---

## 💬 Developer
**Abhey Singh**  
