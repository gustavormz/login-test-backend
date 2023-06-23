import { Request } from 'express'

import { getProfileByEmail } from '../services/profiles'
import { validateToken } from '../services/auth'

import { buildErrorResponse, buildSuccessResponse } from '../middleware/response'

const getProfile = async ({
  headers,
}: Request) => {
  try {
    const { email } = validateToken(headers.authorization)
    const profile = await getProfileByEmail(email)
    return buildSuccessResponse({ codeName: 'DEFAULT', data: profile })
  } catch (error) {
    return buildErrorResponse({ codeName: error.type || '' })
  }
}

export default {
  getProfile,
}
