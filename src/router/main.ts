import {Router, Request, Response} from 'express';
import apiRouter from './api';

const router = Router();

router.use('/api', apiRouter);

router.get('/login', (req: Request, res: Response) => {
  res.render('login');
});

export default router;
