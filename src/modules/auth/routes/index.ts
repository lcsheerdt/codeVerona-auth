import { Router } from "express";
import { authenticateUserController } from "../useCases/authenticateUser";

const authRouter = Router();

authRouter.post("/login", (req, res) =>
  authenticateUserController.execute(req, res)
);

export { authRouter };
