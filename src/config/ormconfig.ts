import { DataSource } from "typeorm";

const source = new DataSource({
  type: 'postgres',
  host: process.env.DATABASE_HOST,
  port: Number(process.env.DATABASE_PORT),
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  entities: ["dist/entities/**/*.entity.js"],
  migrations: ["dist/migrations/**/*.js"]
});

export default source;
