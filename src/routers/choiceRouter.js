import { Router } from 'express';
import { postChoiceController } from '../controllers/choiceController.js';
import choiceMiddleware from '../middlewares/choiceMiddleware.js';

const choiceRouter = Router()

choiceRouter.post('/choice', choiceMiddleware, postChoiceController)

export default choiceRouter