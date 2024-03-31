import { FastifyRequest, FastifyReply } from "fastify";
import { CreateCharacterService } from "../services/CreateCharacterService";

//Recebe o body da requisição
class CreateCharacterController {
    async handle(request: FastifyRequest, reply: FastifyReply) {

        const { name, height } = request.body as { name: string, height: number }

        const characterService = new CreateCharacterService()
        const character = await characterService.execute({ name, height });

        reply.send(character)
    }
}

export { CreateCharacterController }