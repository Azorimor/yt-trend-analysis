import jwt from 'jsonwebtoken';
import {Request, Response, NextFunction} from 'express';
import {ACCESS_TOKEN_SECRET} from '../utils/config';

export const authenticateToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.cookies.access_token;
  if (!token) {
    return res.sendStatus(401);
  }
  jwt.verify(token, ACCESS_TOKEN_SECRET, (error: any, user: any) => {
    if (error) {
      console.log(error);
      return res.sendStatus(403);
    }
    // req.user = user;
    next();
  });
};
