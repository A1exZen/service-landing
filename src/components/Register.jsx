import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../utils/AuthContext';

const Register = () => {
	const navigate = useNavigate();
	const { register } = useAuth();
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

		try {
			await register(formData.login, formData.password);
			navigate('/');
		} catch (err) {
			setError(err.message);
		}
	};

	return (
		<div className="max-w-7xl mx-auto px-4 flex lg:flex-row my-20 lg:my-0 flex-col gap-20 items-center justify-center h-screen">
			<div className='flex flex-col items-start gap-10'>
				<Link to='/'>
					<img alt='logo' src='/image%201.png' className='h-12 ' />
				</Link>
				<h1 className='text-5xl font-bold '>РЕГИСТРАЦИЯ
					В КАЛЬКУЛЯТОРЕ</h1>
				<p className='text-2xl font-semibold'>Автоматический расчет стоимости
					сервисного обслуживания техники</p>
				<p className='text-gray-600 text-lg'>Введите свои данные для входа в систему и получите
					быстрый расчет стоимости ремонта, диагностики или
					технического обслуживания вашей
					техники</p>
			</div>


			<form onSubmit={handleSubmit} className="w-full max-w-lg">
				<div className="bg-black p-12 rounded-3xl transition-all duration-150 shadow-lg">
					<div className="mb-4 text-white flex flex-col gap-2 ">
						<label>E-mail:</label>
						<input
							type="text"
							name="login"
							value={formData.login}
							onChange={handleChange}
							placeholder="e-mail"
							className="w-full p-3 rounded-lg bg-white text-gray-700"
							required
						/>
					</div>
					<div className="mb-4 text-white flex flex-col gap-2 ">
						<label>Телефон</label>
						<input
							type="tel"
							name="tel"
							value={formData.tel}
							onChange={handleChange}
							placeholder="+375 ** *** ****"
							className="w-full p-3 rounded-lg bg-white text-gray-700"
							required
						/>
					</div>
					<div className="mb-12 text-white flex flex-col gap-2 ">
						<label className="">Пароль</label>
						<input
							type="password"
							name="password"
							value={formData.password}
							onChange={handleChange}
							placeholder="******"
							className="w-full p-3 rounded-lg bg-white text-gray-700"
							required
						/>
					</div>
					<div className='w-full flex justify-center'>
						<button
							type="submit"
							className=" px-3 text-lg rounded-xl bg-white font-bold py-3 uppercase  cursor-pointer mb-2"
						>
							Зарегистрироваться
						</button>
					</div>
					<div className="w-full text-center">
						<Link to="/login" className="text-sm uppercase underline text-center mt-2 text-gray-400 hover:text-gray-600">
							У меня уже есть аккаунт
						</Link>
					</div>
				</div>
				{error && <p className="text-red-500 text-center mb-4">{error}</p>}

			</form>
		</div>
	)
};

export default Register;