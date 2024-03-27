import mongoose from "mongoose";

const { Schema, model, models } = mongoose;

const UserSchema = new Schema(
    {
        username: {
            type: String,
            required: [true, "Username is required"],
        },
        email: {
            type: String,
            unique: true,
            required: [true, "Email is required"],
        },
        password: {
            type: String,
            required: [true, "Password is required"],
        }
    },
    {timestamps: true}
)

export default models.User || model("User", UserSchema);