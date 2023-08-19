import { Router } from "express";
import { authRouter } from "./modules/auth/routes";

const router = Router();

router.use("/auth", authRouter);

export { router };
