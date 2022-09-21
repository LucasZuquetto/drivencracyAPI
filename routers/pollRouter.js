import { Router } from 'express';
import { postPollController } from '../controllers/postPollController.js';
import pollMiddleware from '../middlewares/pollMiddleware.js';

const pollRouter = Router()

pollRouter.post('/poll', pollMiddleware, postPollController)

export default pollRouter

