import {Router, Request, Response} from 'express';

const apiRouter = Router();

apiRouter.get('/login', (req: Request, res: Response) => {
  res.render('login');
});

export default apiRouter;
