const Role = require('../models/RoleModel');

//  Appels de la BDD

exports.create =(data) => {
    return Role.create({
        role: data.role,       
        active: true
    });
}



exports.find = (attribut) => {
    return Role.findOne({
        where: attribut 
    });
}

exports.findAll = data => {
    return Role.findAll();
}

exports.delete = (id) => {
    return Role.destroy({
        where: { id: id }
    });
}

exports.update = (data) => {
    return Role.update(data, { 
        where: { id: data.id } 
    });
}