import { Sequelize } from 'sequelize-typescript';

export const sequelize = new Sequelize({
  dialect: 'mysql',
  operatorsAliases: Sequelize.Op as any,
  database: 'workflow',
  username: 'root',
  password: '',
  modelPaths: [__dirname + '/models'],
  pool: {
    max: 10,
    min: 1,
    idle: 10000
  }
});