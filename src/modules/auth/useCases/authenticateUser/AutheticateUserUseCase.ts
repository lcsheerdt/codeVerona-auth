import { AuthenticateUserRequestDTO } from "./AuthenticateUserRequestDTO";
import { client } from "../../../../prisma/client";
import { sign } from "jsonwebtoken";

class AuthenticateUserUseCase {
  async execute(dto: AuthenticateUserRequestDTO) {
    const userAlreadyExists = await client.user.findFirst({
      where: {
        username: dto.username,
        password: dto.password,
      },
    });

    if (!userAlreadyExists) {
      throw new Error("usuario e senha incorretos");
    }

    const token = sign({}, "d9781907-36fd-4e5a-b122-b8003d3432e5", {
      subject: userAlreadyExists.id,
      expiresIn: `${15 * 60}s`,
    });

    const result = {
      token,
      user: { id: userAlreadyExists.id },
    };

    return result;
  }
}

export { AuthenticateUserUseCase };
