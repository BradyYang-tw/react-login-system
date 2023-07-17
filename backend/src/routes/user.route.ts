import express, { Router } from 'express';
// import { celebrate } from 'celebrate';
// import { isAuthorized } from '../middleware/passport';
// import validate from '../validations/user.validation';
// import {UserController} from '../controllers/user.controller';
import {UserController} from '../controllers/user.controller';

const router: Router = express.Router();
// router.param('id', ctrl.load);

const controller = new UserController();

router.route('/').get(function (req, res, next) {
    res.send('Hello World!');
    res.end();
})
// router.route('/').post(isAuthorized, celebrate(validate.add), UserController.add);
router.route('/').post(
    controller.add
);
// router.route('/:id').get(UserController.get)
// router.route('/').post(isAuthorized, celebrate(validate.add), UserController.prototype.add);
// router.route('/').post(isAuthorized, celebrate(validate.add), function(req, res, next) {
//     console.log('Is Brady');
//     res.send('Good');
// });

export default router;