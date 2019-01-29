module.exports = sequelize.define('adresse', {    
    streetnumber: {
        type: Sequelize.STRING,
        field: "streetnumber",
        allowNull: true,
    },
    streetname: {
        type: Sequelize.STRING,
        field: "streetname",
        allowNull: true,
    },
    zipcode: {
        type: Sequelize.STRING,
        field: "zipcode",
        allowNull: true,
    },
    city: {
        type: Sequelize.STRING,
        field: "city",
        allowNull: true,
    },
    active: {
        type: Sequelize.INTEGER,
        field: "active",
        allowNull: true,
    },


});