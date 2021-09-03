import express, {Application} from 'express';
import cors from 'cors';
import helmet from 'helmet';

const app: Application = express();

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

export default app;
