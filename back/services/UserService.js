const User = require('../models/UserModel');
const bcryptPassword = require('../modules/bcrypt-password');

//  Appels de la BDD

function create(data) {
    return User.create({
        name: data.name,
        password: data.password,
        mail: data.mail,
        telephone: data.tel,
        role: 2,
        entreprise: data.entreprise,
        active: true
    });
}

exports.register = data => {
    return bcryptPassword.hash(data.password).then(
        hash => {
            data.password = hash;
            return create(data);
        }
    );
}

findByMail = (attribut) => {
    return User.findOne({ 
        where: attribut 
    });
}

exports.authenticate = data => {
    return findByMail({ mail: data.mail }).then(
        
        user => {
            if(!user) {
                console.log(data.mail);

                throw new Error("User not found");
            }

            return bcryptPassword.verify(data.password, user.password).then(
                isOk => {
                    if(!isOk) {
                        throw new Error("Password invalid");
                    }
                    else {
                        return user;
                    }
                }
            );
        }
    );
}

exports.create = create;

exports.find = (attribut) => {
    return User.findOne({
        where: attribut 
    });
}

exports.findAll = data => {
    return User.findAll();
}

exports.delete = (id) => {
    return User.destroy({
        where: { id: id }
    });
}

exports.update = (data) => {
    return User.update(data, { 
        where: { id: data.id } 
    });
}