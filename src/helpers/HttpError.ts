import { Error } from "../types";

const HttpError = (status: number, message: string): Error => {
  const error: Error = {
    status,
    message,
  };
  return error;
};

export default HttpError;