import { Request, Response } from "express";
import userLogic from "./user.logic";
import { UserDto } from "./user.dto";
import { User } from "./user.entity";

class UserController {
  async getUsers(
    req: Request,
    res: Response,
  ): Promise<void> {
    const users = await userLogic.getUsers();
    const userDtos: UserDto[] = users.map(
      (user: User) => ({
        id: user.id,
        name: user.name,
        email: user.email,
      }),
    );
    res.json(userDtos);
  }

  async getUserById(
    req: Request,
    res: Response,
  ): Promise<void> {
    const id = parseInt(req.params.id, 10);
    const user = await userLogic.getUserById(id);
    if (!user) {
      res
        .status(404)
        .json({ message: "User not found" });
    } else {
      const userDto: UserDto = {
        id: user.id,
        name: user.name,
        email: user.email,
      };
      res.json(userDto);
    }
  }

  async createUser(
    req: Request,
    res: Response,
  ): Promise<void> {
    const { name, email } = req.body;
    const user = await userLogic.createUser(
      name,
      email,
    );
    const userDto: UserDto = {
      id: user.id,
      name: user.name,
      email: user.email,
    };
    res.json(userDto);
  }

  async updateUser(
    req: Request,
    res: Response,
  ): Promise<void> {
    const id = parseInt(req.params.id, 10);
    const { name, email } = req.body;
    const user = await userLogic.updateUser(
      id,
      name,
      email,
    );
    if (!user) {
      res
        .status(404)
        .json({ message: "User not found" });
    } else {
      const userDto: UserDto = {
        id: user.id,
        name: user.name,
        email: user.email,
      };
      res.json(userDto);
    }
  }

  async deleteUser(
    req: Request,
    res: Response,
  ): Promise<void> {
    const id = parseInt(req.params.id, 10);
    const result = await userLogic.deleteUser(id);
    if (!result) {
      res
        .status(404)
        .json({ message: "User not found" });
    } else {
      res.json({ message: "User deleted" });
    }
  }
}

export default new UserController();
