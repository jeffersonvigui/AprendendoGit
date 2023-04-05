const mongoose = require('mongoose');

async function startDB(){
   await mongoose.connect('mongodb+srv://cruzeiroapi:346192@cluster0.rsxqn0z.mongodb.net/test')
}
module.exports = startDB;