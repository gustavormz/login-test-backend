import { Request } from 'express'

import { getProfileByEmail } from '../services/profiles'
import { signToken } from '../services/auth'

import { comparePassword } from '../middleware/crypto'

import { buildErrorResponse, buildSuccessResponse } from '../middleware/response'

const login = async ({
  query
}: Request) => {
  try {
    const profile = await getProfileByEmail(query.email.toString(), true)

    comparePassword(query.password.toString(), profile.password)

    const token = signToken(profile.email)

    return buildSuccessResponse({ codeName: 'DEFAULT', data: { token } })
  } catch (error) {
    console.error(error)
    const errorResponse = buildErrorResponse({ codeName: error.type || '' })
    console.log('ERROR FORMAT', errorResponse)
    return errorResponse
  }
}

export default {
  login,
}
