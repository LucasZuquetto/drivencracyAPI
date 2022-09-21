import db from '../src/db';

export async function postPollController (req,res) {
    const pollObject = req.body
    
    try {
        await db.collection('polls').insertOne(pollObject)
        res.status(201).send()
    } catch (error) {
        console.log(error.message)
        res.sendStatus(500)
    }
}