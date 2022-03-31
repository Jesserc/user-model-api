import express from "express";
const router = express.Router();

import {
	registerUser,
	users,
	updateUser,
	deleteUser,
} from "../controllers/authControllers.js";

router.route("/registerUser").post(registerUser);
router.route("/users").get(users);
router.route("/updateUser/:id").patch(updateUser).post(registerUser);
router.route("/deleteUser/:id").delete(deleteUser);

export default router;
