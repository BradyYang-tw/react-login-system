"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_model_1 = __importDefault(require("../models/user.model"));
const model = new user_model_1.default();
class UserService {
    async add(userData) {
        console.log('service', userData);
        return model.add(userData);
    }
    async get(id) {
        return model.getById(id);
    }
}
exports.default = UserService;
// export default {
//     add,
//     get,
// };
//# sourceMappingURL=user.service.js.map