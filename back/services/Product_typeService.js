const ProductTypes = require('../models/Product_typeModel');

//  Appels de la BDD

exports.create =(data) => {
    return ProductTypes.create({
        name: data.name,             
        active: true
    });
}

exports.find = (attribut) => {
    return ProductTypes.findOne({
        where: attribut 
    });
}

exports.findAll = data => {
    return ProductTypes.findAll();
}

exports.delete = (id) => {
    return ProductTypes.destroy({
        where: { id: id }
    });
}

exports.update = (data) => {
    return ProductTypes.update(data, { 
        where: { id: data.id } 
    });
}