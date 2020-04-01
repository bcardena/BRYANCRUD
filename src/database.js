const mongoose = require ('mongoose');

mongoose.connect('mongodb://localhost/BDCRUDBRYAN',{
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false
})
.then(db => console.log('Se conectó a la BD'))
.catch(err => console.error(err));