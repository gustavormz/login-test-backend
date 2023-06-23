import profileRepository from '../repositories/profiles'

import validationMiddleware from '../middleware/validation'
import { encryptPassword } from '../middleware/crypto'

import { MAP_ERROR_BY_CODE_NAME } from '../constants'

const createProfile = async (profile) => {
  try {
    validationMiddleware.validateProfile(profile)

    const newProfile = { ...profile }

    newProfile.password = await encryptPassword(profile.password)

    await profileRepository.createNewProfile(newProfile)
  } catch (error) {
    if (error.code === 11000) {
      throw MAP_ERROR_BY_CODE_NAME.DUPLICATED_PROFILE
    }
    throw error
  }
}


interface IGetProfileByEmailResponse {
  name: string
  email: string
  password?: string
}

const getProfileByEmail = async (email: string, returnPassword = false) => {
  try {
    const profile = await profileRepository.getProfileByEmail(email)

    if (!profile) {
      throw MAP_ERROR_BY_CODE_NAME.NOT_FOUND
    }

    const response: IGetProfileByEmailResponse = {
      name: profile.name,
      email: profile.email
    }

    if (returnPassword) {
      response.password = profile.password
    }

    return response
  } catch (error) {
    throw error
  }
}

export {
  createProfile,
  getProfileByEmail,
}
