import { Request, Response } from "express";
import { AuthenticateUserUseCase } from "./AutheticateUserUseCase";

class AuthenticateUserController {
  private useCase: AuthenticateUserUseCase;
  constructor(useCase: AuthenticateUserUseCase) {
    this.useCase = useCase;
  }

  async execute(req: Request, res: Response) {
    const dto = req.body;
    const result = await this.useCase.execute(dto);

    return res.status(200).json(result);
  }
}

export { AuthenticateUserController };
