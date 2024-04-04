import movieRouter from './movies.js';
import categoryRouter from './categories.js';
import genreRouter from './genres.js';
import authRouter from './auth.js';
import { Router } from 'express';
const router = Router();


router.get('/', (req, res) => {
    res.send("Home")
})
router.use('/movies', movieRouter)
router.use('/categories', categoryRouter)
router.use('/genres', genreRouter)
router.use('/auth', authRouter)


export default router