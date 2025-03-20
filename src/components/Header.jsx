import React from "react";
import {Link, useLocation, useNavigate} from "react-router-dom";
import {useAuth} from "../utils/AuthContext.jsx";


const Header = () => {
	const location = useLocation();
	const navigate = useNavigate();
	const {user, logout} = useAuth();

	const isSpecialPage = ['/order', '/thank-you'].includes(location.pathname);
	const noHeader = ['/login', '/register'].includes(location.pathname);

	const scrollToSection = (sectionId) => {
		if (location.pathname === '/') {
			const section = document.getElementById(sectionId);
			if (section) {
				const offset =
					section.getBoundingClientRect().top +
					window.scrollY -
					window.innerHeight / 2 +
					section.offsetHeight / 2;
				window.scrollTo({top: offset, behavior: 'smooth'});
			}
		} else {
			navigate('/', {state: {scrollTo: sectionId}});
		}
	};

	if (noHeader) {
		return null;
	}

	return (
		<header
			className={`container mx-auto text-white py-8 flex justify-between items-center  bg-white`}>

			<Link to='/'><img src='/image%201.png' alt='Logo'
			                  className='w-45'/></Link>


			<nav className='flex items-center gap-10 text-black font-medium  '>

				<Link to='/' className='hover:underline  uppercase '>
					Главная
				</Link>
				<button onClick={() => scrollToSection("about")}
				        className="hover:underline cursor-pointer uppercase">
					О компании
				</button>
				<button onClick={() => scrollToSection("service")}
				        className="hover:underline cursor-pointer uppercase">
					Сервисный центр
				</button>
				<Link to='/calculator' className='hover:underline uppercase'>
					Калькулятор
				</Link>
				<button onClick={() => scrollToSection("contacts")}
				        className="hover:underline cursor-pointer uppercase">
					Контакты
				</button>
			</nav>
			<div className="flex space-x-4">
				{
					user ? (
						<button
							className="text-black font-semibold border-2 border-black px-3 py-1 rounded-full hover:bg-gray-500/40 cursor-pointer"
							onClick={logout}>Выйти</button>
					) : (
						<>
							<Link to="/login"
							      className="text-black font-medium px-8 py-2 rounded-full hover:bg-gray-400/40 border border-gray-700 uppercase flex items-center justify-center ">
								Войти
							</Link>
							<Link to="/login"
							      className="text-white bg-black font-medium px-5 py-1 rounded-full hover:bg-gray-700 border border-gray-700 uppercase flex items-center justify-center ">
								Зарегистрироваться
							</Link>
						</>
					)
				}
			</div>
		</header>


	);
};

export default Header;
