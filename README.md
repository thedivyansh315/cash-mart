# CashMart: MERN E-Commerce App

This is a full-featured e-commerce web application built using the **MERN stack** (MongoDB, Express.js, React.js, Node.js).

---

## 🚀 Topics Covered

- **Frontend**: HTML5, CSS3 (Flexbox, Grid), React (Components, Hooks, Router, Axios)
- **State Management**: Context API (Store, Reducers, Actions)
- **Backend**: Node.js, Express.js (Web API, JWT, File Upload)
- **Database**: MongoDB, Mongoose (Models, Aggregation)
- **Development Tools**: ESLint, Babel, Git, GitHub
- **Deployment**: Heroku

---

## ⚙️ Run Locally

### 1. Setup Environment Variables

- Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas), create a cluster, and get your connection string.
- Create a `.env` file in the root directory:

```env
MONGODB_URI=your_connection_string
JWT_SECRET=your_jwt_secret
PAYPAL_CLIENT_ID=your_paypal_client_id
```

### 2. Install Dependencies
```
cd backend && npm install
cd ../frontend && npm install
cd ../mern-project1 && npm install
```

### 3. Run the Backend
```
cd backend
npm start
```

### 4. Run the Frontend
```
# In a new terminal
cd frontend
npm start
```

### 5. Seed Database
Visit the following URL to populate sample users and products:
```
http://localhost:5000/api/seed
```

This will return:
- Admin Email: admin@example.com
- Password: 123456


### 6. Admin Login
Open the login page:
```
http://localhost:3000/signin
```
Use the credentials above to sign in.

## 🛠️ How This Web App Was Built
This section outlines the step-by-step development process from scratch.

### ✅ Frontend Setup (React)
1. Create React App

2. Implement product listing and styling

3. Add routing with react-router-dom

4. Fetch product data using Axios

5. Manage global state using Context API

6. Add components: Product, Rating, Loading, Message, etc.

7. Implement authentication: Signin, Signup

8. Add cart and checkout flow
9. Style using react-bootstrap

### ✅ Backend Setup (Node & Express)
1. Initialize project with npm init

2. Use Express to create RESTful APIs

3. Add MongoDB connection via Mongoose

4. Create Models: Product, User, Order

5. Seed database

6. Implement authentication with JWT

7. Build protected and admin-only routes

### ✅ Key Features Implemented
- Add to cart

- User authentication

- Place orders and payments (PayPal)

- User profile and order history

- Admin dashboard

- CRUD for products, users, and orders

- Cloudinary for image upload

- Google Maps for shipping address selection

- Email receipts with Mailgun

- Reviews and ratings

- Full-text search with filters

### ✅ Deployment to Heroku
1. Configure environment variables

2. Connect Heroku to GitHub

3. Serve frontend via Express

4. Use MongoDB Atlas in production

### 🧪 Extra Features
- Sidebar & Search functionality

- Google Maps integration

- Multi-image upload

- Email order receipt via Mailgun

- React 18 upgrade (createRoot)

- Admin product/user/order management


### 📫 Contact
For questions or feedback, please create an issue or contact the repository maintainer.

Let me know if you'd like this saved as a downloadable file.
