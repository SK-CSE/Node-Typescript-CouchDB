import * as express from 'express';
import * as logger from 'morgan';
import * as bodyParser from 'body-parser';

import {couchRoutes, rootRoute} from './routes';

const app: express.Application = express();

// Express middle configuration

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// configure routes
app.use('/', rootRoute);
app.use('/couch', couchRoutes);

export default app;
