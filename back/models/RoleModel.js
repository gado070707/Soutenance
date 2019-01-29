module.exports = sequelize.define('roles', {    
    role: {
        type: Sequelize.STRING,
        field: "role",
        allowNull: true,
    },
    active: {
        type: Sequelize.INTEGER,
        field: "active",
        allowNull: true,
    },


});