"use server"
import Razorpay from "razorpay"
import Payments from "../models/Payments"
import User from "../models/User"
import mongoose from "mongoose"

export const initiate = async (amount, to_user_email, from_user, message) => {
    const client = await mongoose.connect('mongodb://localhost:27017/chai')
    // var instance = new Razorpay({ key_id: process.env.KEY_ID, key_secret: process.env.KEY_SECRET})

    // // instance.orders.create({
    // //     amount: amount * 100,
    // //     currency: "INR",
    // //     receipt: "receipt#1",
    // //     notes: {
    // //         key1: "value3",
    // //         key2: "value2"
    // //     }
    // // })
    // let options = {
    //     amount: Number.parseInt(amount),
    //     currency: 'INR'
    // }
    // let x = instance.orders.create(options)
    // console.log(to_user_email);
    const currentUser = await User.findOne({ username: to_user_email })
    let n = await User.findOne({_id: from_user})
    
    // console.log(JSON.stringify(currentUser));
    Payments.create({amount: amount, from_user: from_user, to_user: currentUser._id, message: message, status: true, from_name: n.name})
    return true;
}
export const fetchData = async (username) => {
    const client = await mongoose.connect('mongodb://localhost:27017/chai')
    let u_id = await User.findOne({username: username})
    let data = await Payments.find({to_user: u_id}).sort({amount: -1}).limit(10).lean()
    // console.log((data));
    return data
    
}