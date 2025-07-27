# PR-Mysql-Node.js

A simple Node.js CRUD application using Express, MySQL, and EJS templating. This project allows you to add, view, edit, delete, and search users by email.

Deployment Link :- https://node-js-sql-crud-pr.onrender.com

## Features
- Add new users (email, password)
- View all users
- Edit user details
- Delete users
- Search users by email

## Technologies Used
- Node.js
- Express.js
- MySQL
- EJS (Embedded JavaScript Templates)
- CSS (for basic styling)

## Project Structure
```
PR-Mysql-Node.js/
│
├── config/
│   └── db.js           # Database connection configuration
│
├── public/
│   └── css/
│       └── style.css   # Stylesheet
│   └── assets/         # Static assets (images, etc.)
│
├── views/              # EJS templates
│   ├── index.ejs
│   ├── viewdata.ejs
│   ├── edit.ejs
│   └── header.ejs
│
├── index.js            # Main server file
├── init.sql            # SQL script to initialize the database
├── package.json        # Project dependencies and scripts
```

## Setup Instructions

1. **Clone the repository**
   ```
   git clone <repo-url>
   cd PR-Mysql-Node.js
   ```

2. **Install dependencies**
   ```
   npm install
   ```

3. **Set up the MySQL database**
   - Create a MySQL database (e.g., `usersdb`).
   - Run the `init.sql` script to create the `users` table:
     ```
     mysql -u <username> -p < usersdb < init.sql
     ```
   - Update the database credentials in `config/db.js` as needed.

4. **Start the server**
   ```
   node index.js
   ```
   The server will run at [http://localhost:6969](http://localhost:6969)

## Usage
- Visit `/` to add a new user.
- Visit `/viewdata` to see all users, edit, delete, or search by email.

## License
This project is for educational purposes.
