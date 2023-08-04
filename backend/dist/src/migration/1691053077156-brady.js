"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Brady1691053077156 = void 0;
class Brady1691053077156 {
    name = 'Brady1691053077156';
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "Username" character varying NOT NULL, "Password" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "user"`);
    }
}
exports.Brady1691053077156 = Brady1691053077156;
//# sourceMappingURL=1691053077156-brady.js.map