import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

//Register New User
export const registerUser = async ({name, email, password, role, team}) => {
    const existUser = await User.findOne({email});
    if (existUser) throw new Error("User Already Exist");

    const newUser = await User.create({name, email, password, role, team});
    return newUser;
};

//Login Nre User
export const loginUser = async ({email, password}) =>{
    const user = await User.findOne({email});
    if (!user) throw new Error("Invalid Credentials");

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw new Error ("Invalid password");

    const token = jwt.sign({id: user._id, role: user.role}, process.env.JWT_SECRET, { expiresIn: "7d"});

    return {token, user};
}