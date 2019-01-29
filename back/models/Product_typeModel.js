module.exports = sequelize.define('product_types', {    
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