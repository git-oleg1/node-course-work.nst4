import { Table, Column, Model, DataType, IsEmail, HasMany } from 'sequelize-typescript';
import { GenderEnum } from '../enum';
import { Task } from 'src/task/entities/task.entity';

@Table({
  tableName: 'users',
})
export class User extends Model<User> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @IsEmail
  @Column({
    allowNull: false,
    unique: true,
  })
  email: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  password: string;

  @Column({
    type: DataType.ENUM,
    values: Object.values(GenderEnum),
    allowNull: false,
  })
  gender: GenderEnum;

  @HasMany(() => Task)
  tasks: Task[];
};
