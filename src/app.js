import Express from 'express';
import BodyParser from 'body-parser';
import dotEnv from 'dotenv';

import routes from '@src/http/routes';
import ipLogger from '@src/http/middlewares/ip.middleware';
import {asset} from '@src/utils/path';

const app = Express();
dotEnv.config();
app.use(BodyParser.urlencoded({extended: false}));
app.use(Express.static(asset()));
app.use(ipLogger);
app.use(routes);

app.listen(3000, () => {
    console.log(process.env.APP_NAME, ':: server started!');
});
