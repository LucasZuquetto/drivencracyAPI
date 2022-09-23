import { Router } from "express";
import choiceVoteController from "../controllers/choiceVoteController.js";
import choiceVoteMiddleware from "../middlewares/choiceVoteMiddleware.js";

const choiceVoteRouter = Router();

choiceVoteRouter.post(
   "/choice/:id/vote",
   choiceVoteMiddleware,
   choiceVoteController
);

export default choiceVoteRouter;
