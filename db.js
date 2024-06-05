const dbs = require("mongoose")
const {Schema,model} = dbs
const {isEmail} = require("validator")
require('dotenv').config()

dbs.connect(process.env.MY_DB)

const subscriber = new Schema({
 email : {
    type: String,
    lowercase: true,
    validate : [isEmail,"THE EMAIL YOU ENTERED IS NOT CORRECT"]
 }
},{timestamps:true})

const newSub = model("portfolio",subscriber)
module.exports = newSub
