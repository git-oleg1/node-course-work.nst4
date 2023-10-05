import { TASKS_REPOSITORY } from 'src/constants';
import { Task } from './entities/task.entity';

export const tasksProviders = [
  {
    provide: TASKS_REPOSITORY,
    useValue: Task,
  },
];
