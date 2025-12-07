# 🎓 NextAcademy – Online Learning Platform

<div align="center">

![React](https://img.shields.io/badge/React-18-blue.svg)
![Node.js](https://img.shields.io/badge/Node.js-20-green.svg)
![MongoDB](https://img.shields.io/badge/MongoDB-6.0-brightgreen.svg)
![License](https://img.shields.io/badge/License-MIT-yellow.svg)

**A modern online learning platform to explore courses, access books, and interact with AI-assisted learning.**

[Features](#-core-features) • [Installation](#-installation) • [Usage](#-how-it-works) • [Tech Stack](#-technology-stack) • [Contributing](#-contributing)

</div>

---

## 📖 Overview

**NextAcademy** is a full-stack educational platform that allows users to browse courses, read books, and interact with a smart AI chatbot for enhanced learning. The platform includes secure user authentication, video uploads, and a responsive, modern UI.

<div align="center">

![Homepage](https://via.placeholder.com/700x350.png?text=NextAcademy+Homepage)

![Courses Page](https://via.placeholder.com/700x350.png?text=Courses+Page)

</div>

---

## 🎯 Core Features

### 👤 1. User Authentication
- Secure **Sign-up and Sign-in** system.
- Users can upload their profile picture later.
- Passwords are stored securely in MongoDB.

---

### 📚 2. Courses & Books
- Browse and access a variety of educational courses.
- Integrated with a book library for easy learning.

<div align="center">

![Courses Page](https://via.placeholder.com/700x350.png?text=Courses+Page)

</div>

---

### 🎥 3. Video Integration
- Upload and display videos using **Streamable Storage**.
- Video URLs are stored in MongoDB for seamless access.
- Supports multiple videos for courses.

<div align="center">

![Video Page](https://via.placeholder.com/700x350.png?text=Video+Integration)

</div>

---

## 🛠️ Installation

### Prerequisites
- Node.js 18+
- npm or yarn
- MongoDB
- Firebase project for video storage

### Quick Start

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/NextAcademy.git
cd NextAcademy
```
2. **Install backend dependencies**
```bash
cd backend
npm install
```
3. **Install frontend dependencies**
```bash
cd ../frontend
npm install
```
4. **Run the project**
```bash
# Backend
cd backend
npm start

# Frontend
cd ../frontend
npm run dev
```
5. Open your browser at http://localhost:5173 (or the port shown in terminal).


## 🔧 Environment Variables

Create a .env file in the backend folder and add:
```bash
MONGO_URI=your_mongodb_connection_string
PORT=your_port_no.
SECRET_KEY=your_secret_key
```


---

## 📌 How It Works

1. **User Authentication**
Users can register and login securely.

2. **Browse Courses & Books**
Explore courses and read books.

3. **Upload & Watch Videos**
Admin can upload videos via Streamable Storage.
Students can view videos seamlessly.


---


## ⚙️ Technology Stack

| Component      | Technology                     |
| -------------- | ------------------------------ |
| **Frontend**   | React.js, Tailwind CSS, Vite   |
| **Backend**    | Node.js, Express.js            |
| **Database**   | MongoDB                        |
| **Storage**    | Firebase Storage               |
| **AI Chatbot** | Custom AI Integration          |
| **Deployment** | Local / Cloud Deployment Ready |


---

## 🔮 Future Enhancements

We're constantly working to improve NextAcademy. Here's what's on the roadmap:

- [ ] 👨‍💻 **Online Test** – Practice test to check your learnings
- [ ] 📱 **Mobile Companion App** – Cross-platform support
- [ ] 🌙 **Dark Mode** – Eye-friendly interface
- [ ] 🎁 **Reward Points** – Points to encourage students

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE)  file for details.

--- 

## 📞 Contact & Support

Found a bug? Have a suggestion? We'd love to hear from you!

- 🐛 [Report Issues](https://github.com/Ritesh000001/NextAcademy/issues)
- 💡 [Request Features](https://github.com/Ritesh000001/NextAcademy/issues/new)
- ⭐ [Star this Repository](https://github.com/Ritesh000001/NextAcademy)

---

 <div align="center">

**If you find NextAcademy helpful, please consider giving it a ⭐!**

Made with ❤️ by Ritesh Singh Kushwaha

</div>

