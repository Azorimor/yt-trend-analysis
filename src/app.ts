import express, {Application} from 'express';
import cors from 'cors';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import router from './router/main';
import {authenticateToken} from './middleware/auth';

const app: Application = express();

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());

app.use('/bull/', authenticateToken);
app.set('views', __dirname + '/../views');
app.set('view engine', 'ejs');

app.use(router);

export default app;
