import express from "express";

import * as userController from "../controllers/user.js";

const router = express.Router();

router.route("/register")
    .post(userController.postRegister);

router.route("/login")
    .post(userController.postLogin);

router.route("/logout")
    .get(userController.getLogout);

export default router;