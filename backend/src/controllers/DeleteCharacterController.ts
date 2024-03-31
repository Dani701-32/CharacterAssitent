import { FastifyRequest, FastifyReply } from "fastify";
import { DeleteCharacterService } from "../services/DeleteCharacterService";

class DeleteCharacterController {
    async handle(request: FastifyRequest, reply: FastifyReply) {
        const { id } = request.query as { id: string }

        const characterService = new DeleteCharacterService();
        const character = await characterService.execute({ id });

        reply.send(character);
    }
}


export { DeleteCharacterController }