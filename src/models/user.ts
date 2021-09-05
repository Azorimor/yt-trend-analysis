import {Schema, model} from 'mongoose';

interface User {
  name: string;
  email: string;
  password?: string;
}

const schema = new Schema<User>({
  name: {type: String, required: true, unique: true},
  email: {type: String, required: true, unique: true},
  password: String,
});

export const UserModel = model<User>('user', schema);
