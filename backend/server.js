// const express = require("express");
// const cors = require("cors");
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
// const db = require("./database.js");

// const app = express();

// app.use(cors());
// app.use(express.json());

// const JWT_SECRET = "your-super-secret-key-that-should-be-in-an-env-file";

// // Signup Route
// app.post("/api/signup", (req, res) => {
//     const { name, email, password } = req.body;

//     if (!name || !email || !password) {
//         return res.status(400).json({ "error": "Please provide all fields." });
//     }

//     const salt = bcrypt.genSaltSync(10);
//     const hashedPassword = bcrypt.hashSync(password, salt);

//     const sql = 'INSERT INTO users (name, email, password) VALUES (?,?,?)';
//     const params = [name, email, hashedPassword];

//     db.run(sql, params, function (err, result) {
//         if (err) {
//             res.status(400).json({ "error": "Email already exists." });
//             return;
//         }
//         res.json({
//             "message": "success",
//             "data": { id: this.lastID }
//         });
//     });
// });

// // Login Route
// app.post("/api/login", (req, res) => {
//     const { email, password } = req.body;

//     const sql = "SELECT * FROM users WHERE email = ?";
//     db.get(sql, [email], (err, user) => {
//         if (err) {
//             res.status(400).json({ "error": err.message });
//             return;
//         }

//         if (!user) {
//             res.status(404).json({ "error": "User not found" });
//             return;
//         }

//         const passwordIsValid = bcrypt.compareSync(password, user.password);

//         if (!passwordIsValid) {
//             res.status(401).json({ "error": "Invalid Password!" });
//             return;
//         }

//         const token = jwt.sign({ id: user.id }, JWT_SECRET, {
//             expiresIn: 86400 // 24 hours
//         });

//         res.status(200).json({
//             "message": "success",
//             "token": token,
//             "user": {
//                 id: user.id,
//                 name: user.name,
//                 email: user.email
//             }
//         });
//     });
// });

// const PORT = 4000;
// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
// });