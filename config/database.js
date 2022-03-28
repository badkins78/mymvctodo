const mongoose = require('mongoose')

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.DB_STRING)
    console.log('Connected to MongoDB')
    }catch(err){
      console.log(err)
    }
}

module.exports = connectDB