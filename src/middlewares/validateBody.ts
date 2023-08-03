import { Request, Response, NextFunction, RequestHandler } from "express";
import { HttpError } from "../helpers";
// import { ValidationSchema } from "../types";
import { ObjectSchema } from "joi";

const validateBody = <T extends ObjectSchema>(
  schema: T
): RequestHandler => async (req: Request, _res: Response, next: NextFunction) => {
    const { error } = schema.validate(req.body);
    if (error) {
      const errorMessage = error.details.map((detail) => detail.message).join(", ");
      next(HttpError(400, errorMessage));
    }
    next();
};

export default validateBody;
