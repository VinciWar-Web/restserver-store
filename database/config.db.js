const mongoose = require('mongoose')

const dbConnection = async() => {

    try {

        await mongoose.connect( 'mongodb+srv://userStore:iNfTg1KCKpk1nhmV@clusterstore.guarp6q.mongodb.net/storeDB' )

        console.log('Base de datos online')
        
    } catch (error) {
        console.log({error})
        throw new Error('Error al iniciar la base de datos')
    }

}

module.exports = {
    dbConnection
}