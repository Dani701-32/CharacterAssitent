import { Outlet } from "react-router-dom";
import Header from "./components/Header";

export default function App() {
	return (
		<div>
			<Header />
			<div id="detail" className="container mx-auto px-5 py-10">
				<Outlet />
			</div>
		</div>
	);
}
