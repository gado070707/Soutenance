module.exports = sequelize.define('trucks', {    
    name: {
        type: Sequelize.STRING,
        field: "name",
        allowNull: false,
    },
    truckowner: {
        type: Sequelize.INTEGER,
        field: "truckowner",
        allowNull: false,
    },
    precommande: {
        type: Sequelize.BOOLEAN,
        field: "precommande",
        allowNull: false,
    },
    paiement: {
        type: Sequelize.BOOLEAN,
        field: "paiement",
        allowNull: false,
    },
    active: {
        type: Sequelize.BOOLEAN,
        field: "active",
        allowNull: true,
    },

});