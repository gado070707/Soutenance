const jwt = require('jsonwebtoken');
//  npm i jwtwebtoken --save

const JWT_SECRET_KEY = 'jfHLSF%H§EQRhsp5##[[~~}}6454dqs!:JHldfj(-_^^éé##kgjkjsq57sfd8fdsjgAMZZLFSEGLG596zryeztrfgdwLHLMg58!-è_t_é';

exports.generateToken = (user, callback) => {
    jwt.sign(
        {
            id: user.id,
            username: user.name
        },
        JWT_SECRET_KEY,
        { 
            algorithm: 'HS256',
            expiresIn: 43200
        },
        callback
    // (err, token) => {console.log(token);}
    );
};

exports.checkToken = (token, callback) => {
    jwt.verify(
        token,
        JWT_SECRET_KEY, 
        callback
    );
};