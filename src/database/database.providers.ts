import { Sequelize } from 'sequelize-typescript';
import {ConfigService} from '@nestjs/config'
import { SEQUELIZE } from 'src/constants';
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
      sequelize.addModels([]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
