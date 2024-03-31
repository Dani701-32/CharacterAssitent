import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from "fastify";
import { CreateCharacterController } from "./controllers/CreateCharacterController";
import { ListCharactersController } from "./controllers/ListCharactersController";
import { DeleteCharacterController } from "./controllers/DeleteCharacterController";

export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions) {
    fastify.get('/test', async (request: FastifyRequest, reply: FastifyReply) => {
        return { ok: true }
    })
    fastify.post('/character', async (request: FastifyRequest, reply: FastifyReply) => {
        return new CreateCharacterController().handle(request, reply)
    })
    fastify.get('/list-characters', async (request: FastifyRequest, reply: FastifyReply) => {
        return new ListCharactersController().handle(request, reply)
    })
    fastify.delete('/character', async (request: FastifyRequest, reply: FastifyReply) => {
        return new DeleteCharacterController().handle(request, reply)
    })
}