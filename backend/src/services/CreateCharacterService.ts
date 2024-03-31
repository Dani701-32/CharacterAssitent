import prismaClient from "../prisma";

interface CreateCharacterProps {
    name: string
    height: number
}

class CreateCharacterService {
    async execute({ name, height }: CreateCharacterProps) {

        if (!name || !height) {
            throw new Error("Preencha todos os campos")
        }

        const character = await prismaClient.character.create({
            data: {
                name,
                height
            }
        })

        return character
    }
}
export { CreateCharacterService }