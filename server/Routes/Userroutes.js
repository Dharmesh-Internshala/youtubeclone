// routes/authRoutes.js
import express from "express"
import { login, register } from "../Controller/UserController"; 

const router = express.Router();

router.post("/register", register);
router.post("/login", login);

module.exports = router;
