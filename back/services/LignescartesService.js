const Carte = require('../models/ligneCarteModel');

//  Appels de la BDD

exports.create =(data) => {
    return Carte.create({
        truck: data.truck,
        product: data.product,
        active: true,
    });
}



exports.find = (attribut) => {
    return Carte.findOne({
        where: attribut 
    });
}

exports.findAll = data => {
    return Carte.findAll();
}

exports.delete = (id) => {
    return Carte.destroy({
        where: { id: id }
    });
}

exports.update = (data) => {
    return Carte.update(data, { 
        where: { id: data.id } 
    });
}