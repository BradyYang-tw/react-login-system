import { DataSource } from "typeorm";
console.log(__dirname)
export const connectionSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "admin", 
    password: "admin",  
    database: "BradyDB",
    synchronize: false,
    logging: false,
    entities: ['src/entities/*.entity.{js,ts}'],
    migrations: [ 
        "src/migration/**/*.ts"
    ],
    subscribers: [
        "src/subscriber/**/*.ts"
    ]
});