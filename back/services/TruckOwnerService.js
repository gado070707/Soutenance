const TruckOwner = require('../models/TruckownerModel');

//  Appels de la BDD

exports.create = (data) => {
    return TruckOwner.create({
        user: data.user,
        siret: data.siret,
        active: true
    });
}

exports.find = (attribut) => {
    return TruckOwner.findOne({
        where: attribut 
    });
}

exports.findAll = data => {
    return TruckOwner.findAll();
}

exports.delete = (id) => {
    return TruckOwner.destroy({
        where: { id: id }
    });
}

exports.update = (data) => {
    return TruckOwner.update(data, { 
        where: { id: data.id } 
    });
}