import { Request, Response, NextFunction, RequestHandler } from "express";

const ctrlWrapper = <T extends RequestHandler>(ctrl: T) => {
  const func: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
    try {
      await ctrl(req, res, next);
    } catch (error) {
      next(error);
    }
  };
  return func;
};

export default ctrlWrapper;