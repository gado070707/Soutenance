const Product = require('../models/ProductModel');

//  Appels de la BDD

exports.create =(data) => {
    return Product.create({
        name: data.name,
        price: data.price,
        type: data.type,
        category: data.category,        
        truck: data.truck,        
        description: data.description,        
        active: true
    });
}



exports.find = (attribut) => {
    return Product.findOne({
        where: attribut 
    });
}

exports.findAll = data => {
    return Product.findAll();
}

exports.delete = (id) => {
    return Product.destroy({
        where: { id: id }
    });
}

exports.update = (data) => {
    return Product.update(data, { 
        where: { id: data.id } 
    });
}