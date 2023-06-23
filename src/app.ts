import express, { Request, Response } from 'express'
import cors from 'cors'
import 'dotenv/config'

import { registerController, profileController, loginController } from './controllers'


const app = express()
const port = process.env.DEFAULT_PORT

app.use(express.json())

app.use(cors({
  origin: '*'
}));

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})

app.post(`/api/${process.env.REGISTER_ENDPOINT}`, async (req: Request, res: Response) => {
  const response = await registerController.registerNewProfile(req)
  res.json(response)
})

app.get(`/api/${process.env.PROFILE_ENDPOINT}`, async (req: Request, res: Response) => {
  const response = await profileController.getProfile(req)
  res.json(response)
})

app.post(`/api/${process.env.LOGIN_ENDPOINT}`, async (req: Request, res: Response) => {
  const response = await loginController.login(req)
  res.json(response)
})

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
})
