module.exports = sequelize.define('truckowner', {    
    user: {
        type: Sequelize.INTEGER,
        field: "user",
        allowNull: true,
    },
    siret: {
        type: Sequelize.STRING,
        field: "siret",
        allowNull: true,
    },
    active: {
        type: Sequelize.BOOLEAN,
        field: "active",
        allowNull: true,
    },
});