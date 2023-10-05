import { TaskStatusEnum } from '../enum';

export class CreateTaskDto {
  title: string;
  status: TaskStatusEnum;
  userId: number;
}
