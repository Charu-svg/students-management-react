# 🎓 Students Management System (React)

A simple **Students Management Web Application** built using **React.js** that allows users to manage student data with full **CRUD operations (Create, Read, Update, Delete)** on the frontend.

This project was developed as part of a **Full Stack Assignment** where the frontend handles all operations using in-memory state and local JSON data.

---

## 🚀 Live Demo

Frontend Deployment:
(Add your Vercel link here)

Example:

```
https://students-management-react.vercel.app
```

---

## 📂 GitHub Repository

```
https://github.com/Charu-svg/students-management-react
```

---

# ✨ Features

### 📋 Student Table

* Displays list of students with:

  * Name
  * Email
  * Age
  * Actions (Edit / Delete)

### ➕ Add Student

* Form to add a new student
* Validations included:

  * All fields required
  * Email format validation

### ✏️ Edit Student

* Edit button pre-fills student data
* Update student details easily

### ❌ Delete Student

* Delete with confirmation dialog

### 🔍 Search Students

* Search students by **name or email**

### 📊 Excel Download

* Export student data to **Excel file (.xlsx)**

### ⏳ Loading Simulation

* Displays loading state when the app starts

---

# 🛠️ Tech Stack

Frontend:

* React.js
* JavaScript (ES6)
* HTML5
* CSS3

Libraries Used:

* `xlsx` – for Excel export
* `file-saver` – for downloading files

---

# 📁 Project Structure

```
students-management-react
│
├── public
│
├── src
│   ├── components
│   │   ├── StudentForm.js
│   │   ├── StudentTable.js
│   │
│   ├── data
│   │   └── students.js
│   │
│   ├── App.js
│   └── index.js
│
├── package.json
└── README.md
```

---

# ⚙️ Installation & Setup

Clone the repository:

```
git clone https://github.com/Charu-svg/students-management-react.git
```

Navigate to the project folder:

```
cd students-management-react
```

Install dependencies:

```
npm install
```

Run the development server:

```
npm start
```

The app will start at:

```
http://localhost:3000
```

---

# 📦 Deployment

The frontend is deployed using **Vercel**.

Deployment Steps:

1. Push project to GitHub
2. Connect repository to Vercel
3. Deploy automatically

---

# ⭐ Optional Backend (Bonus)

A backend can be implemented using:

* NestJS
* PostgreSQL

to manage student CRUD operations through APIs.

---

# 👨‍💻 Author

Charumathi
GitHub:
https://github.com/Charu-svg

---

# 📄 License

This project is created for educational and assignment purposes.
