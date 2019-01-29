module.exports = sequelize.define('lignescartes', {    
    truck: {
        type: Sequelize.INTEGER,
        field: "truck",
        allowNull: true,
    },
    product: {
        type: Sequelize.INTEGER,
        field: "product",
        allowNull: true,
    },
    active: {
        type: Sequelize.INTEGER,
        field: "active",
        allowNull: true,
    },

});