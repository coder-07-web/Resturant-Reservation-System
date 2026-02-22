import mongoose from "mongoose";
import validator from  "validator";

const reservationSchema = new mongoose.Schema({
    firstName: {
        type:String,
        required:true,
        minlength:[3, "First name must contain at least 3 char!"],
        maxlength:[30,"First name cannot exceed 30 characters"],
    },
     lastName: {
        type:String,
        required:true,
        minlength:[3, "Last name must contain at least 3 char!"],
        maxlength:[30,"last name cannot exceed 30 characters"],
    },
    email:{
        type:String,
        required:true,
        validate:[validator.isEmail,"Provide a valid email !"],
    },
    phone:{
        type:String,
        required:true,
        minlength:[10, "Enter a valid Phone Number"],
        maxlength:[10,"Enter a valid Phone Number"],
    },
    time:{
        type:String,
        required:true,
    },
    date:{
        type:String,
        required:true,
    },
});

export const Reservation = mongoose.model("Reservation",reservationSchema);