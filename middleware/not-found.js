import { StatusCodes } from "http-status-codes";

const notFoundMiddleWare = (req, res) => {
	res.status(StatusCodes.NOT_FOUND).send("Sorry, route not found");
};

export default notFoundMiddleWare;
