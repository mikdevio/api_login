import express from "express";

import * as indexController from "../controllers/index.js";

const router = express.Router();


router.route("/api")
    .get(indexController.getApi);

export default router;