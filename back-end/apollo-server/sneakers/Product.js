import mongoose from 'mongoose'

const Schema = mongoose.Schema

const ProductSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: String
  },
  img: {
    type: String
  },
  seller: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  color: {
    type: String
  },
  date: {
    type: String
  },
  validator: {
    type: String
  },
  manufac: {
    type: String
  },
  lovely: {
    type: String
  }
})

export default mongoose.model('product', ProductSchema)
