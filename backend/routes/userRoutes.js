import express from "express";
import { getUser, getUsers, removeUser } from "../controllers/userController.js";
import protect from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get('/', protect, getUsers);

router.get('/:id', protect, getUser);

router.delete('/:id', protect, removeUser);

export default router;