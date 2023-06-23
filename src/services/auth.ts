import jwt  from 'jsonwebtoken'

import { MAP_ERROR_BY_CODE_NAME } from '../constants'

const validateToken = (token: string) => {
  try {
    const [type, tokenValue] = token.split(' ')
    if (type !== 'Bearer') {
      throw MAP_ERROR_BY_CODE_NAME.AUTH_ERROR
    }
    const tokenDecoded = jwt.verify(tokenValue, process.env.AUTH_SECRET_KEY_VALUE)
    if (!tokenDecoded) {
      throw MAP_ERROR_BY_CODE_NAME.AUTH_ERROR
    }
    console.log('TOKEN DECODED', tokenDecoded)
    return tokenDecoded as { email: string }
  } catch (error) {
    throw error
  }
}

const signToken = (email: string) => {
  try {
    const token = jwt.sign({ email }, process.env.AUTH_SECRET_KEY_VALUE)
    return token
  } catch (error) {
    throw error
  }
}

export {
  validateToken,
  signToken
}

