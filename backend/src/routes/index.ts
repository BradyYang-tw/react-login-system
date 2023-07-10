import express, { Router } from 'express';
import usersRouter from './user.route';
const router: Router = express.Router();

router.use('/users', usersRouter);

export default router;