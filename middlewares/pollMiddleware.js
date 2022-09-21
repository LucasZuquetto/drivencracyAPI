import Joi from "joi";
import dayjs from "dayjs";


export default function pollMiddleware(req, res, next) {
   const pollObject = req.body;
   const after30days = dayjs().add(30, "day").format("YYYY-MM-DD HH:mm");
   const pollSchema = Joi.object({
      title: Joi.string().min(1),
      expireAt: Joi.string().allow("", null).required(),
   });
   const validate = pollSchema.validate(pollObject, { abortEarly: false });

   if (validate.error) {
      console.error(validate.error.details.map((error) => error));
      res.sendStatus(422);
      return;
   }
   if (pollObject.expireAt.length === 0) {
      pollObject.expireAt = after30days;
   }

   next();
}
