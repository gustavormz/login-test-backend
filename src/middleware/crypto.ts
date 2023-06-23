import bcrypt from 'bcrypt'

import { MAP_ERROR_BY_CODE_NAME } from '../constants'

const encryptPassword = async (password: string) => {
  try {
    const saltRounds = 8
    return await bcrypt.hash(password, saltRounds)
  } catch (error) {
    throw error
  }
}

const comparePassword = (userPassword: string, password: string) => {
  try {
    console.log(userPassword, password)
    const isMatch = bcrypt.compareSync(userPassword, password)

    if (!isMatch) {
      throw MAP_ERROR_BY_CODE_NAME.AUTH_ERROR
    }
  } catch (error) {
    throw error
  }
}

export {
  encryptPassword,
  comparePassword,
}
