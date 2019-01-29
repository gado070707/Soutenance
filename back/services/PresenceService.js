const Presences = require('../models/PresenceModel');

//  Appels de la BDD

exports.create =(data) => {
    return Presences.create({
        day: data.day,       
        truck: data.truck,       
        adresse: data.adresse,       
        active: true
    });
}

exports.find = (attribut) => {
    return Presences.findOne({
        where: attribut 
    });
}

exports.findAll = data => {
    return Presences.findAll();
}

exports.delete = (id) => {
    return Presences.destroy({
        where: { id: id }
    });
}

exports.update = (data) => {
    return Presences.update(data, { 
        where: { id: data.id } 
    });
}