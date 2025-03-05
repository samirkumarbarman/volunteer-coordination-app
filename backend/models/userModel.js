import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const SALT_ROUND = 10;

const userSchema = new mongoose.Schema({
    name :{
        type : String,
        required : true,
    },

    email :{
        type : String,
        required : true,
        lowercase : true,
    },

    password : {
        type : String,
        required : true,
    },

    role :{
        type: String,
        enum :["Volunteer", "Coordinator"],
        required : true,
        default : "Volunteer",
    },

    team :{
        type : mongoose.Schema.Types.ObjectId,
        ref : "Team",
    },
}, { timestamps : true });

//Hash password before saving
userSchema.pre ("save", async function (next){
    if (!this.isModified('password')){
        return next;
    }
    try {
        const salt = await bcrypt.genSalt(SALT_ROUND);
        this.password = await bcrypt.hash(this.password, salt);
        next();
    } catch (error) {
        next(error);
    }
});

//Compare Hash password
userSchema.methods.comparePassword = async function(password){
    return await bcrypt.compare(password, this.password);
};

const User = mongoose.model("User", userSchema);

export default User;