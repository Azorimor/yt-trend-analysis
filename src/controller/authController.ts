import {Request, Response} from 'express';

export class AuthController {
  async login(req: Request, res: Response): Promise<void> {
    console.log('logging in....');
  }
}
