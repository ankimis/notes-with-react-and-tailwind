const mongoose=require('mongoose');

const mongoURI="mongodb://localhost:27017/inotebook"
 const  connecttomongo=()=>{
    mongoose.connect(mongoURI)
 }
 module.exports =connecttomongo;
