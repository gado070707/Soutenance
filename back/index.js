const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const config = require('./config');
const cors = require('./middlewares/cors');
const jwtCheck = require('./middlewares/jwt-check');
const cookieParser = require('cookie-parser');
const https = require('https');
const pem = require('pem');
const fs = require('fs');
Sequelize = require('sequelize');

// npm i --save cookie-parser

app = express();
api = express.Router();
app.use('/api', api);

// Chargement de la configuration.
conf = config.load();

sequelize = new Sequelize(conf.db.database, conf.db.username, conf.db.password, {
    host: conf.db.host,
    port: conf.db.port,
    dialect: conf.db.dialect,
    logging: false,
    freezeTableName: true,
    operatorsAliases: false,   
    pool: {
      acquire: conf.db.pool.acquire,
      idle: conf.db.pool.idle
    },
    define: {
        force: false,
        timestamps: false
    }
  });

sequelize.authenticate().then(
        () => {
            console.log('Connection has been established successfully.');
        },
        err => {
            console.error('Unable to connect to the database:', err.message);
        }
    )

/*
/jobs/:id       === req.params.id
/?token=abcd    === req.query.token
/jobs           === req.body.name (POST)
*/

//  Middleware
app.use(cors(conf.security.cors));
app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true  }));
app.use(bodyParser.json());
app.use(cookieParser());

api.use(cors(conf.security.cors));
api.use(bodyParser.urlencoded({ extended: true }));
api.use(bodyParser.json());
api.use(cookieParser());
api.use(jwtCheck);                                              //  Desactiver pour Angular avant de faire le form user et l'authentification.

// Configuration
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
app.locals.pretty = true;

/**
 * Démarrage du serveur.
 * 
 * @see https://www.npmjs.com/package/pem#express
 */

//require(path.join(__dirname, 'routes'));
require(path.join(__dirname, 'config'));

// const options = {
//     key: fs.readFileSync(path.join(__dirname, 'data', 'ssl', 'key.key')),
//     cert: fs.readFileSync(path.join(__dirname, 'data', 'ssl', 'cert.cert'))
// }

// https.createServer(options, app).listen(conf.server.port);

require(path.join(__dirname, 'routes'));

const options = {
    key: fs.readFileSync(path.join(__dirname, 'data', 'ssl', 'api.key')),
    cert: fs.readFileSync(path.join(__dirname, 'data', 'ssl', 'api.cert'))
}

https.createServer(options, app).listen(conf.server.port);
