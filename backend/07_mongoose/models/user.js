import mongoose from "mongoose"

let schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: Number,
    createdAt: {    
        type: Date,
        immutable: true,
        default: Date.now()
    },
    hobbies: [String],
    friend: mongoose.SchemaTypes.ObjectId,
    address: {
        house_no: Number,
        street: String
    }
})
const user = mongoose.model("User", schema)
export const User = user;
