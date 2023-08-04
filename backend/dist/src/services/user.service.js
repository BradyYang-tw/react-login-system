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
        return model.getById(id);
    }
}
exports.default = UserService;
// export default {
//     add,
//     get,
// };
//# sourceMappingURL=user.service.js.map