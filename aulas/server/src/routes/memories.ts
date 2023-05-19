import { FastifyInstance } from "fastify";
import { prisma } from "../lib/prisma";
import {z} from "zod"

export async function memoriesRoutes(app: FastifyInstance){
    // start
    app.get('/memories',  async () => {
        const memories = await prisma.memory.findMany({
            orderBy:{
                createdAt: 'asc',
            }
        })
        return memories.map(memorie =>{
            return{
                id: memorie.id,
                coverurl: memorie.coverUrl,
                excerpt: memorie.content.substring(0, 115).concat('...')
            }
        })
  })

    //detalhes
    app.get('/memories/:id',  async (resquest) => {
        //const {id} = resquest.params
         
        const paramsSchema = z.object({
            id: z.string().uuid(),

        })
        const {id} = paramsSchema.parse(resquest.params)

        const memory =  await prisma.memory.findUniqueOrThrow({
            where: {
                id,

            }
        })
        return memory
  })

    //criação
  app.post('/memories',  async (resquest) => {
    const bodySchema = z.object({
        content: z.string(),
        coverUrl: z.string(),
        isPublic: z.coerce.boolean().default(false),

    })
    const {content, coverUrl ,isPublic} = bodySchema.parse(resquest.body)
    
    const memory = await prisma.memory.create({
        data: {
            content,
            coverUrl,
            isPublic,
            userId: '9138cbad-b921-4433-91d0-503fabcec632'
        }
    })
    return memory
  })

  //atualizaçaõ
  app.put('/memories/:id',  async (resquest) => {

    const paramsSchema = z.object({
        id: z.string().uuid(),

    })
    const {id} = paramsSchema.parse(resquest.params)


    const bodySchema = z.object({
        content: z.string(),
        coverUrl: z.string(),
        isPublic: z.coerce.boolean().default(false),

    })
    const {content, coverUrl ,isPublic} = bodySchema.parse(resquest.body)
    
    const memory = await prisma.memory.update({
        where: {
            id,
        },

        data:{
            content,
            coverUrl,
            isPublic
        }

    })
    return memory
  })

  app.delete('/memories/:id',  async (resquest) => {
    //const {id} = resquest.params
     
    const paramsSchema = z.object({
        id: z.string().uuid(),

    })
    const {id} = paramsSchema.parse(resquest.params)

     await prisma.memory.delete({
        where: {
            id,

        }
    })
})
}