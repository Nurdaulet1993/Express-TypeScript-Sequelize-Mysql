import express, { Application, Request, Response, NextFunction, ErrorRequestHandler } from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import { config } from "dotenv";

import { articleRouter } from "./routes/article.routes";
import { userRouter } from "./routes/user.routes";
import { authRouter } from "./routes/auth.routes";

config();

const app: Application = express();
      app.set('port', process.env.PORT || 3000);
      app.use(bodyParser.json());
      app.use('/img', express.static(path.join(__dirname + '/static/img')));
      app.use((req: Request, res: Response, next: NextFunction) => {
          res.setHeader('Access-Control-Allow-Origin', '*');
          res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
          res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
          next();
      });
      app.use('/api', [articleRouter, userRouter, authRouter]);
      app.use('/', (req: Request, res: Response, next: NextFunction) => {
          res.send('Request sent successfully');
          next();
      });

      export default app;
