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
  },
}
export default resolvers
