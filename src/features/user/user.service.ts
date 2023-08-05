import {
  DeleteResult,
  Repository,
} from "typeorm";
import { User } from "./user.entity";
import { AppDataSource } from "../../core/db/data_source";

/**
 * Service for the User feature
 */
class UserService {
  private userRepository: Repository<User> =
    AppDataSource.getRepository(User);

  /**
   * Creates a new user
   * @param name - name of the user
   * @param email - email of the user
   * @returns - the created user
   */
  async createUser(
    name: string,
    email: string,
  ): Promise<User> {
    const user = new User();
    user.name = name;
    user.email = email;
    return this.userRepository.save(user);
  }

  /**
   * Gets all users
   * @returns - all users
   */
  async getUsers(): Promise<User[]> {
    return this.userRepository.find();
  }

  /**
   * Gets a user by id
   * @param id - id of the user
   * @returns - the user with the given id
   */
  async getUserById(
    id: number,
  ): Promise<User | null> {
    return this.userRepository.findOne({
      where: { id: id },
    });
  }

  /**
   * Updates a user
   * @param id - id of the user
   * @param name - name of the user
   * @param email - email of the user
   * @returns - the updated user
   */
  async updateUser(
    id: number,
    name: string,
    email: string,
  ): Promise<User | undefined> {
    const user: User | null =
      await this.userRepository.findOne({
        where: { id: id },
      });
    if (!user) {
      return undefined;
    }
    user.name = name;
    user.email = email;
    return this.userRepository.save(user);
  }

  /**
   * Deletes a user
   * @param id - id of the user
   * @returns - true if the user was deleted, false otherwise
   */
  async deleteUser(id: number): Promise<boolean> {
    const result: DeleteResult =
      await this.userRepository.delete(id);
    return result.affected === 1;
  }
}

export default new UserService();
