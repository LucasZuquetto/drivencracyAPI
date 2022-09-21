import db from "../db.js";

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

export async function getPollController(req, res) {
   try {
      const polls = await db.collection("polls").find().toArray();
      res.send(polls);
   } catch (error) {
      console.error(error.message);
      res.sendStatus(500);
   }
}
