import { DataSource } from "typeorm"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "user",
    password: "password",
    database: "appointments",
    synchronize: false,
    logging: true,
    entities: ["./src/models/*.ts"], 
    migrations: ["./src/database/migrations/*.ts"],
});