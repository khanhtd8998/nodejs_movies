import movieRouter from './movies.js';
import categoryRouter from './categories.js';
import genreRouter from './genres.js';
import authRouter from './auth.js';
import { Router } from 'express';
const router = Router();

router.use('/movies', movieRouter)
router.use('/categories', categoryRouter)
router.use('/genres', genreRouter)
router.use('/users', authRouter)
router.use('/', (req, res) => res.end("Home"))

export default router