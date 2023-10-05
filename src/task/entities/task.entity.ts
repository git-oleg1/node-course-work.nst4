import { Table, Column, Model, DataType, BelongsTo, ForeignKey } from 'sequelize-typescript';
import { TaskStatusEnum } from '../enum';
import { User } from 'src/user/entities/user.entity';

@Table({
  tableName: 'tasks',
})
export class Task extends Model<Task> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  title: string;

  @Column({
    type: DataType.ENUM,
    values: Object.values(TaskStatusEnum),
    allowNull: false,
  })
  status: TaskStatusEnum;

  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  })
  userId: number;

  @BelongsTo(() => User)
  user: User;
}
