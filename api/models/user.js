import bycript from "bcrypt";
import mongoose, { Mongoose } from "mongoose";

import * as settings from "../settings.js";

const userSchema = new Mongoose.Schema(
    {
        first_name: {
            type: String,
            required: "First name requiered",
            max: 32, 
        },
        last_name: {
            type: String,
            required: "Last name requiered",
            max: 32, 
        },
        email: {
            type: String,
            required: "Email name requiered",
            lowercase: true,
            unique: true,
            trim:true, 
        },
        password: {
            type: String,
            required: "Password is required",
            select: false,
            max: 32,
        }
    },
    { timestamp: true }
);

userSchema.pre("save", function(next){
    if(!this.isModified("password")) return next();
    bycript.genSalt(settings.SALT_BYCRIPT_VALUE, (error, salt) => {
        if(error) return next(error);
        bycript.hash(this.password, salt, (error, hash) => {
            if(error) return next(error);
            this.password = hash;
            next();
        });
    });
});

userSchema.pre("insertMany", function(next, data){
    // TODO: Complete hashing of passwords
});


export default mongoose.model("user", userSchema);