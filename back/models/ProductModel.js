module.exports = sequelize.define('products.js', {    
    name: {
        type: Sequelize.STRING,
        field: "name",
        allowNull: true,
    },
    price: {
        type: Sequelize.STRING,
        field: "price",
        allowNull: true,
    },
    type: {
        type: Sequelize.INTEGER,
        field: "type",
        allowNull: true,
    },
    category: {
        type: Sequelize.INTEGER,
        field: "category",
        allowNull: true,
    },
    truck: {
        type: Sequelize.INTEGER,
        field: "truck",
        allowNull: true,
    },
    description: {
        type: Sequelize.TEXT,
        field: "description",
        allowNull: true,
    },
    active: {
        type: Sequelize.INTEGER,
        field: "active",
        allowNull: true,
    },
    

});