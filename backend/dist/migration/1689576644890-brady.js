"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Brady1689576644890 = void 0;
class Brady1689576644890 {
    name = 'Brady1689576644890';
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "Username" character varying NOT NULL, "Password" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "user"`);
    }
}
exports.Brady1689576644890 = Brady1689576644890;
//# sourceMappingURL=1689576644890-brady.js.map