# 📚 API Books

A RESTful API developed using **Node.js**, **Express**, **MongoDB**, and **Mongoose**, designed to manage books, authors, and publishers. Ideal for applications that require a complete bibliographic system.

---

## 🧭 Table of Contents

- [📘 Project Overview](#project-overview)
- [✨ Features](#features)
  - [📌 API Routes](#api-routes)
- [🛠️ Frameworks and Design Patterns](#frameworks-and-design-patterns)
- [🚀 Getting Started](#getting-started)
- [👨‍💻 Developer](#developer)
- [📄 License](#license)

---

## 📘 Project Overview

This API was created with the goal of providing a solid foundation for systems that involve book management. The focus is on code organization, route standardization, and efficient integration with a NoSQL database.

---

## ✨ Features

- Full CRUD for books, authors, and publishers
- Data validation with Mongoose
- Custom filters for searching
- Centralized error handling via middleware
- Layered architecture (Controller, Service, Repository)

### 📌 API Routes

#### `/books`
- `GET /books` → Returns all books
- `GET /books/search` → Returns books based on filters
- `GET /books/:bookId` → Returns a book by its ID
- `POST /books` → Creates a new book
- `PUT /books/:bookId` → Updates a book by its ID
- `DELETE /books/:bookId` → Deletes a book by its ID

#### `/authors`
- `GET /authors` → Returns all authors
- `GET /authors/search` → Returns authors based on filters
- `GET /authors/:authorId` → Returns an author by ID
- `POST /authors` → Creates a new author
- `PUT /authors/:authorId` → Updates an author by ID
- `DELETE /authors/:authorId` → Deletes an author by ID

#### `/publisher`
- `GET /publisher` → Returns all publishers
- `GET /publisher/search` → Returns publishers based on filters
- `GET /publisher/:publisherId` → Returns a publisher by ID
- `POST /publisher` → Creates a new publisher
- `PUT /publisher/:publisherId` → Updates a publisher by ID
- `DELETE /publisher/:publisherId` → Deletes a publisher by ID

---

## 🛠️ Frameworks and Design Patterns

- Project structure based on **MVC architecture**
- Layer separation: **Controller**, **Service**, and **Repository**
- **RESTful** route standard
- **Mongoose** for MongoDB integration and data modeling
- **Express.js** as the HTTP server
- **Repository pattern** for persistence abstraction
- Custom middlewares for error handling
- Code linting with **ESLint** + **Prettier**

---

## 🚀 Getting Started

### Requirements

- Node.js `v20.11.0` or higher
- MongoDB (local or remote, MongoDB Atlas recommended)
- `npm` or `yarn` package manager

### Installation

```bash
git clone https://github.com/your-username/api-books.git
cd api-books
npm install
```

### Running the App

```bash
npm run dev
```
The API will be available at http://localhost:3000.
