import mongoose from 'mongoose'

const connectDB = async() =>{
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Successfully connected MongoDB")
    } catch (error) {
        console.log(error)
    }
}