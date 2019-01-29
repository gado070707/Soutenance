module.exports = sequelize.define('products_category', {    
    name: {
        type: Sequelize.STRING,
        field: "name",
        allowNull: true,
    },
    active: {
        type: Sequelize.INTEGER,
        field: "active",
        allowNull: true,
    },


});