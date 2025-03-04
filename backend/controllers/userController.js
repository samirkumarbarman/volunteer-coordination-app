import { getUserById, getAllUser, deleteUser } from "../services/userServices.js";


export const getUsers = async (req, res) =>{
    try {
        const users = await getAllUser();
        res.status(200).json(users)
    } catch (error) {
        res.status(500).json({message :error.message});
    }
};

export const getUser = async (req, res) =>{
    try {
        const user = await getUserById(req.params.id);
        if (!user) return res.status(404).json({message :"USER NOT FOUND"});
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({message :error.message});
    }
};

export const removeUser = async (req, res) => {
    try {
        const remove = await deleteUser(req.params.id);
        if (!remove) return res.status (404).json({message :"user Not found"});
        res.status(200).json({message :"User Deleted successfully"}); 
        
    } catch (error) {
        res.status(500).json({message :error.message});
    }
};

