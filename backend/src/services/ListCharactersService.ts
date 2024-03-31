import prismaClient from "../prisma";

class ListCharactersService {
    async execute() {
        const characters = await prismaClient.character.findMany()
        return characters
    }
}
export { ListCharactersService }