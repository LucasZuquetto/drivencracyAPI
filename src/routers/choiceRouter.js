import { Router } from "express";
import {
   getChoicesController,
   postChoiceController,
} from "../controllers/choiceController.js";
import {
   postChoiceMiddleware,
   getChoicesMiddleware,
} from "../middlewares/choiceMiddleware.js";

const choiceRouter = Router();

choiceRouter.post("/choice", postChoiceMiddleware, postChoiceController);
choiceRouter.get(
   "/poll/:id/choice",
   getChoicesMiddleware,
   getChoicesController
);

export default choiceRouter;
