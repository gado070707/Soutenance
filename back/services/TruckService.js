const Truck = require('../models/TruckModel');

//  Appels de la BDD

exports.create = (data) => {
    return Truck.create({
        name: data.name,
        truckowner: data.truckowner,
        precommande: data.precommande,
        paiement: data.paiement,
        image: data.image,
        logo: data.logo,
        histoire: data.histoire,
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

exports.update = (data) => {
    return Truck.update(data, { 
        where: { id: data.id } 
    });
}