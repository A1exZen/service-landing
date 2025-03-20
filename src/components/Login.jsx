import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../utils/AuthContext';
import { motion } from 'framer-motion';

const Login = () => {
	const navigate = useNavigate();
	const { login } = useAuth();
	const [formData, setFormData] = useState({
		login: '',
		tel: '',
		password: '',
	});
	const [error, setError] = useState('');

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setError('');

		if (!formData.login || !formData.password) {
			setError('Пожалуйста, заполните все поля.');
			return;
		}

		const success = await login(formData.login, formData.password);
		if (success) {
			navigate('/');
		} else {
			setError('Неверный логин или пароль.');
		}
	};

	const fadeInLeft = {
		hidden: { opacity: 0, x: -50 },
		visible: {
			opacity: 1,
			x: 0,
			transition: { duration: 0.8, ease: 'easeInOut' },
		},
	};

	const fadeInLogo = {
		hidden: { opacity: 0, scale: 0.8 },
		visible: {
			opacity: 1,
			scale: 1,
			transition: { duration: 0.8, ease: 'easeOut' },
		},
	};

	const fadeInError = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.5, ease: 'easeOut' },
		},
	};

	return (
		<motion.div
			className="max-w-7xl mx-auto px-4 flex lg:flex-row my-20 lg:my-0 flex-col gap-20 items-center justify-center h-screen"
			initial="hidden"
			animate="visible"
			variants={fadeInLeft}
		>
			{/* Текстовая часть */}
			<motion.div className="flex flex-col items-start gap-10" variants={fadeInLeft}>
				<Link to="/">
					<motion.img
						alt="logo"
						src="/image%201.png"
						className="h-12"
						variants={fadeInLogo}
					/>
				</Link>
				<motion.h1 className="text-5xl font-bold" variants={fadeInLeft}>
					ВХОД В КАЛЬКУЛЯТОР
				</motion.h1>
				<motion.p className="text-2xl font-semibold" variants={fadeInLeft}>
					Автоматический расчет стоимости сервисного обслуживания техники
				</motion.p>
				<motion.p className="text-gray-600 text-lg" variants={fadeInLeft}>
					Введите свои данные для входа в систему и получите быстрый расчет
					стоимости ремонта, диагностики или технического обслуживания вашей
					техники
				</motion.p>
			</motion.div>

			{/* Форма */}
			<form onSubmit={handleSubmit} className="w-full max-w-lg">
				<div
					className="bg-black p-12 rounded-3xl transition-all duration-150 shadow-lg"

				>
					<motion.div className="mb-4 text-white flex flex-col gap-2" variants={fadeInLeft}>
						<label>E-mail:</label>
						<motion.input
							type="text"
							name="login"
							value={formData.login}
							onChange={handleChange}
							placeholder="e-mail"
							className="w-full p-3 rounded-lg bg-white text-gray-700"
							required
							whileFocus={{ scale: 1.02 }}
							transition={{ duration: 0.2, ease: 'easeOut' }}
						/>
					</motion.div>

					<motion.div className="mb-12 text-white flex flex-col gap-2" variants={fadeInLeft}>
						<label>Пароль:</label>
						<motion.input
							type="password"
							name="password"
							value={formData.password}
							onChange={handleChange}
							placeholder="******"
							className="w-full p-3 rounded-lg bg-white text-gray-700"
							required
							whileFocus={{ scale: 1.02 }}
							transition={{ duration: 0.2, ease: 'easeOut' }}
						/>
					</motion.div>

					<motion.div className="w-full flex justify-center" variants={fadeInLeft}>
						<motion.button
							type="submit"
							className="px-15 text-lg rounded-xl bg-white font-bold py-3 uppercase cursor-pointer mb-2"
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							transition={{ duration: 0.3, ease: 'easeOut' }} // Более плавная анимация для кнопки
						>
							Войти
						</motion.button>
					</motion.div>

					<motion.div className="w-full text-center" variants={fadeInLeft}>
						<Link
							to="/register"
							className="text-sm uppercase underline text-center mt-2 text-gray-400 hover:text-gray-600"
						>
							Зарегистрироваться
						</Link>
					</motion.div>
				</div>

				{error && (
					<motion.p
						className="text-red-500 text-center mb-4"
						variants={fadeInError}
						initial="hidden"
						animate="visible"
					>
						{error}
					</motion.p>
				)}
			</form>
		</motion.div>
	);
};

export default Login;