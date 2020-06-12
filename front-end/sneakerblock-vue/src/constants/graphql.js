import gql from 'graphql-tag'

export const CREATE_USER_MUTATION = gql`
  mutation createUser($email: String!, $password: String!, $name: String!, $address: String!, $pubkey: String!) {
    createUser(input: [{ email: $email, password: $password, name: $name, address: $address, pubkey: $pubkey }]) {
      _id
      email
      password
      name
      address
      pubkey
    }
  }
`
