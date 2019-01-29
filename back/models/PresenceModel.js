module.exports = sequelize.define('presence', {    
    day: {
        type: Sequelize.STRING,
        field: "day",
        allowNull: true,
    },
    truck: {
        type: Sequelize.INTEGER,
        field: "truck",
        allowNull: true,
    },
    adresse: {
        type: Sequelize.INTEGER,
        field: "adresse",
        allowNull: true,
    },
    active: {
        type: Sequelize.INTEGER,
        field: "active",
        allowNull: true,
    },


});