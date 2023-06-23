import { Request } from 'express'

import { createProfile } from '../services/profiles'

import { buildErrorResponse, buildSuccessResponse } from '../middleware/response'

const registerNewProfile = async ({
  body
}: Request) => {
  try {
    await createProfile(body)
    return buildSuccessResponse({ codeName: 'CREATED' })
  } catch (error) {
    console.error(error)
    return buildErrorResponse({ codeName: error.type || '' })
  }
}

export default {
  registerNewProfile,
}
