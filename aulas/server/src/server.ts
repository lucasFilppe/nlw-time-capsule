import fastify from 'fastify'
import { memoriesRoutes } from './routes/memories'
import cors from '@fastify/cors'

const app = fastify()

app.register(cors,{
  origin: true,
})

app.register(memoriesRoutes)

// criando api, servidor
app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('HTTP SERVER RUUNINN http://localhost:3333')
  })
