const mongoose = require('mongoose')

require('dotenv').config()

mongoose.set('strict',false);

const connectToDatabase = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB_URI + "/emailAPI", {});
        // await mongoose.connection.db.collection('emailAPI').insertOne({ example: 'data' });
        console.log("Conexión exitosa a la base de datos");
    } catch (err) {
        console.error(err);
    }
};

module.exports = connectToDatabase;