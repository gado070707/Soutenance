const UserService = require('../services/UserService');
const jwt = require('../modules/jwt');

exports.register = (req, res) => {  
    UserService.register(req.body).then(
        user => {
            res.status(201).json(user);
        },
        err => {console.log(err);
            res.status(500).json({ message: "Server Error"});
        }
    );
};
//  Yo
exports.authentification = (req, res) => {
    UserService.authenticate(req.body).then(
        user => {
            jwt.generateToken(user, (err, token) => {
                res.cookie('token', token, {
                    path: '/',
                    maxAge: 12*3600000,
                    httpOnly: true,
                    secure: true 
                });
                res.json(user);
            });            
        },
        err => {
            console.log(err+" OK");
        }
    );
};


exports.create = (req, res) => {
    UserService.create(req.body).then(
        (data) => {
            res.redirect("/");
        },
        (err) => {
            res.status(500).json(err);
        }
    );
};

exports.findAll = (req, res) => {
    UserService.findAll(req.body).then(
        (data) => {
            res.status(201).json(data);
        },
        (err) => {
            res.status(500).json(err);
        }
    );
};

exports.find = (req, res) => {
    UserService.find({id: req.params.id}).then(
        (data) => {
            res.status(201).json(data);
        },
        (err) => {
            res.status(500).json(err);
        }
    );
};

exports.update = (req, res) => {
    UserService.update(req.body).then(
        (data) => {
            res.status(201).json(data);
        },
        (err) => {
            res.status(500).json(err);
        }
    );
};

exports.delete = (req, res) => {
    UserService.delete(req.params.id).then(
        (data) => {
            res.status(201).json(data);
        },
        (err) => {
            res.status(500).json(err);
        }
    );
};