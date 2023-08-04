"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// import { celebrate } from 'celebrate';
// import { isAuthorized } from '../middleware/passport';
// import validate from '../validations/user.validation';
// import {UserController} from '../controllers/user.controller';
const user_controller_1 = require("../controllers/user.controller");
const router = express_1.default.Router();
// router.param('id', ctrl.load);
const controller = new user_controller_1.UserController();
router.route('/').get(function (req, res, next) {
    res.send('Hello World!');
    res.end();
});
// router.route('/').post(isAuthorized, celebrate(validate.add), UserController.add);
router.route('/').post(controller.add);
// router.route('/:id').get(UserController.get)
// router.route('/').post(isAuthorized, celebrate(validate.add), UserController.prototype.add);
// router.route('/').post(isAuthorized, celebrate(validate.add), function(req, res, next) {
//     console.log('Is Brady');
//     res.send('Good');
// });
exports.default = router;
//# sourceMappingURL=user.route.js.map