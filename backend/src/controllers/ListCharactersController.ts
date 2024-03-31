import { FastifyRequest, FastifyReply } from "fastify";
import { ListCharactersService } from "../services/ListCharactersService";


class ListCharactersController {
    async handle(request: FastifyRequest, reply: FastifyReply) {
        const listCharactersService = new ListCharactersService();

        const characters = await listCharactersService.execute();

        reply.send(characters);
    }
}
export { ListCharactersController }