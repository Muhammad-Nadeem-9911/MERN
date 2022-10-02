const mongoose = require('mongoose');

const ConnectDatabase=()=>{

    mongoose.connect(process.env.DB_URI2).then((data)=>{
        console.log(`MongoDB is connected with server ${data.connection.host}` )
    })

}

module.exports= ConnectDatabase