Certainly! Here's the complete README file for your MERN Bookstore project:

---

# MERN Bookstore Project

## Project Description

This project is a comprehensive MERN stack web application for a bookstore, featuring user authentication, book management, and order processing.

## Key Features frontend

- **User Authentication**: Secure user login and registration using JWT tokens.
- **Book Management**: CRUD operations for managing books.
- **Shopping Cart**: Fully functional shopping cart to add and manage book orders.
- **Order Processing**: Place and manage orders with status tracking.
- **Favorites**: Ability for users to mark favorite books.
- **Admin Panel**: Admin functionality to manage books and view user data.
- **Responsive Design**: Ensured responsive design for accessibility across various devices.

## Folder Structure

- **backend/**: Node.js and Express.js server files.
  - **models/**: MongoDB models.
    - **book.js**: Schema for the Book model.
    - **order.js**: Schema for the Order model.
    - **user.js**: Schema for the User model.
  - **routes/**: Express.js routes.
    - **book.js**: Routes for managing books.
    - **cart.js**: Routes for managing user shopping cart.
    - **favorite.js**: Routes for managing user favorites.
    - **order.js**: Routes for managing orders.
    - **user.js**: Routes for user management.
    - **userAuth.js**: Authentication middleware.
- **frontend/**: React.js frontend files.
  - **public/**: Public assets and HTML files.
  - **src/**: Source code for React components and Redux state management.

## Key Technologies Used

- **Frontend**: React.js, Redux Toolkit, Axios, Tailwind CSS, React Router.
- **Backend**: Node.js, Express.js.
- **Database**: MongoDB.
- **Authentication**: JWT (JSON Web Tokens).
- **Deployment**: Render for frontend and backend hosting.

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.
- MongoDB database set up and running.

### Installation

1. **Clone the repository:**

   ```bash
   git clone <repository_url>
   cd frontend   // Navigate to the frontend folder
   npm install   // Install frontend dependencies
   cd ../backend // Navigate to the backend folder
   npm install   // Install backend dependencies
   ```

2. **Set up environment variables:**

   Create a `.env` file in the `backend` folder and add the following:

   ```env
   PORT=5000
   MONGO_URI=<your_mongodb_uri>
   JWT_SECRET=<your_jwt_secret>
   ```

3. **Run the application:**

   - Start the backend server:

     ```bash
     node app.js
     ```

   - Start the frontend:

     ```bash
     cd ../frontend
     npm run dev
     ```

4. **Access the application:**

   Open [http://localhost:3000](http://localhost:3000) to view the application in the browser.

## API Endpoints

### Book Routes

- **POST** `/api/book/add-book`: Add a new book (Admin access required).
- **PUT** `/api/book/update-book`: Update a book (Admin access required).
- **DELETE** `/api/book/delete-book`: Delete a book (Admin access required).
- **GET** `/api/book/get-all-books`: Get all books.
- **GET** `/api/book/get-all-books?page=1&limit=10`: Get all books with pagination.
- **GET** `/api/book/get-recent-books`: Get recently added books.
- **GET** `/api/book/get-book-by-id/:id`: Get a book by ID.

### Cart Routes

- **PUT** `/api/cart/add-to-cart`: Add a book to the user's cart.
- **GET** `/api/cart/get-user-cart`: Get the user's cart.
- **PUT** `/api/cart/remove-from-cart/:bookid`: Remove a book from the user's cart.

### Favorites Routes

- **PUT** `/api/favorite/add-to-favorite`: Add a book to the user's favorites.
- **GET** `/api/favorite/get-favorite-books`: Get the user's favorite books.
- **PUT** `/api/favorite/remove-from-favorite`: Remove a book from the user's favorites.

### Order Routes

- **POST** `/api/order/place-order`: Place an order.
- **GET** `/api/order/get-order-history`: Get the user's order history.
- **GET** `/api/order/get-all-orders`: Get all orders (Admin access required).
- **PUT** `/api/order/update-status/:id`: Update order status (Admin access required).

### User Routes

- **POST** `/api/user/sign-up`: Register a new user.
- **POST** `/api/user/login`: Login and generate JWT token.
- **GET** `/api/user/getUserData`: Get user profile data.
- **PUT** `/api/user/update-user-address`: Update user address.



## Acknowledgments

- Special thanks to [Render](https://render.com) for hosting the frontend and backend of this project.


