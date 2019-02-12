const LignesCommandes = require('../models/LigneCommandeModel');

//  Appels de la BDD

exports.create =(data) => {
    return LignesCommandes.create({
        user: data.user,
        ligneCarte: data.ligneCarte,
        quantite: data.quantite,
        statut: data.statut,        
        active: true
    });
}



exports.find = (attribut) => {
    return LignesCommandes.findOne({
        where: attribut 
    });
}

exports.findAll = data => {
    return LignesCommandes.findAll();
}

exports.delete = (id) => {
    return LignesCommandes.destroy({
        where: { id: id }
    });
}

exports.update = (data) => {
    return LignesCommandes.update(data, { 
        where: { id: data.id } 
    });
}