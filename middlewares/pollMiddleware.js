import Joi from "joi"

export default function pollMiddleware(req,res,next){
    const pollObject = req.body

    const pollSchema = Joi.object({
        title:Joi.string().min(1).required()
    })
    const validate = pollSchema.validate(pollObject)

    if(validate.error){
        console.error(validate.error)
        res.sendStatus(422)
        return
    }

    next()
}