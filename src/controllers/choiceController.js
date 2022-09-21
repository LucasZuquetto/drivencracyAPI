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

export async function getChoicesController (req, res){
   const pollId = req.params.id
   try {
      const pollChoices = await db.collection('choices').find({pollId}).toArray()
      res.send(pollChoices)
   } catch (error) {
      console.error(error.message)
      res.sendStatus(500)
   }
}