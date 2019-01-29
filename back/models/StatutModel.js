module.exports = sequelize.define('statuts', {    
    name: {
        type: Sequelize.STRING,
        field: "name",
        allowNull: true
    },
    active: {
        type: Sequelize.INTEGER,
        field: "active",
        allowNull: true,
    },


});