const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');
const env = process.env.NODE_ENV || 'development';
const config = require('./config')[env];
const cors = require('./middleware/cors');
const models = require("./models");


const app = express();

app.use(bodyParser.json({ type: '*/*' }));
app.use(cors);

routes(app);


models.sequelize.sync().then(() => {
  app.listen(config.server.port, () => {
    console.log('Listening on port 4000');
  });
});

module.exports = app;
