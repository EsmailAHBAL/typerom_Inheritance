import * as express from 'express'
import deviceRoute from './route/deviceRoute'
const app =express()

app.use(express.json())
app.use('/api/device',deviceRoute)
export default app