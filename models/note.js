import mongoose from "mongoose";

const { Schema, model, models } = mongoose;

const NoteSchema = new Schema(
    {
        author: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: [true, "Author is required"],
        },
        title: {
            type: String,
            required: [true, "Title is required"],
        },
        description: {
            type: String,
            required: [true, "Description is required"],
        }
    },
    {timestamps: true}
)

export default models.Note || model("Note", NoteSchema);