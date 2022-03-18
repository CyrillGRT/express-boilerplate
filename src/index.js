import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

import router from './router';

const app = express();

app.use(cors());

app.use(morgan('dev'));

app.use(express.json());

app.use('/', router);

const main = async () => {
  app.listen(process.env.PORT,
    () => console.log('[INFO] Server listenig on port', process.env.PORT));
};

main();

export default app;
