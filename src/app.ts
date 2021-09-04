import express, {Application} from 'express';
import cors from 'cors';
import helmet from 'helmet';

const app: Application = express();

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.set('views', __dirname + '/../views');
app.set('view engine', 'ejs');

app.get('/login', (req: express.Request, res: express.Response) => {
  res.render('login');
});

export default app;
