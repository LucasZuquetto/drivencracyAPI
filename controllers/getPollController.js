import db from "../src/db.js";

export async function getPollController(req, res) {
   try {
      const polls = await db.collection("polls").find().toArray();
      res.send(polls);
   } catch (error) {
      console.error(error.message);
      res.sendStatus(500);
   }
}
