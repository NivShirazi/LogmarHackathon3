import { User } from "./user.entity";
import userService from "./user.service";
// private userService = new UserService();

/**
 * Logic for the User feature
 */
class UserLogic {
  // The logic layer uses the service layer

  /**
   * Gets all users
   * @returns - all users
   */
  getUsers = async (): Promise<User[]> => {
    const users: User[] =
      await userService.getUsers();
    return users;
  };

  /**
   * Gets a user by id
   * @param id - id of the user
   * @returns - the user with the given id
   */
  getUserById = async (
    id: number,
  ): Promise<User | null> => {
    const user: User | null =
      await userService.getUserById(id);
    return user;
  };

  /**
   * Creates a new user
   * @param name - name of the user
   * @param email - email of the user
   * @returns - the created user
   */
  createUser = async (
    name: string,
    email: string,
  ): Promise<User> => {
    const user: User =
      await userService.createUser(name, email);
    return user;
  };

  /**
   * Updates a user
   * @param id - id of the user
   * @param name - name of the user
   * @param email - email of the user
   * @returns - the updated user
   */
  updateUser = async (
    id: number,
    name: string,
    email: string,
  ): Promise<User | undefined> => {
    const user: User | undefined =
      await userService.updateUser(
        id,
        name,
        email,
      );
    return user;
  };

  /**
   * Deletes a user
   * @param id - id of the user
   * @returns - true if the user was deleted, false otherwise
   */
  deleteUser = async (
    id: number,
  ): Promise<boolean> => {
    const result: boolean =
      await userService.deleteUser(id);
    return result;
  };
}

export default new UserLogic();
