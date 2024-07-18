import mongoose from "mongoose"
import { User } from "./models/user.js"

try {
    let conn = await mongoose.connect('mongodb://localhost:27017/TestDB2')
    console.log('Connected to MongoDB!')
  } catch (error) {
    console.error('Error connecting to MongoDB:', error)
  }
  

