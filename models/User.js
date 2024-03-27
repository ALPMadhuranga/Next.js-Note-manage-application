import mongoose from "mongoose";

const { Schema,model,models } = mongoose;

const UserSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            unique: true,
            required: true
        },
        password: {
            type: String,
            required: true,
        }
    },
    {timestamps: true}
)

export default models.User || model("User", UserSchema);