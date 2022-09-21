import { Router } from "express";
import { getChoicesController, postChoiceController } from "../controllers/choiceController.js";
import choiceMiddleware from "../middlewares/choiceMiddleware.js";

const choiceRouter = Router();

choiceRouter.post("/choice", choiceMiddleware, postChoiceController);
choiceRouter.get("/poll/:id/choice", getChoicesController);

export default choiceRouter;
