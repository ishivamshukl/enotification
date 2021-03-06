import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    mobileNumber: Number,
    intrestArea: String,
    password:String,
    userType:String
}, { versionKey: false , timestamps: true});

//Creating our model
export const User = mongoose.model("User", UserSchema, 'user');
