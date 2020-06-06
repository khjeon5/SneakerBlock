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
  image: {
    type: String
  }
})

export default mongoose.model('product', ProductSchema)
