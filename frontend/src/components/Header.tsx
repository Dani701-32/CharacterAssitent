import { BsFillPersonFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<header className="bg-gray-800 text-white shadow-md  h-16 ">
			<div className=" container mx-auto flex h-full justify-between items-center">
				<div className="text-lg font-semibold">Character Assitence</div>
				<nav className="space-x-4">
					<Link to={"/"} className="hover:text-gray-300">
						Projetos
					</Link>
				</nav>
				<div className="flex items-center space-x-2">
					<BsFillPersonFill size={30} />
					<span>Username</span>
				</div>
			</div>
		</header>
	);
};

export default Header;
