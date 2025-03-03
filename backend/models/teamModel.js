import mongoose from "mongoose";

const teamSchema = new mongoose.Schema({
    name :{
        type : String,
        required : true,
    },

    coordinator :{
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
    },

    volunteer :{
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
    },
}, { timestamps : true });

const Team = mongoose.model("Team", teamSchema);

export default Team;