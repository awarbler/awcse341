const mongoose = require('mongoose');

const URI = "mongodb+srv://awarbler:jihduz-pytraw-0mEvmi@cse341aw.cmw2isx.mongodb.net/?retryWrites=true&w=majority"


const connectDB = async() => {
    await mongoose.connect(URI);
    console.log('db connected..!');
}

module.exports = connectDB;