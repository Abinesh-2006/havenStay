# 🏨 Hotel Booking System

A responsive Hotel Booking System developed using **ReactJS, Node.js, Express.js, and MySQL**. This application allows users to explore hotels, search and filter available hotels, and view detailed hotel information. It also provides hotel management features to add, update, and delete hotel records.

## 🎥 Project Demo

[▶ Watch Hotel Booking System – Full Project Demo](https://drive.google.com/file/d/1i30jM34nlmBl3fs51aJcvO9MfCod2s9N/view?usp=drive_link)

## 📌 Project Overview

The Hotel Booking System is a full-stack web application designed to simplify hotel information management through an easy-to-use and responsive interface.

The application provides CRUD (Create, Read, Update, Delete) operations for managing hotel details. Users can browse hotel listings, search for hotels by name, filter hotels based on price, and view individual hotel details.

## 🛠️ Technologies Used

### Frontend
- ReactJS
- HTML5
- CSS3
- JavaScript
- React Router DOM
- React Helmet Async
  
### Backend
- Node.js
- Express.js
- REST API

### Database
- MySQL

### Development Tools
- Visual Studio Code
- Git
- GitHub
- MySQL Workbench

## ✨ Features

- **Add Hotels:** Add new hotels with images, descriptions, latitude, longitude, and price.
- **View Hotels:** Display hotel information in an organized card layout.
- **Update Hotels:** Edit existing hotel information.
- **Delete Hotels:** Remove hotel records with a success confirmation.
- **Image Upload:** Upload hotel images with image preview.
- **Search Hotels:** Search hotels using their names.
- **Price Filter:** Filter hotels using minimum and maximum price.
- **Sorting:** Sort hotels based on price (Low to High / High to Low).
- **Pagination:** Navigate through hotel listings page by page.
- **Hotel Details:** View complete information about an individual hotel.
- **Responsive Design:** User-friendly interface for different screen sizes.
- **REST API Integration:** Connect the React frontend with the Express backend.
- **SEO Support:** Dynamic page titles and meta descriptions.

## 📂 Project Structure

```text
Hotel-Booking-System/
│
├── my-react-app/
│   ├── public/
│   │   └── images/
│   │
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── HotelCard.jsx
│   │   │   ├── HotelList.jsx
│   │   │   └── FilterSidebar.jsx
│   │   │
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── AddHotels.jsx
│   │   │   └── HotelDetails.jsx
│   │   │
│   │   ├── services/
│   │   │   └── api.js
│   │   │
│   │   ├── App.jsx
│   │   ├── App.css
│   │   └── main.jsx
│   │
│   └── package.json
│
├── hotel-backend/
│   ├── server.js
│   ├── package.json
│   └── ...
│
└── README.md
```

## ⚙️ Installation and Setup

Follow these steps to run the project on your local machine.

### 1. Clone the Repository

```bash
git clone https://github.com/Abinesh-2006/havenStay
```

### 2. Navigate to the Project Folder

```bash
cd NamlatechProject
```

### 3. Setup Frontend

```bash
cd hotel-frontend
npm install
```

### 4. Setup Backend

Open another terminal:

```bash
cd hotel-backend
npm install
```

### 5. Configure MySQL Database

- Install and start MySQL Server.
- Create the required database.
- Configure your MySQL database credentials in the backend configuration.
- Ensure the required hotels table is created.

### 6. Run the Backend

```bash
npm run dev
```

The backend server runs at:

```text
http://localhost:5000
```

### 7. Run the Frontend

Open another terminal:

```bash
cd my-react-app
npm run dev
```

The frontend application runs at:

```text
http://localhost:5173
```

## 🔗 API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/hotels` | Retrieve all hotels |
| GET | `/api/hotels/:id` | Retrieve a hotel by ID |
| POST | `/api/hotels` | Add a new hotel |
| PUT | `/api/hotels/:id` | Update hotel details |
| DELETE | `/api/hotels/:id` | Delete a hotel |

## 🎯 Project Objective

The main objective of this project is to develop a full-stack web application that demonstrates practical knowledge of frontend development, backend API integration, database connectivity, CRUD operations, and responsive web design.

## 👨‍💻 Developer
**Abinesh P**

- GitHub: [Abinesh-2006](https://github.com/Abinesh-2006)
- LinkedIn: [Abinesh P](https://linkedin.com/in/abinesh-palanivel2206)
- LeetCode: [abinesh_palanivel](https://leetcode.com/u/abinesh_palanivel/)

---

⭐ If you find this project useful, consider giving this repository a star!

**Thank You for Visiting!**
