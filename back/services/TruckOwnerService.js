const TruckOwner = require('../models/TruckownerModel');

//  Appels de la BDD

exports.create = (data) => {    console.log(data)
    return TruckOwner.create({
        user: data.id,
        siret: data.textSiret,
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