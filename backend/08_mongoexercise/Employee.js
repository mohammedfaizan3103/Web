import mongoose from "mongoose"

let schema = mongoose.Schema({
    name: String,
    salary: Number,
    language: String,
    City: String,
    isManager: Boolean
})

export const Employee = mongoose.model("Employee", schema)