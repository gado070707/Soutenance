const Adresse = require('../models/AdresseModel');

//  Appels de la BDD

exports.create =(data) => {
    return Adresse.create({
        streetnumber: data.streetnumber,
        streetname: data.streetname,
        zipcode: datazipcode,
        city: data.city,        
        active: true
    });
}



exports.find = (attribut) => {
    return Adresse.findOne({
        where: attribut 
    });
}

exports.findAll = data => {
    return Adresse.findAll();
}

exports.delete = (id) => {
    return Adresse.destroy({
        where: { id: id }
    });
}

exports.update = (data) => {
    return Adresse.update(data, { 
        where: { id: data.id } 
    });
}