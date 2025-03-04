import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

const protect = async (req, res, next) =>{
    try {
        const token = req.headers.authorization?.split(" ")[1];
        if (!token) return  res.status(401).json({message:"Not Authorized, no-token"});
        
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await User.findById(decoded.id).select("-password");

        if (!req.user) return res.status(401).json({message: "User not found"});

        next();
    } catch (error) {
        res.status(401).json({message: "Not authorized, Invalid token"});
    }
};

export default protect;