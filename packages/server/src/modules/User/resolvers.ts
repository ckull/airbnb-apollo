
import { User } from '../../entity/User'

import { UserArgs } from './interface'

const resolvers = {
  Query: {
    users: async (parent: any, args: UserArgs) => {
        return await User.find()
    },
    user: async (parent: any, args: UserArgs) => {
      return
    }
  },
  Mutation: {
    addUser: async (parent: any, args: UserArgs)=> {
      let { email, password } = args
      try {
        const user = User.create({
          email, 
          password
        })
        await User.save(user)
        return true
      } catch(err)  {
        return err
      }
    }
  }
};

export default resolvers