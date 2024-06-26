import { CustomAPIError } from "../errors/custom-errors.js";

const errorHandlerMiddleware = async (err, req, res, next) => {
  if (err instanceof CustomAPIError) {
    return res.status(err.statusCode).json({ msg: err.message });
  }
  return res
    .status(500)
    .json({ msg: "Something went wrong, Please try again " });
};

export default errorHandlerMiddleware;
