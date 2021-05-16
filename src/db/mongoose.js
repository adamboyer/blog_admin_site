const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
}).then(() => {
    console.log('MongoDB Successfully connected', process.env.MONGODB_URL)
}).catch( (error) => {
    console.log('Error establishing MongoDB connection. Error:', error.message)
})