import db from "../db.js";
import { ObjectId } from "mongodb";

export async function pollResultController(req, res) {
   const { id } = req.params;
   let totalVotes = 0;
   let mostVotedTitle = "Não há votos registrados nessa enquete";
   const pollId = ObjectId(id);
   try {
      const pollObject = await db.collection("polls").findOne({ _id: pollId });
      const choices = await db
         .collection("choices")
         .find({ pollId: id })
         .toArray();
      for (let index = 0; index < choices.length; index++) {
         const choice = choices[index];
         const votesArr = await db
            .collection("votes")
            .find({ choiceId: choice._id })
            .toArray();
         if (
            votesArr.length === totalVotes &&
            totalVotes !== 0 &&
            typeof mostVotedTitle == "object"
         ) {
            mostVotedTitle = [...mostVotedTitle, choice.title];
         }
         if (
            votesArr.length === totalVotes &&
            totalVotes !== 0 &&
            typeof mostVotedTitle == "string"
         ) {
            mostVotedTitle = [mostVotedTitle, choice.title];
         }
         if (votesArr.length > totalVotes) {
            totalVotes = votesArr.length;
            mostVotedTitle = choice.title;
         }
      }
      res.send({
         ...pollObject,
         result: {
            title: mostVotedTitle,
            votes: totalVotes,
         },
      });
   } catch (error) {
      console.error(error.message);
      res.sendStatus(500);
   }
}
