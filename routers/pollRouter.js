import { Router } from 'express';
import { getPollController } from '../controllers/getPollController.js';
import { postPollController } from '../controllers/postPollController.js';
import pollMiddleware from '../middlewares/pollMiddleware.js';

const pollRouter = Router()

pollRouter.post('/poll', pollMiddleware, postPollController)
pollRouter.get('/poll', getPollController)

export default pollRouter

