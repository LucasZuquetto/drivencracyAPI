import { ObjectId } from "mongodb";
import db from "../db.js";
import dayjs from "dayjs";

export default async function choiceVoteMiddleware(req, res, next) {
   const { id } = req.params;
   if (id.length !== 24) {
      res.sendStatus(404);
      return;
   }
   const choiceId = new ObjectId(id);
   try {
      const choiceExists = await db
         .collection("choices")
         .findOne({ _id: choiceId });
      if (!choiceExists) {
         res.sendStatus(404);
         return;
      }
      const poll_id = new ObjectId(choiceExists.pollId);
      const poll = await db.collection("polls").findOne({ _id: poll_id });
      if (!dayjs().isBefore(dayjs(poll.expireAt))) {
         res.sendStatus(403);
         return;
      }
   } catch (error) {
      console.error(error.message);
      res.sendStatus(500);
   }

   next();
}
