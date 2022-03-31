// create user model and export it to server.js
import mongoose from "mongoose";
import validator from "validator";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

const UserSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, "Name is required"],
		minlength: [2, "Name must be at least 2 characters"],
		maxlength: [30, "Name must be less than 30 characters"],
	},
	email: {
		type: String,
		required: [true, "Email is required"],
		unique: true,
		validate: {
			validator: validator.isEmail,
			message: " please enter a valid email",
		},
	},
	password: {
		type: String,
		required: [true, "Password is required"],
		minlength: [6, "Password must be at least 6 characters"],
		select: false,
	},

	lastName: {
		type: String,
		trim: true,
		maxlength: 25,
		default: "lastName",
	},
	location: {
		type: String,
		trim: true,
		maxlength: 25,
		default: "my city",
	},

	date: {
		type: Date,
		default: Date.now,
	},
});

// set up mongoose hook for password hashing before saving user to database
UserSchema.pre("save", async function (next) {
	const salt = await bcryptjs.genSalt(10);
	this.password = await bcryptjs.hash(this.password, salt);
	next();
});

// create UserSchema method .createJWT() and return console.log(this)
UserSchema.methods.createJWT = function () {
	return jwt.sign({ userId: this._id }, process.env.JWT_SECRET, {
		expiresIn: process.env.JWT_LIFETIME,
	});
};

const User = mongoose.model("User", UserSchema);

export default User;
