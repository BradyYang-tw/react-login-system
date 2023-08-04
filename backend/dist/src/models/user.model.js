"use strict";
// const mongoose = require("mongoose");
// const { stringify } = require("nodemon/lib/utils");
Object.defineProperty(exports, "__esModule", { value: true });
// const userSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true,
//     minLength: 6,
//     maxLength: 255,
//   },
//   googleID: {
//     type: String,
//   },
//   data: {
//     type: Date,
//     default: Date.now,
//   },
//   thumbnail: {
//     type: String,
//   },
//   // local login
//   email: {
//     type: String,
//   },
//   password: {
//     type: String,
//     required: true,
//     maxLength: 1024,
//   },
// });
// const User = mongoose.model("User", userSchema);
// module.exports = User;
const user_entity_1 = require("../entities/user.entity");
const psqlConfig_1 = require("../config/psqlConfig");
class UserModel {
    // 新增使用者
    async add(userData) {
        const user = new user_entity_1.User();
        Object.assign(user, userData);
        await psqlConfig_1.connectionSource.manager.save(user);
    }
    // 查詢使用者
    async getUsers() {
        return user_entity_1.User.find({
            select: {
                id: true,
                Username: true,
                Password: true,
            },
        });
    }
    // 根據id 查詢使用者
    async getById(id) {
        return user_entity_1.User.findOneByOrFail({ id });
    }
    // 刪除id 查詢使用者
    async deleteById(id) {
        await user_entity_1.User.createQueryBuilder().delete().from(user_entity_1.User).where("id = :id", { id: id }).execute();
        ;
    }
}
exports.default = UserModel;
//# sourceMappingURL=user.model.js.map