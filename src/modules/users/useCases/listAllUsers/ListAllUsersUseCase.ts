import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const user = this.usersRepository.findById(user_id);

    if (!user) throw new Error("Invalid user");

    if (!user.admin) throw new Error("Only admins can get a lit of users!");

    return this.usersRepository.list();
  }
}

export { ListAllUsersUseCase };
