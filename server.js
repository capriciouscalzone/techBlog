const express = require('express');
const routes = require('./controllers');


const app = express();
const PORT = process.env.PORT || 3001;

const sequelize = require('./config/config');

app.use(express.json());

app.use(routes);

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
    sequelize.sync({ force: false });
})
