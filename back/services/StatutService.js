const Statuts = require('../models/StatutModel');

//  Appels de la BDD

exports.create =(data) => {
    return Statuts.create({
        name: data.name,             
        active: true
    });
}

exports.find = (attribut) => {
    return Statuts.findOne({
        where: attribut 
    });
}

exports.findAll = data => {
    return Statuts.findAll();
}

exports.delete = (id) => {
    return Statuts.destroy({
        where: { id: id }
    });
}

exports.update = (data) => {
    return Statuts.update(data, { 
        where: { id: data.id } 
    });
}