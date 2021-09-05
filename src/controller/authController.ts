import {Request, Response} from 'express';
import jwt from 'jsonwebtoken';
import {ACCESS_TOKEN_SECRET, PROD} from '../utils/config';

export class AuthController {
  async login(req: Request, res: Response): Promise<void> {
    if (!req.body.username || !req.body.password) {
      return;
    }
    const username: string = req.body.username;
    const password: string = req.body.password;
    const user = {username, password};
    const token = jwt.sign(user, ACCESS_TOKEN_SECRET, {expiresIn: '7d'});

    // res.status(200).json(token);
    res
      .cookie('access_token', token, {
        httpOnly: true,
        secure: PROD,
      })
      .status(200)
      .json({message: 'Logged in successfully.', token: token});
  }
}
