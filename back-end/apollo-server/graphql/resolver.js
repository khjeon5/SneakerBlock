//var User = require('../sneakers/User');
import Product from '../sneakers/Product'
import User from '../sneakers/User'


const resolvers = {
  Query: {
    hello(root, args, context) {
      return 'hello apollo-server-express!!!'
    },
    async emailVerify(root, { email }) {
      if (await User.findOne({ email }) === null) {
        return true
      } else {
        return false
      }

      // return await User.findOne({ email })
    },
    async allUsers() {
      return await User.find()
    },
    async getUser(root, { _id }) {
      return await User.findById(_id)
    },
    async allProduct() {
      return await Product.find()
    },
    async getProduct(){
      return await Product.findById(_id)
    },
  },
  Mutation: {
    async createUser(root, { input }) {
      return await User.create(input)
    },
    async updateUser(root, { _id, input }) {
      return await User.findOneAndUpdate({ _id }, input, { new: true })
    },
    async deleteUser(root, { _id }) {
      return await User.findOneAndDelete({ _id })
    },
    async createProduct(root, { input }) {
      return await Product.create(input)
    },
    async updateProduct(root, { _id, input }) {
      return await Product.findOneAndUpdate({ _id }, input, { new: true })
    },
    async deleteProduct(root, { _id }) {
      return await Product.findOneAndDelete({ _id })
    },
    async login(_, { email, password }){
      console.log(email)
      console.log(password)
      var correctUser ={}
      await User.find({}, (err, users)=>{
        users.forEach((user)=>{
          if(user.email===email && user.password===password){
            correctUser = user
          }else{
            correctUser = 'null'
          }
        })
      });
      // console.log(correctUser)
      return correctUser

    },
  },
}
export default resolvers
