const mongoose = require('mongoose');

mongoose.set('strictQuery', false);

mongoose.connect("mongodb+srv://kennie:869480Ak@cluster0.zkjbfkp.mongodb.net/?retryWrites=true&w=majority",{

}).then(()=>{
    console.log(`connection successful`);
}).catch((e)=>{
    console.log(`no connection`);
})