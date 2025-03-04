import User from "../models/userModel.js";

export const getUserById = async (userId) =>{
    return await User.findById(userId).populate("team");
};

export const getAllUser = async () =>{
    return await User.find().populate("team");
};

export const deleteUser = async (userId) =>{
    return await User.findByIdAndDelete(userId);
};