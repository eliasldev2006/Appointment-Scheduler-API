import { DataSource } from "typeorm"
import { Appointment } from "../models/Appointment";
import { User } from "../models/User";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "user",
    password: "password",
    database: "appointments",
    synchronize: false,
    logging: true,
    entities: [Appointment, User],
    migrations: ["./src/database/migrations/*.ts"],
});