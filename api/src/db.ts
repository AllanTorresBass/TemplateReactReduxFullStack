//generar nuestra conexion con la db!
require("dotenv").config();

import { Sequelize } from "sequelize-typescript";
//var env = process.env.NODE_ENV || 'development';
const { DB_NAME, DB_USER, DB_PASSWORD, DB_HOST } = process.env;
export const sequelize =
  process.env.NODE_ENV === "production"
    ? new Sequelize({
        dialect: "postgres",
        host: DB_HOST,
        port: 5432,
        database: DB_NAME,
        password: DB_PASSWORD,
        username: DB_USER,
        storage: ":memory:",
        models: [__dirname + "/models"],
        pool: {
          max: 3,
          min: 1,
          idle: 10000,
        },
        dialectOptions: {
          ssl: {
            require: true,
            ssl: "Amazon RDS",
            // Ref.: https://github.com/brianc/node-postgres/issues/2009
            rejectUnauthorized: false,
          },
          keepAlive: true,
        },
        ssl: true,
      })
    : new Sequelize({
        dialect: "postgres",
        database: process.env.DB_NAME,
        password: process.env.DB_PASSWORD,
        username: process.env.DB_USER,
        storage: ":memory:",
        models: [__dirname + "/models"],
      });

// export const sequelize = new Sequelize({
// 	dialect: 'postgres',
// 	 database: process.env.DB_NAME,
//      password: process.env.DB_PASSWORD,
//     username: process.env.DB_USER,
// 	storage: ':memory:',
// 	models: [__dirname + '/models'],
// });

// 	{
// 		development: {
// 	dialect: 'postgres',
// 	 database: process.env.DB_NAME,
//      password: process.env.DB_PASSWORD,
//     username: process.env.DB_USER,
// 	storage: ':memory:',
// 	models: [__dirname + '/models'],
// 	},  production: {
// 		username: process.env.DB_USER,
// 		password: process.env.DB_PASSWORD,
// 		database: process.env.DB_NAME,
// 		host:  process.env.API_HOST,
// 		dialect:'postgres',
// 		operatorsAliases: false,
// 		use_env_variable:process.env.CORS
// 	  }
// }
