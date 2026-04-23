# MERN Item Manager

This is a full-stack MERN (MongoDB, Express, React, Node.js) application for managing items. It allows you to add items with a name, price, and description, and displays them in a list.

## 🚀 Getting Started

To run this project locally, you need to start both the backend server and the frontend React application at the same time.

### 1. Prerequisites
- **Node.js**: Make sure you have Node.js installed (v20+ recommended).
- **MongoDB**: You need MongoDB Compass installed locally OR a MongoDB Atlas cloud account.

### 2. Backend Setup
1. Open a terminal and navigate to the `backend` folder:
   ```bash
   cd backend
   ```
2. Install the required dependencies:
   ```bash
   npm install
   ```
3. Set up your environment variables by checking the `.env` file. It should contain your `MONGO_URI`. (If you are on a restricted lab network, use `mongodb://127.0.0.1:27017/item-manager` to connect to a local database).
4. Start the backend server:
   ```bash
   npm run dev
   ```
   *You should see "MongoDB Connected" and "Server running on port 5000" in the terminal.*

### 3. Frontend Setup
1. Open a **new** terminal window and navigate to the `frontend` folder:
   ```bash
   cd frontend
   ```
2. Install the required dependencies:
   ```bash
   npm install
   ```
3. Start the React development server:
   ```bash
   npm run dev
   ```
4. Open your browser and go to `http://localhost:5173` (or the URL shown in your terminal).

---

## 🛠 Git & GitHub Setup

*Note: Based on your terminal errors, Git is not currently installed on your computer! Before doing anything below, you must [Download and Install Git for Windows](https://git-scm.com/download/win).*

### 1. Initialize Git in the Project
Open a terminal in the main root folder (`d:\mern-item-manager`) and run:
```bash
git init
```

### 2. Add and Commit Your Code
Save all your current files into a Git commit:
```bash
git add .
git commit -m "Initial full-stack MERN application"
```

### 3. Push to GitHub
1. Go to [GitHub.com](https://github.com/) and create a **New Repository**.
2. Do **not** check the boxes to add a README, .gitignore, or license. Keep it completely empty.
3. Copy the commands under the section *"…or push an existing repository from the command line"*. It will look something like this:
```bash
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```
4. Paste and run those commands in your terminal. Your code is now live on GitHub!

### 4. Updating Your Code on GitHub Later
Whenever you make new changes to your files (like when we added the description field) and want to back them up to GitHub, run these three commands in your terminal:
```bash
git add .
git commit -m "Describe your changes here"
git push
```
