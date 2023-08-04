"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_model_1 = __importDefault(require("../models/user.model"));
const model = new user_model_1.default();
class UserService {
    async add(userData) {
        // Password base64加密
        const buffer = Buffer.from(userData.Password, 'utf-8');
        userData.Password = buffer.toString('base64');
        return model.add(userData);
    }
    async getUsers() {
        return model.getUsers();
    }
    async getUserById(id) {
        const userData = await model.getById(id);
        // base64 decode
        // 將 base64 字串轉換成 Buffer
        const buffer = Buffer.from(userData.Password, 'base64');
        // 將 Buffer 轉換成原始的字串
        const decodedString = buffer.toString('utf-8');
        userData.Password = decodedString;
        return userData;
    }
    async updateUserById(id, userData) {
        const preUserData = await model.getById(id);
        console.log("preUserData", preUserData);
        // base64 encode
        const buffer = Buffer.from(userData.Password, 'utf-8');
        userData.Password = buffer.toString('base64');
        return model.add({ ...preUserData, ...userData });
    }
    async deleteUserById(id) {
        await model.deleteById(id);
    }
}
exports.default = UserService;
// export default {
//     add,
//     get,
// };
//# sourceMappingURL=user.service.js.map