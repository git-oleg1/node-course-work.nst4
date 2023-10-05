import { Inject, Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { TASKS_REPOSITORY } from 'src/constants';
import { Task } from './entities/task.entity';

@Injectable()
export class TaskService {
  constructor(
    @Inject(TASKS_REPOSITORY)
    private repository: typeof Task
  ) {}

  create(createTaskDto: CreateTaskDto): Promise<Task> {
    return this.repository.create(createTaskDto);
  }

  findAll(): Promise<Task[]> {
    return this.repository.findAll();
  }

  findOne(id: number): Promise<Task> {
    return this.repository.findByPk(id);
  }

  async update(id: number, updateTaskDto: UpdateTaskDto): Promise<Task> {
    const task = await this.findOne(id);
    task.set(updateTaskDto);
    return await task.save();
  }

  async remove(id: number): Promise<boolean> {
    const n = await this.repository.destroy({ where: { id } });
    return n === 1;
  }
}
