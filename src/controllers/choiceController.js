import db from "../db.js";

export async function postChoiceController(req, res) {
   const choiceObject = req.body;
   try {
      await db.collection("choices").insertOne(choiceObject);
      res.status(201).send(choiceObject);
   } catch (error) {
      console.error(error.message);
      res.sendStatus(500);
   }
}
