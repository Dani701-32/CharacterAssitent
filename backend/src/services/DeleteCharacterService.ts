import prismaClient from "../prisma"

interface DeleteCharacterProps {
    id: string
}

class DeleteCharacterService {
    async execute({ id }: DeleteCharacterProps) {
        if (!id) {
            throw new Error("Solicitação invalida")
        }
        console.log(typeof id);

        const findCharacter = await prismaClient.character.findFirst({
            where: {
                id: id
            }
        })

        if (!findCharacter) {
            throw new Error("Personagem invalido")
        }
        

        await prismaClient.character.delete({
            where: {
                id: findCharacter.id
            }
        })

        return { message: "Deletado com sucesso" }
    }
}
export { DeleteCharacterService }