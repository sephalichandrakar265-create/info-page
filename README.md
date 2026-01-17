# Real-Time Notification System

## 📌 Problem Statement
Design and implement a scalable notification system that delivers
real-time job alerts, application status updates, and employer messages
while respecting user preferences and tracking delivery status.

---

## ✨ Features
- 🔔 In-app real-time notifications
- ⚡ Priority-based delivery (High / Medium / Low)
- ✅ Read and unread notification tracking
- ⚙️ User notification preferences
- 🗂️ Notification history
- 📊 Unread notification badge count

---

## 🛠️ Tech Stack
**Frontend**
- HTML
- CSS
- JavaScript

**Backend (Designed)**
- Java (Servlets / Spring Boot)
- WebSockets for real-time communication

**Database (Designed)**
- MySQL

---

## 🧠 Backend Architecture
The backend is designed to handle:
- Notification creation and persistence
- User preference validation
- Multi-channel delivery:
  - In-app notifications
  - Email notifications
  - Push notifications
- Real-time delivery using WebSockets

---

## 🗄️ Database Schema
The database schema includes tables for users, notifications,
preferences, and delivery logs.

📄 Schema file: /database/schema.sql
