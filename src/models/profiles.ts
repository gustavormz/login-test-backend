import { Schema, model } from 'mongoose'

interface IProfileSchema {
  email: string
  password: string
  name: string
}

const profileSchema = new Schema<IProfileSchema>({
  email: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  password: { type: String, required: true },
})

const Profile = model('profilestest', profileSchema)

export default Profile

export type {
  IProfileSchema
}
