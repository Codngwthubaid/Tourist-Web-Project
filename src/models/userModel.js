import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        require: [true, "Please provide a Username"],
        unique: true
    },
    email: {
        type: String,
        require: [true, "Please provide the Email"],
        unique: true
    },
    tel: {
        type: Number,
        require: [true, "Please provide the Number"],
        unique: true
    },
    password: {
        type: String,
        require: [true, "Please provide the password"],
        unique: true,
    },
    isAdmin: {
        type: String,
        default: false
    },
    isVerified: {
        type: Boolean,
        default: false
    },
})

const User = mongoose.models.UserData || mongoose.model("UserData", userSchema)
export default User