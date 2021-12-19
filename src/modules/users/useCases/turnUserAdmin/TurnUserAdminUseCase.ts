import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    const user = this.usersRepository.findById(user_id);

    if (!user)
      throw Object.assign(new Error("User does not exist"), { status: 404 });

    return this.usersRepository.turnAdmin(user);
  }
}

export { TurnUserAdminUseCase };
