import { Router } from "express";
import userController from "./user.controller";

const userRouter = Router();

userRouter.get("/users", userController.getUsers);

userRouter.get(
  "/users/:id",
  userController.getUserById,
);
userRouter.post(
  "/users",
  userController.createUser,
);
userRouter.put(
  "/users/:id",
  userController.updateUser,
);
userRouter.delete(
  "/users/:id",
  userController.deleteUser,
);

export default userRouter;
