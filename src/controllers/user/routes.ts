import * as express from 'express';
import UserController from './controller';
import authMiddleWare from '../../libs/routes/authMiddleWare';
import { permissions } from '../../libs/routes/Constants';
import validationHandler from '../../libs/routes/validationHandler';
import Validation from './validation';
const UserRouter = express.Router();

UserRouter.route('/')
.get( UserController.get)
.post( UserController.create)
.put( UserController.update)
.delete( UserController.delete);

UserRouter.route('/me')
.get(authMiddleWare ( permissions.getUsers, 'read' ), UserController.me);

UserRouter.route('/login')
.post( validationHandler ( Validation.login) , UserController.login );

export default UserRouter;


