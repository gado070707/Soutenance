module.exports = sequelize.define('lignecommande', {    
    user: {
        type: Sequelize.INTEGER,
        field: "user",
        allowNull: true,
    },
    ligneCarte: {
        type: Sequelize.INTEGER,
        field: "ligneCarte",
        allowNull: true,
    },
    quantite: {
        type: Sequelize.INTEGER,
        field: "quantite",
        allowNull: true,
    },
    statut: {
        type: Sequelize.INTEGER,
        field: "statut",
        allowNull: true,
    },
    active: {
        type: Sequelize.INTEGER,
        field: "active",
        allowNull: true,
    },


});