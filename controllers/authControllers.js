import User from "../models/User.js";
import { StatusCodes } from "http-status-codes";
import { BadRequestError } from "../errors/index.js";

const registerUser = async (req, res, next) => {
	const { name, email, password } = req.body;
	if (!name || !email || !password) {
		throw new BadRequestError("Please provide all required fields");
	}

	// email already in use error for error middleware

	const emailAlreadyInUse = await User.findOne({ email });
	if (emailAlreadyInUse) {
		throw new BadRequestError("Sorry, email already in use");
	}
	const user = await User.create({ name, email, password });
	// JWT custom method for UserSchema model

	// const token = user.createJWT();
	res.status(StatusCodes.CREATED).json({
		user: {
			name: user.name,
			email: user.email,
			location: user.location,
			lastName: user.lastName,
		},
	});
};

const users = async (req, res) => {
	const user = await User.find();

	res.status(StatusCodes.OK).json(user);
};

const deleteUser = async (req, res) => {
	/* 
	
	const product = await Products.findByIdAndDelete(req.params.id)
	
    if (!product) {
		return res.status(404).json({msg: "This  Product does not exist"})
    }
	await res.send("delete user");
	*/

	const user = await User.findByIdAndDelete(req.params.id);
	if (!user) {
		throw new BadRequestError("Delete action failed, User not found");
	}
	res.status(StatusCodes.OK).json({ msg: "User deleted" });
};

const updateUser = async (req, res) => {
	const user = await User.findByIdAndUpdate(req.params.id, req.body, {
		new: true,
	});
	if (!user) {
		throw new BadRequestError("Update action failed, User not found");
	}
	res.status(StatusCodes.OK).json(user);
};

// 	const { name, email, location } = req.body;

// 	const userUpdate = await User.findByIdAndUpdate(req.params.id, {
// 		name,
// 		email,
// 		location,
// 	});

// 	if (!userUpdate) {
// 		return res.status(404).json({ msg: "This user does not exist" });
// 	}

// 	return res.status(StatusCodes.CREATED).json({ msg: "updated successfully" });
// };

export { registerUser, users, deleteUser, updateUser };
