import { Router } from 'express';
import { postPollController,getPollController } from '../controllers/PollController.js';
import pollMiddleware from '../middlewares/pollMiddleware.js';

const pollRouter = Router()

pollRouter.post('/poll', pollMiddleware, postPollController)
pollRouter.get('/poll', getPollController)

export default pollRouter

