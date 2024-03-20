import mongoose from "mongoose";

const GenreSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
    },
    {
        versionKey: false,
        timestamps: true,
    }
);
const Genre = mongoose.model('Genre', GenreSchema);
export default Genre