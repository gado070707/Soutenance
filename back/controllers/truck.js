const TruckService = require('../services/TruckService');
const TruckOwnerService = require('../services/TruckOwnerService');


exports.account = (req, res) => {
    res.render('account', { title: "Detail compte"});
};

exports.create = (req, res) => {
    TruckService.create(req.body).then(
        (data) => {
            res.status(201).json(data);
        },
        err => {
            res.status(500).json(err);
        }
    );
};

exports.find = (req, res) => {
    TruckService.find({id: req.params.id})
        .then(
            data => {
                res.json(data);
            },
            err => {
                res.status(500).json(err);
            }
        );
};

exports.findAll = (req, res) => {
    TruckService.findAll(req.body).then(
        data => {
            res.status(201).json(data);
        },
        err => {
            res.status(500).json(err);
        }
    );
};

exports.findAllByTruckowner = (req, res) => {
    TruckService.findAllByTruckowner({truckowner: req.params.id}).then(
        data => {
            res.status(201).json(data);
        },
        err => {
            res.status(500).json(err);
        }
    );
};

exports.update = (req, res) => {
    TruckService.update(req.body, req.params.id).then(
        (data) => {
            res.status(201).json(data);
        },
        (err) => {
            res.status(500).json(err);
        }
    );
};

exports.delete = (req, res) => {
    TruckService.delete(req.params.id).then(
        (data) => {
            res.status(201).json(data);
        },
        (err) => {
            res.status(500).json(err);
        }
    );
};