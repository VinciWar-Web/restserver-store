const { request, response } = require('express')
const jwt = require('jsonwebtoken')


const validateJWT = ( req = request, res = response, next ) => {

    const token = req.header('x-token')

    if( !token ){
        return res.status(401).json({
            msg: 'Se requiere un token de acceso para acceder a este recurso'
        })
    }

    try {

        jwt.verify( token, process.env.SECRET_OR_PRIVATE_KEY )

        next()
        
    } catch (error) {

        console.log(error)

        res.status(401).json({
            msj: 'Token no válido'
        })

    }
}

module.exports = {
    validateJWT
}