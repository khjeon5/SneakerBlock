import gql from 'graphql-tag'

const CREATE_USER_MUTATION = gql`
  mutation createUser($email: String!, $password: String!, $pubkey: String!, $name: String!, $address: String!) {
    createUser(input: { email: $email, password: $password, address: $address, name: $name, pubKey: $pubkey }) {
      _id
      email
      password
      address
      name
      pubKey
    }
  }
`
const GET_USER_QUERY = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      pubKey
    }
  }
`

export { CREATE_USER_MUTATION, GET_USER_QUERY }
