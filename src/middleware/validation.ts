import { MAP_ERROR_BY_CODE_NAME } from '../constants'

import { IProfileSchema } from '../models/profiles'

const validateProfile = (profile: IProfileSchema) => {
  try {
    if (!profile.name || !profile.password || !profile.email) {
      throw MAP_ERROR_BY_CODE_NAME.VALIDATION
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(profile.email)) {
      throw MAP_ERROR_BY_CODE_NAME.VALIDATION
    }
    return { ...profile }
  } catch (error) {
    throw error
  }
}

export default {
  validateProfile,
}
