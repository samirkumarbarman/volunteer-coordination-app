import express from "express";
import cors from "cors";
import authRouter from "./routes/authRoutes.js";
import userRouter from "./routes/userRoutes.js";
import taskRouter from "./routes/taskRoutes.js";
import { notFound, errorHandler } from "./middlewares/errorHandler.js";

const app = express();

app.use(express.json());

app.use(cors());

app.use('/api/auth', authRouter);

app.use('/api/user', userRouter);

app.use('/api/task', taskRouter);


app.use(notFound);
app.use(errorHandler);

export default app;