import mongoose from 'mongoose';
import {MONGO_URI} from './config';

const connection = mongoose.connect(MONGO_URI);
export default connection;
