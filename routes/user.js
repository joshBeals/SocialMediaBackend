import express from "express";
import {
    getUser,
    getUserFreiends,
    addRemoveFriend,
} from "../controllers/users.js";
import { verifyToken } from "../middlewares/verifyToken.js";

const router = express.Router();

// READ
router.get("/:id", verifyToken, getUser);
router.get("/:id/friends", verifyToken, getUserFreiends);

// UPDATE
router.patch("/:id/:friendId", verifyToken, addRemoveFriend);

export default router;
