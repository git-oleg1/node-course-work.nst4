import { Sequelize } from 'sequelize-typescript';
import {ConfigService} from '@nestjs/config'
import { SEQUELIZE } from 'src/constants';
import { User } from 'src/user/entities/user.entity';
import { Task } from 'src/task/entities/task.entity';
const configService = new ConfigService()

export const databaseProviders = [
  {
    provide: SEQUELIZE,
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'mysql',
        host: configService.get<string>('DATABASE_HOST', 'localhost'),
        port: 3306,
        username: configService.get<string>('DATABASE_USER'),
        password: configService.get<string>('DATABASE_PASSWORD'),
        database: configService.get<string>('DATABASE_NAME'),
      });
      sequelize.addModels([User, Task]);
      await sequelize.sync({ force: true });
      return sequelize;
    },
  },
];
