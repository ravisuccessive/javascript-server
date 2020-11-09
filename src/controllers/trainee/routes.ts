import { Router } from 'express';
import traineeController from './controller';
import validationHandler from '../../libs/routes/validationHandler';
import Validation from './validation';

const traineeRouter = Router();

traineeRouter.route('/')
.get(validationHandler(Validation.get), traineeController.get)
.post(validationHandler(Validation.create), traineeController.create)
.put(validationHandler(Validation.update), traineeController.update)
.delete(validationHandler(Validation.Delete), traineeController.delete);

traineeRouter.route('/:id')
    .delete(validationHandler(Validation.Delete), traineeController.delete);

export default traineeRouter;