const mongoose = require('mongoose');
 
mongoose.connect('mongodb://localhost/jokesDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Connection Successful'))
    .catch(err => console.log('Failed to connect to server', err));