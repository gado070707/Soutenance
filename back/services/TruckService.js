const Truck = require('../models/TruckModel');

//  Appels de la BDD

exports.create = (data) => {
    return Truck.create({
        name: data.nametruck,
        truckowner: data.truckowner,
        precommande: data.precom,
        paiement: data.prepaie,
        image: data.imgtruck,
        logo: data.logotruck,
        histoire: data.txttruck,
        active: true
    });
}

exports.find = (attribut) => {
    return Truck.findOne({
        where: attribut 
    });
}

exports.findAll = data => {
    return Truck.findAll();
}

exports.findAllByTruckowner = (attribut) => {
    return Truck.findAll({
        where: attribut 
    });
}

exports.delete = (id) => {
    return Truck.destroy({
        where: { id: id }
    });
}

exports.update = (data, id) => {
    return Truck.update({
        name: data.nametruck,
        truckowner: data.truckowner,
        precommande: data.precom,
        paiement: data.prepaie,
        image: data.imgtruck,
        logo: data.logotruck,
        histoire: data.txttruck,
        active: true
        }, 
        { 
            where: { id: id } 
    });
}