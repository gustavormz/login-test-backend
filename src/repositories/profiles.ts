import mongoose from 'mongoose'

import ProfileSchema, { IProfileSchema } from '../models/profiles'

mongoose.connect(process.env.DATABASE_BASE_URL, {})

const createNewProfile = async (profile: IProfileSchema) => {
  try {
    const newProfile = new ProfileSchema(profile)
    await newProfile.save()
  } catch (error) {
    console.error(error)
    throw error
  }
}

const getProfileByEmail = async (email: string) => {
  try {
    const profile = await ProfileSchema.findOne({ email })
    return profile
  } catch (error) {
    console.error(error)
    throw error
  }
}

export default {
  createNewProfile,
  getProfileByEmail,
}
