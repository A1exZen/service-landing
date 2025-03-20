import React, {useRef, useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {motion} from 'framer-motion';
import {BadgeCheck} from "lucide-react";
import OrderForm from "./OrderForm.jsx";
import {Contacts} from "./Contacts.jsx";

const Calculator = () => {
	const navigate = useNavigate();
	const resultSectionRef = useRef(null);
	const [formData, setFormData] = useState({
		brand: 'Karcher',
		equipmentType: 'Газонокосилка',
		serviceType: 'Диагностика',
		urgency: 'Обычные сроки',
	});

	const [result, setResult] = useState(null);

	const handleChange = (e) => {
		const {name, value} = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const calculateCost = () => {
		let cost = 0;

		switch (formData.brand) {
			case 'Karcher':
				cost = 100;
				break;
			case 'Husqvarna':
				cost = 150;
				break;
			case 'Gardend':
				cost = 200;
				break;
			default:
				cost = 0;
		}

		switch (formData.serviceType) {
			case 'Диагностика':
				cost += 10;
				break;
			case 'Гарантийный ремонт':
				cost += 20;
				break;
			case 'Послегарантийный ремонт':
				cost += 30;
				break;
			default:
				cost += 0;
		}

		if (formData.urgency === 'Срочно') {
			cost *= 2;
		}

		return cost;
	};

	const handleCalculate = (e) => {
		e.preventDefault();
		const calculatedCost = calculateCost();
		setResult(calculatedCost);
		if (resultSectionRef.current) {
			resultSectionRef.current.scrollIntoView({ behavior: 'smooth' });
		}
	};

	const handleClear = () => {
		setFormData({
			brand: 'Karcher',
			equipmentType: 'Газонокосилка',
			serviceType: 'Диагностика',
			urgency: 'Обычные сроки',
		});
		setResult(null);
	};

	return (
		<div className='flex flex-col'>
			<div
				className="max-w-7xl mx-auto px-4 flex lg:flex-row my-10 flex-col gap-20 items-center justify-center">
				<form onSubmit={handleCalculate}
				      className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">

					<div
						className="col-span-1 lg:col-span-2 bg-black p-12 rounded-3xl transition-all duration-150 shadow-lg ">
						<h2 className='text-white uppercase font-bold mb-4'>ввод данных о
							технике</h2>
						<div className="mb-4 text-white flex flex-col gap-2 mx-4">
							<label className='text-gray-300 uppercase'>БРЕНД:</label>
							<select
								name="brand"
								value={formData.brand}
								onChange={handleChange}
								className="w-full p-3 rounded-lg bg-white text-gray-700"
								required
							>
								<option value="Karcher">Karcher</option>
								<option value="Husqvarna">Husqvarna</option>
								<option value="Gardend">Gardend</option>
							</select>
						</div>

						<div className=" text-white flex flex-col gap-2 mb-10 mx-4">
							<label className='text-gray-300 uppercase'>Тип техники:</label>
							<select
								name="equipmentType"
								value={formData.equipmentType}
								onChange={handleChange}
								className="w-full p-3 rounded-lg bg-white text-gray-700"
								required
							>
								<option value="Газонокосилка">Газонокосилка</option>
								<option value="Триммер">Триммер</option>
								<option value="Пылесос">Пылесос</option>
							</select>
						</div>
						<h2 className='text-white uppercase font-bold mb-4'>ввод типа
							обслуживания</h2>
						<div className=" text-white flex flex-col gap-2 mb-12 mx-4">
							<label className='text-gray-300 uppercase'>Тип
								обслуживания:</label>
							<select
								name="serviceType"
								value={formData.serviceType}
								onChange={handleChange}
								className="w-full p-3 rounded-lg bg-white text-gray-700"
								required
							>
								<option value="Диагностика">Диагностика</option>
								<option value="Гарантийный ремонт">Гарантийный ремонт</option>
								<option value="Послегарантийный ремонт">Послегарантийный ремонт
								</option>
							</select>
						</div>
						<h2 className='text-white uppercase font-bold mb-4'>Дополнительный
							параметры</h2>
						<div className=" text-white flex flex-col gap-2 mx-4">
							<label className='text-gray-300 uppercase'>Срок
								выполнения:</label>
							<div className="flex gap-6">
								<label className="flex items-center gap-2 cursor-pointer">
									<input
										type="radio"
										name="urgency"
										value="Обычные сроки"
										checked={formData.urgency === 'Обычные сроки'}
										onChange={handleChange}
										className="w-5 h-5 text-black focus:ring-black"
										required
									/>
									<span className="text-white uppercase">Обычный</span>
								</label>

								<label className="flex items-center gap-2 cursor-pointer">
									<input
										type="radio"
										name="urgency"
										value="Срочно"
										checked={formData.urgency === 'Срочно'}
										onChange={handleChange}
										className="w-5 h-5 text-black focus:ring-black"
										required
									/>
									<span className="text-white uppercase">Срочный</span>
								</label>
							</div>
						</div>
					</div>

					<div className="col-span-1 flex flex-col justify-between">
						<div className='flex flex-col gap-6'>
							<h1 className="text-4xl font-bold uppercase">
								КАЛЬКУЛЯТОР стоимости СЕРВИСНОГО ОБСЛУЖИВАНИЯ
							</h1>
							<p className="text-lg text-gray-600 font-medium">
								Выберите параметры обслуживания, укажите модель оборудования и
								параметры работ, и получите расчет стоимости за несколько
								секунд.
								Итоговая сумма зависит от типа ремонта, стоимости запчастей и
								сложности работ.
							</p>
						</div>
						<div>
							<button
								type="submit"
								className="text-white bg-black font-semibold uppercase text-xl rounded-full w-60 py-2 hover:cursor-pointer mb-4"
							>
								РАССЧИТАТЬ
							</button>
							<button
								type="button"
								onClick={handleClear}
								className="text-black font-semibold border-2 border-black  uppercase text-xl rounded-full w-60 py-2 hover:cursor-pointer hover:bg-gray-100"
							>
								ОЧИСТИТЬ ФОРМУ
							</button>
						</div>
					</div>
				</form>



			</div>
			<section ref={resultSectionRef} className="py-16 bg-black text-white">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
					<h2
						className="text-5xl  font-bold uppercase text-center  mb-16">
						ваши расчет выполнен!
					</h2>
					{
						result !== null ? (
							<motion.h1
								initial={{opacity: 0, y: 20}}
								animate={{opacity: 1, y: 0}}
								transition={{duration: 0.5}}
								className="text-7xl  font-bold uppercase text-center  mb-16">
								{result} BYN
							</motion.h1>
						): (
							<motion.h1
								initial={{opacity: 0, y: 20}}
								animate={{opacity: 1, y: 0}}
								transition={{duration: 0.5}}
								className="text-7xl  font-bold uppercase text-center  mb-16">
								...
							</motion.h1>
						)
					}

					<p className='italic w-full max-w-lg text-center text-gray-500'><b className='text-white'>Важно:</b> финальная стоимость зависит от состояния техники,
						необходимости замены запчастей и сложности работ.
						Наш специалист свяжется с вами для уточнения деталей.
						Для этого заполните форму ниже.</p>
				</div>
			</section>
			<OrderForm/>
			<Contacts/>
		</div>
	);
};

export default Calculator;