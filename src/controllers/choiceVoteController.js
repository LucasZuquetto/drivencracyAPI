import db from "../db.js";
import { ObjectId } from "mongodb";
import dayjs from "dayjs";

export default async function choiceVoteController(req, res) {
   const choiceId = new ObjectId(req.params.id);
   try {
      await db.collection("votes").insertOne({
         createdAt: dayjs().format("YYYY-MM-DD HH:mm"),
         choiceId,
      });
      res.sendStatus(201);
   } catch (error) {
      console.error(error.message);
      res.sendStatus(500);
   }
}
