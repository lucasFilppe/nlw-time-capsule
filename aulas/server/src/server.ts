import fastify from 'fastify'
import { PrismaClient } from '@prisma/client'

const app = fastify()
const prisma = new PrismaClient()

// rota
app.get('/users',  async () => {
  const users = await prisma.user.findMany()
  return users 
})

// criando api, servidor
app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('HTTP SERVER RUUNINN http://localhost:3333')
  })
