import movieRouter from './movies.js';
import categoryRouter from './categories.js';
import genreRouter from './genres.js';
export default function routes(app) {
    app.get("/", (req, res) => {
        res.send("Home");
    });
    app.use('/movies', movieRouter)
    app.use('/categories', categoryRouter)
    app.use('/genres', genreRouter)
}