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

exports.authentification = (req, res) => {
    UserService.authenticate(req.body).then(
        user => {
            if(!user) {
                res.status(401).json({message:"Identifiant incorrect"});
                return;
            }
            
            if(user.active == 0) {
                res.status(401).json({message:"Compte inexistant"});
                return;
            }

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
            console.log(err);
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

exports.findById = (req, res) => {
    UserService.find({id: req.params.id}).then(
        (data) => {
            res.status(201).json(data);
        },
        (err) => {
            res.status(500).json(err);
        }
    );
};

exports.findByName = (req, res) => {
    UserService.find({name: req.params.name}).then(
        (data) => {
            res.status(201).json(data);
        },
        (err) => {
            res.status(500).json(err);
        }
    );
};

exports.update = (req, res) => {
    UserService.update(req.body, req.params.id).then(
        (data, id) => {
            res.status(201).json(data);
        },
        (err) => {
            res.status(500).json(err);
        }
    );
};

exports.updatedel = (req, res) => {
    UserService.updatedel(req.body, req.params.id ).then(
        (data) => {
            res.status(201).json(data.body);
        },
        (err) => {
            console.log(err)
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