import { Router } from "express";
import pollRouter from "./pollRouter.js";
import choiceRouter from "./choiceRouter.js";
import choiceVoteRouter from "./choiceVoteRouter.js";
import pollResultRouter from "./pollResultRouter.js";

const router = Router();

router.use(pollRouter);
router.use(choiceRouter);
router.use(choiceVoteRouter);
router.use(pollResultRouter);

export default router;
