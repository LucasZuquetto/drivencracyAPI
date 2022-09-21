import Joi from "joi";
import db from "../db.js";
import { ObjectId } from "mongodb";
import dayjs from "dayjs";

export default async function choiceMiddleware(req, res, next) {
   const choiceObject = req.body;

   const choiceSchema = Joi.object({
      title: Joi.string().required(),
      pollId: Joi.string().length(24).required(),
   });
   const validate = choiceSchema.validate(choiceObject, { abortEarly: false });
   if (validate.error) {
      console.error(validate.error.details.map((detail) => detail.message));
      res.sendStatus(422);
      return;
   }

   const poll_id = new ObjectId(choiceObject.pollId);

   try {
      const pollExists = await db.collection("polls").findOne({ _id: poll_id });
      const titleExists = await db.collection("choices").findOne({
         title: choiceObject.title,
         pollId: choiceObject.pollId,
      });
      if (!pollExists) {
         res.sendStatus(404);
         return;
      }
      if (titleExists) {
         res.sendStatus(409);
         return;
      }
      if (!dayjs().isBefore(dayjs(pollExists.expireAt))) {
         res.sendStatus(403);
      }
   } catch (error) {
      console.error(error.message);
      res.sendStatus(500);
   }

   next();
}
