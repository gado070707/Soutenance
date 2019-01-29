module.exports = sequelize.define('users', {    
    name: {
        type: Sequelize.STRING,
        field: "name",
        allowNull: false,
    },
    password: {
        type: Sequelize.STRING,
        field: "password",
        allowNull: false,
    },
    mail: {
        type: Sequelize.STRING,
        field: "mail",
        allowNull: false,
        unique: true,
    },
    telephone: {
        type: Sequelize.STRING,
        field: "telephone",
        allowNull: false,
        unique: true,
    },
    role : {
        type:Sequelize.INTEGER,
        field: "role",
        allowNull:false,
    },
    active: {
        type: Sequelize.BOOLEAN,
        field: "active",
        allowNull: true,
    },
    entreprise:{
        type:Sequelize.STRING,
        field:"entreprise",
        allowNull : true
    },
    created_at:{
        type:Sequelize.DATE,
        field:"created_at",
        allowNull : true
    },
    updated_at:{
        type:Sequelize.DATE,
        field:"updated_at",
        allowNull : true
    },
});

