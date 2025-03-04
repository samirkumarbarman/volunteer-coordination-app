import { registerUser, loginUser } from "../services/authServices.js";

export const register = async (req, res) => {
    try {
        const user = await registerUser(req.body);
        res.status(201).json({message :"User registered", user});
    } catch (error) {
        res.status(400).json({message :error.message});
    }
};

export const login = async (req, res) => {
    try {
        const {token, user} = await loginUser(req.body);
        res.status(200).json({message :"Successfully Logged in", token, user});
    } catch (error) {
        res.status(401).json({message :error.message});
    }
};