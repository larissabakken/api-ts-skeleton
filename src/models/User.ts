import { Schema } from 'mongoose'
import mongoose from "mongoose";

const UserModel = new Schema({
  name: String,
  age: Number,
  email: String,
  password: String
},
{
  timestamps: true

})

export default mongoose.model('User', UserModel)