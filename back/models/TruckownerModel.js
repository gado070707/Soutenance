module.exports = sequelize.define('truckowner', {    
    user: {
        type: Sequelize.INTEGER,
        field: "user",
        allowNull: false,
    },
    siret: {
        type: Sequelize.STRING,
        field: "siret",
        allowNull: false,
    },
    active: {
        type: Sequelize.BOOLEAN,
        field: "active",
        allowNull: true,
    },

});