import express from "express";

import apiRouter from "./routes/index.js";
import userRouter from "./routes/user.js";

import * as settings from "./settings.js";


const app = express();


app.use("/", apiRouter);
app.use("/user", userRouter);

app.listen(settings.PORT, () => {
    console.log(`API Rest ready on http://localhost:${settings.PORT}`);
});