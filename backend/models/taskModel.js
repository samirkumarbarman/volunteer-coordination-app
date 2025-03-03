import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    title :{
        type : String,
        required : true,
    },

    description :{
        type : String,
        required : true,
    },

    assignTo :{
        type : mongoose.Schema.Types.ObjectId,
        ref : "User"
    },

    createdBy :{
        type : mongoose.Schema.Types.ObjectId,
        ref : "User"
    },

    status :{
        type : String,
        enum : ["pending", "in progress", "completed"],
        default : "pending",
    },

    dueDate :{
        type : Date,
        required : true,
    },
}, { timestamps : true });

const Task = mongoose.model("Task", taskSchema);

export default Task;