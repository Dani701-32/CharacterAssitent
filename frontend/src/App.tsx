import { useEffect, useState, useRef, FormEvent } from "react";
import { FiTrash } from "react-icons/fi";
import { api } from "./services/api";

interface CharacterProps {
	id: string;
	name: string;
	height: number;
}

export default function App() {
	const [characters, setCharacters] = useState<CharacterProps[]>([]);
	const nameRef = useRef<HTMLInputElement | null>(null);
	const heightRef = useRef<HTMLInputElement | null>(null);

	useEffect(() => {
		loadCharacters();
	}, []);

	async function loadCharacters() {
		const response = await api.get("/list-characters");
		setCharacters(response.data);
	}

	async function handleSubmit(event: FormEvent) {
		event.preventDefault();
		if (!nameRef.current?.value || !heightRef.current?.value) return;

		const response = await api.post("/character", {
			name: nameRef.current?.value,
			height: parseInt(heightRef.current?.value),
		});

		setCharacters((allCharacters) => [...allCharacters, response.data]);
		nameRef.current.value = "";
		heightRef.current.value = "";
	}

	async function handleDelete(id: string) {
		try {
			await api.delete("/character", {
				params: {
					id: id,
				},
			});

			const allCharacters = characters.filter(
				(character) => character.id !== id
			);
			setCharacters(allCharacters);
		} catch (error) {
			console.log(error);
		}
	}

	return (
		<div className="w-full min-h-screen bg-slate-400 flex justify-center px-4">
			<main className="my-10 w-full md:max-w-2xl">
				<h1 className="text-4xl font-medium text-white">
					Character Assistence
				</h1>
				<form onSubmit={handleSubmit} className="flex flex-col my-6">
					<label htmlFor="name" className="font-medium text-white">
						Nome
					</label>
					<input
						type="text"
						placeholder="Digite o nome completo"
						className="w-full mb-5 p-2 rounded"
						name="name"
						ref={nameRef}
					/>
					<label htmlFor="number" className="font-medium text-white">
						Altura
					</label>
					<input
						type="number"
						placeholder="Digite a altura (cm)"
						className="w-full mb-5 p-2 rounded"
						name="number"
						ref={heightRef}
					/>
					<input
						type="submit"
						value="Criar personagem"
						className="cursor-pointer w-full p-2 bg-gray-900 text-white font-medium"
					/>
				</form>

				<section className="flex flex-col gap-4">
					{characters.map((character) => (
						<article
							className="w-full bg-white rounded-lg p-2 relative hover:scale-110 duration-200"
							key={character.id}
						>
							<h2>
								Nome: <b>{character.name}</b>
							</h2>
							<p>Height: {character.height}cm</p>
							<button
								className="bg-red-950 w-7 h-7 flex justify-center items-center rounded-lg absolute -right-2 -top-2"
								onClick={() => handleDelete(character.id)}
							>
								<FiTrash size={18} color="#fff" />
							</button>
						</article>
					))}
				</section>
			</main>
		</div>
	);
}
