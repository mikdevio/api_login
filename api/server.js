import express from "express";

import apiRouter from "./routes/index.js";
import userRouter from "./routes/user.js";


const app = express();

const PORT = 4500;

app.use("/", apiRouter);
app.use("/user", userRouter);

app.listen(PORT, () => {
    console.log(`API Rest ready on http://localhost:${PORT}`);
});