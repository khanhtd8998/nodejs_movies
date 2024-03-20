import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const MovieSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        poster: {
            type: String,
        },
        director: {
            type: String,
        },
        cast: {
            type: String,
        },
        genres: {
            type: [Schema.Types.ObjectId],
            ref: "Genre",
            required: true,
        },
        category: {
            type: Schema.Types.ObjectId,
            ref: "Category",
            required: true,
        },
        runningTime: {
            type: Number,
        },
        language: {
            type: String,
        },
        rate: {
            type: Number,
        },
        trailer: {
            type: String,
        },
        image: {
            type: String,
        },
    },
    {
        versionKey: false,
        timestamps: true,
    });
const Movie = mongoose.model('Movie', MovieSchema);
export default Movie