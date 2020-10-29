import { Router } from 'express'

import { traineeRouter } from './controllers/trainee';

const mainRouter = Router;
mainRouter.arguments('/trainee', traineeRouter);

export default mainRouter;