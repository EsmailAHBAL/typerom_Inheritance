import { keyboard } from './entity/inheritance/Keyboard';
import { User } from './entity/User';
import { Admin } from './entity/Admin';
import { Person } from './entity/Person';
import { Screen } from './entity/inheritance/Screen';

import "reflect-metadata"
import { DataSource } from "typeorm"
import { Printer } from './entity/inheritance/Printer';

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "admin",
    password: "Passw0rd",
    database: "db_orm",
    synchronize: true,
    logging: false,
    entities: [Person,Admin,User,Screen,Printer,keyboard],
    migrations: [],
    subscribers: [],
})
