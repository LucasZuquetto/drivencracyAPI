import { ObjectId } from "mongodb";
import db from "../db.js";

export default async function pollResultMiddleware(req, res, next) {
   const { id } = req.params;
   if (id.length !== 24) {
      res.sendStatus(404);
      return;
   }
   const pollId = ObjectId(id);

   const pollExists = await db.collection("polls").findOne({ _id: pollId });
   if (!pollExists) {
      res.sendStatus(404);
      return;
   }

   next();
}
