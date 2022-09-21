import { Router } from "express";
import pollRouter from "./pollRouter.js";
import choiceRouter from "./choiceRouter.js";
import choiceVoteRouter from './choiceVoteRouter.js';

const router = Router();

router.use(pollRouter);
router.use(choiceRouter);
router.use(choiceVoteRouter)

export default router;
