import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { USERS_REPOSITORY } from 'src/constants';

@Injectable()
export class UserService {
  constructor(
    @Inject(USERS_REPOSITORY)
    private repository: typeof User
  ) {}

  create(createUserDto: CreateUserDto): Promise<User> {
    return this.repository.create(createUserDto);
  }

  findAll(): Promise<User[]> {
    return this.repository.findAll();
  }

  findOne(id: number): Promise<User> {
    return this.repository.findByPk(id);
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<User> {
    const user = await this.findOne(id);
    user.set(updateUserDto);
    return await user.save();
  }

  async remove(id: number): Promise<boolean> {
    const n = await this.repository.destroy({ where: { id } });
    return n === 1;
  }
}
