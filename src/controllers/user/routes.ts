import * as express from 'express';
import UserController from './controller';
import authMiddleWare from '../../libs/routes/authMiddleWare';
import { permissions } from '../../libs/routes/Constants';
import validationHandler from '../../libs/routes/validationHandler';
import Validation from './validation';
const userRouter = express.Router();

userRouter.route('/me')
    .get(authMiddleWare('getUsers', 'read'), validationHandler(Validation.get), UserController.profile);
userRouter.route('/login')
    .post( UserController.login);
userRouter.route('/')
    .get(authMiddleWare('getUsers', 'read'), validationHandler(Validation.get), UserController.get)
    .post(authMiddleWare('getUsers', 'write'), validationHandler(Validation.create), UserController.create)
    .put(authMiddleWare('getUsers', 'all'), validationHandler(Validation.update), UserController.update)
    .delete(authMiddleWare('getUsers', 'delete'), validationHandler(Validation.delete), UserController.delete);

userRouter.route('/:id')
    .delete(authMiddleWare('getUsers', 'delete'), validationHandler(Validation.delete), UserController.delete);

export default userRouter;
