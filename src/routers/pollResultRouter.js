import { Router } from "express";
import { pollResultController } from "../controllers/pollResultController.js";
import pollResultMiddleware from "../middlewares/pollResultMiddleware.js";

const pollResultRouter = Router();

pollResultRouter.get(
   "/poll/:id/result",
   pollResultMiddleware,
   pollResultController
);

export default pollResultRouter;
