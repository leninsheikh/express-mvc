const Express = require('express');
const BodyParser = require('body-parser');
const ejs  = require('ejs');

const routes =  require('@src/routes');
const ipLogger = require('@src/http/middlewares/ip.middleware');
const  { asset, views } = require('@src/utils/path');
require('@src/services/passport.service');

const app = Express();
app.use(BodyParser.urlencoded({extended: false}));
app.use(Express.static(asset()));
// app.use(Express.static(views()));
app.set('views', views());
app.set('view engine', 'ejs');

app.use(ipLogger);
app.use(routes);

app.listen(3000, () => {
    console.log(process.env.APP_NAME, ':: server started!');
});
