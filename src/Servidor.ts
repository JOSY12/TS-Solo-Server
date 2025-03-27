import Express, { json, urlencoded } from 'express'
import cors from 'cors'
import morgan from 'morgan'
const servidor = Express()

servidor.use(cors())
servidor.use(morgan('dev'))

servidor.use(json())

servidor.listen(3001, () => {
  console.log('servidor en linea en puerto', 3001)
})
