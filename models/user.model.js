const { Schema, model } = require('mongoose')

const UserSchema = Schema({
    name:{
        type: String,
        require: [true, 'El nombre es obligatorio']
    },
    mail:{
        type: String,
        require: [true, 'El correo es obligatorio'],
        unique: true
    },
    password:{
        type: String,
        require: [true, 'La contraseña es obigatoria'],
    },
    img:{
        type: String,
    },
    rol:{
        type: String,
        require: true,
        emun: ['ADMIN_ROLE', 'USER_ROLE']
    },
    state:{
        type: Boolean,
        default: true
    },
    google:{
        type: Boolean,
        default: false
    },
})

// Excluye en la respuesta la propiedad __v, password y pasa el resto
UserSchema.methods.toJSON = function(){
    const { __v, password, ...user } = this.toObject()
    return user
}

module.exports = model( 'User', UserSchema )