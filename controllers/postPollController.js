import db from "../src/db.js";

export async function postPollController(req, res) {
   const pollObject = req.body;

   try {
      await db.collection("polls").insertOne(pollObject);
      res.status(201).send(pollObject);
   } catch (error) {
      console.log(error.message);
      res.sendStatus(500);
   }
}
