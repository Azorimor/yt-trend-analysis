import {Router} from 'express';
import {AuthController} from '../controller/authController';

const apiRouter = Router();
const authController = new AuthController();

apiRouter.get('/login', authController.login);

export default apiRouter;
