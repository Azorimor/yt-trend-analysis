import {Request, Response} from 'express';
import jwt from 'jsonwebtoken';
import {
  ACCESS_TOKEN_SECRET,
  DASHBOARD_ADMIN_PASSWORD,
  DASHBOARD_ADMIN_USERNAME,
  PROD,
} from '../utils/config';

export class AuthController {
  async login(req: Request, res: Response) {
    if (!req.body.username || !req.body.password) {
      return res.redirect('/login');
    }
    const username: string = req.body.username;
    const password: string = req.body.password;

    if (
      username !== DASHBOARD_ADMIN_USERNAME ||
      password !== DASHBOARD_ADMIN_PASSWORD
    ) {
      return res.redirect('/login');
    }
    const user = {username, password};
    const token = jwt.sign(user, ACCESS_TOKEN_SECRET, {expiresIn: '7d'});

    // res.status(200).json(token);
    res
      .cookie('access_token', token, {
        httpOnly: true,
        secure: PROD,
      })
      .redirect('/bull');
  }
}
