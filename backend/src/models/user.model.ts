// const mongoose = require("mongoose");
// const { stringify } = require("nodemon/lib/utils");

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

import { User } from '../entities/user.entity';
import {UserConfig} from '../utilities/interface/user';
import { connectionSource } from "../config/psqlConfig"

export default class UserModel {

    // 新增使用者
    public async add(userData: UserConfig) {
        const user = new User();
        Object.assign(user, userData);
        await connectionSource.manager.save(user)
    }

    // 查詢使用者
    public async getUsers() {
        return User.find({
            select: {
                id: true,
                Username: true,
                Password: true,
            },
        });
    }
     // 根據id 查詢使用者
    public async getById(id: number) {
        return User.findOneByOrFail({ id });
    }
    
    // 刪除id 查詢使用者
    public async deleteById(id: number) {
        await User.createQueryBuilder().delete().from(User).where("id = :id", { id: id }).execute();;
    }

}