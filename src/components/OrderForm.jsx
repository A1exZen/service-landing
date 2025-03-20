import React, { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import toast from "react-hot-toast";

const OrderForm = () => {
	const navigate = useNavigate();
	const [formData, setFormData] = useState({
		tel: '',
		login: '',
		text: '',
	});
	const initialFormData = {
		tel: '',
		login: '',
		text: '',
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		toast.success('Форма успешно отправлена! Мы свяжемся с вами в ближайшее время.');
		setTimeout(() => {
			setFormData(initialFormData);
		}, 1500);
	};

	return (

		<section className="max-w-7xl mx-auto px-4 flex lg:flex-row my-25  flex-col gap-20  justify-center ">
			<div className='flex flex-col items-end gap-10'>
				<h1 className='text-5xl font-bold text-end '>ФОРМА ЗАПИСИ И ОБРАТНОЙ СВЯЗИ</h1>
				<p className='text-2xl font-semibold text-end ml-30'>Наш специалист свяжется с вами для уточнения деталей</p>
			</div>


			<form onSubmit={handleSubmit} className="w-full max-w-lg">
				<div className="bg-black p-12 rounded-3xl transition-all duration-150 shadow-lg">
					<div className="mb-4 text-white flex flex-col gap-2 ">
						<label>Телефон:</label>
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
					<div className="mb-4 text-white flex flex-col gap-2 ">
						<label>Имя:</label>
						<input
							type="text"
							name="login"
							value={formData.login}
							onChange={handleChange}
							placeholder="Имя"
							className="w-full p-3 rounded-lg bg-white text-gray-700"
							required
						/>
					</div>

					<div className="mb-12 text-white flex flex-col gap-2 ">
						<label className="">Вопрос:</label>
						<textarea
							rows="4"
							name="text"
							value={formData.text}
							onChange={handleChange}
							placeholder="Вопрос..."
							className="w-full p-3 rounded-lg bg-white text-gray-700 "
							required
						/>
					</div>
					<div className='w-full flex justify-center'>
						<button
							type="submit"
							className=" px-15 text-lg rounded-xl bg-white font-bold py-3 uppercase  cursor-pointer mb-2"
						>
							Отправить
						</button>
					</div>
				</div>

			</form>
		</section>
	);
};

export default OrderForm;