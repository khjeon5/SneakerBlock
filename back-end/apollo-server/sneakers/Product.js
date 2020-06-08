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
  }
})

export default mongoose.model('product', ProductSchema)
