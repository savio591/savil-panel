import { getRepository } from 'typeorm';
import { hash } from 'bcryptjs';

import User from '../models/user';

interface Request {
  name: string;
  username: string;
  password: string;
}

class CreateUserService {
  public async execute({ name, username, password }: Request): Promise<User> {
    const usersRepository = getRepository(User);

    const checkUserExists = await usersRepository.findOne({
      where: { username },
    });

    if (checkUserExists) {
      throw Error('Nome de usuário já existe.');
    }

    const hashedPassword = await hash(password, 8);

    const user = usersRepository.create({
      name,
      username,
      password: hashedPassword,
    });

    await usersRepository.save(user);

    return user;
  }
}

export default CreateUserService;