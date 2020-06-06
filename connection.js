const mongoose = require('mongoose')

const uri = process.env.MONGO_URI

const connectDB = async () => {
  await mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  console.log('DB is up')
}

module.exports = connectDB