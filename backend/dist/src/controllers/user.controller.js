"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const tsoa_1 = require("tsoa");
const user_service_1 = __importDefault(require("../services/user.service"));
// @Route('/api/users')
// @Tags('User')
// export class UserController extends Controller {
//   /**
//      * 新增使用者
//      * @param requestBody
//      */
//   @SuccessResponse("201", "Created")
//   @Post()
//   public async add(@Body() requestBody: UserConfig): Promise<void> {
//     // this.setStatus(201); // set return status 201
//     // const { name, email } = req.body;
//     // const userData = { name, email };
//     // res.json(await UserService.add(userData));
//     console.log('requestBody', requestBody);
//     UserService.add(requestBody);
//     return;
//   }
// }
const service = new user_service_1.default();
let UserController = exports.UserController = class UserController extends tsoa_1.Controller {
    async add(requestBody) {
        this.setStatus(201); // set return status 201
        service.add(requestBody);
        return;
    }
    async getUsers() {
        return service.getUsers();
    }
    async getById(userId) {
        // @Query() Username?: string
        return service.getUserById(userId);
    }
    async updateById(userId, requestBody) {
        this.setStatus(201); // set return status 201
        service.updateUserById(userId, requestBody);
        return;
    }
    async deleteUserById(userId) {
        this.setStatus(201); // set return status 201
        service.deleteUserById(userId);
        return;
    }
};
__decorate([
    (0, tsoa_1.Post)(),
    __param(0, (0, tsoa_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "add", null);
__decorate([
    (0, tsoa_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getUsers", null);
__decorate([
    (0, tsoa_1.SuccessResponse)("200", "Success Retrive") // Custom success response
    ,
    (0, tsoa_1.Get)("{userId}"),
    __param(0, (0, tsoa_1.Path)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getById", null);
__decorate([
    (0, tsoa_1.Post)("{userId}"),
    __param(0, (0, tsoa_1.Path)()),
    __param(1, (0, tsoa_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "updateById", null);
__decorate([
    (0, tsoa_1.Post)("delete/{userId}"),
    __param(0, (0, tsoa_1.Path)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "deleteUserById", null);
exports.UserController = UserController = __decorate([
    (0, tsoa_1.Route)("api/users")
], UserController);
//# sourceMappingURL=user.controller.js.map