import { Router } from 'express';
import TraineeController from './controller';
import validationHandler from '../../libs/routes/validationHandler';
import Validation from './validation';
import { authMiddleWare } from '../../libs/routes';

const traineeRouter = Router();
traineeRouter.route('/')
    .get(authMiddleWare('getUsers', 'all'), validationHandler(Validation.get), TraineeController.get)
    .post(authMiddleWare('getUsers', 'write'), validationHandler(Validation.create), TraineeController.create)
    .put(authMiddleWare('getUsers', 'write'), validationHandler(Validation.update), TraineeController.update);

traineeRouter.route('/:id')
.delete((req, res, next) => { console.log('------inside first md----'); next(); }, authMiddleWare('getUsers', 'delete'), validationHandler(Validation.delete), TraineeController.delete);


export default traineeRouter;
