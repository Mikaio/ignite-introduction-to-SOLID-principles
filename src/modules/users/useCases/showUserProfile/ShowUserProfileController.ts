import { Request, Response } from "express";

import { ShowUserProfileUseCase } from "./ShowUserProfileUseCase";

class ShowUserProfileController {
  constructor(private showUserProfileUseCase: ShowUserProfileUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = request.params;

    try {
      const user = this.showUserProfileUseCase.execute({ user_id });

      return response.status(200).json(user);
    } catch (err) {
      const status = err.status || 400;
      return response.status(status).json({ error: err.message });
    }
  }
}

export { ShowUserProfileController };
