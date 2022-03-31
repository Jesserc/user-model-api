import { StatusCodes } from "http-status-codes";

const ErrorHandlerMiddleWare = (error, req, res, next) => {
	console.log(error);

	const defaultError = {
		status: error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
		msg: error.message || "Something went wrong, please try again later",
	};

	if (error.name === "ValidationError") {
		defaultError.status = StatusCodes.BAD_REQUEST;

		defaultError.msg = Object.values(error.errors)
			.map((value) => value.message)
			.join(", ");
	}
	if (error.code && error.code === 11000) {
		defaultError.status = StatusCodes.CONFLICT;
		defaultError.msg = `${Object.keys(error.keyValue)} already exists`;
	}

	res.status(defaultError.status).json({ msg: defaultError.msg });
};

export default ErrorHandlerMiddleWare;
