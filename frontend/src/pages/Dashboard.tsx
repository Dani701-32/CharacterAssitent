import { Link } from "react-router-dom";

export default function Dashboard() {
	return (
		<div className="grid gap-4 grid-cols-3">
			<Link to={'characters'} className="bg-red-500 h-60">Universo 1</Link>
			<Link to={'characters'} className="bg-red-500 h-60">Universo 2</Link>
			<Link to={'characters'} className="bg-red-500 h-60">Universo 3</Link>
			<Link to={'characters'} className="bg-red-500 h-60">Universo 4</Link>
			<Link to={'characters'} className="bg-red-500 h-60">Universo 5</Link>
			<Link to={'characters'} className="bg-red-500 h-60">Universo 6</Link>
		</div>
	);
}
