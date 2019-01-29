const ProductCategories = require('../models/Products_categoryModel');

//  Appels de la BDD

exports.create =(data) => {
    return ProductCategories.create({
        name: data.name,       
        active: true
    });
}



exports.find = (attribut) => {
    return ProductCategories.findOne({
        where: attribut 
    });
}

exports.findAll = data => {
    return ProductCategories.findAll();
}

exports.delete = (id) => {
    return ProductCategories.destroy({
        where: { id: id }
    });
}

exports.update = (data) => {
    return ProductCategories.update(data, { 
        where: { id: data.id } 
    });
}