<<<<<<< HEAD
import mongoose from 'mongoose'

const Schema = mongoose.Schema

const UserSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  address: {
    type: String
  },
  pubKey: {
    type: String
  }
})

export default mongoose.model('users', UserSchema)
=======
import mongoose from 'mongoose'

const Schema = mongoose.Schema

const UserSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  address: {
    type: String
  },
  pubKey: {
    type: String
  },
  lovely: {
    type: String,
    required: false
  }
})

export default mongoose.model('users', UserSchema)
>>>>>>> 569399a5678910ba65d79ab5facc110b23e6d7c9
