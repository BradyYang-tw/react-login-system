"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectionSource = void 0;
const typeorm_1 = require("typeorm");
console.log(__dirname);
exports.connectionSource = new typeorm_1.DataSource({
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
//# sourceMappingURL=psqlConfig.js.map