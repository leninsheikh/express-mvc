import Express from 'express';
import BodyParser from 'body-parser';

import routes from '@src/http/routes';
import ipLogger from '@src/http/middlewares/ip.middleware';
import {asset} from '@src/utils/path';
// import sequelize from '@src/database/connection';

const app = Express();
app.use(BodyParser.urlencoded({extended: false}));
app.use(Express.static(asset()));
app.use(ipLogger);
app.use(routes);

// sequelize.authenticate()
//     .then(() => {
//         console.log('Connection has been established successfully.');
//     })
//     .catch(err => {
//         console.error('Unable to connect to the database:', err);
//     });

app.listen(3000, () => {
    console.log('server started!');
});
