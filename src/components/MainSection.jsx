import React from 'react';
import {Link} from 'react-router-dom';
import {motion} from 'framer-motion';
import backgroundImage from '/сервис.png';
import backgroundImage2 from '/штутгарт.png';
import {BadgeCheck, Clock, Mail, MapPin, Phone} from "lucide-react";
import OrderForm from "./OrderForm.jsx";
import {Contacts} from "./Contacts.jsx";

// Animation variants for fading in and sliding up
const fadeInUp = {
	hidden: {opacity: 0, y: 50},
	visible: {opacity: 1, y: 0, transition: {duration: 0.8, ease: 'easeOut'}},
};

// Staggered animation for children (e.g., list items)
const staggerContainer = {
	hidden: {opacity: 0},
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.3,
		},
	},
};

// Animation for individual list items
const listItem = {
	hidden: {opacity: 0, x: -20},
	visible: {opacity: 1, x: 0, transition: {duration: 0.5}},
};

// Animation for cards (scale and fade)
const cardAnimation = {
	hidden: {opacity: 0, scale: 0.9},
	visible: {opacity: 1, scale: 1, transition: {duration: 0.5}},
};

const MainSection = () => {
	return (
		<main className="mx-auto ">
			<div className=" max-w-7xl flex flex-col mx-auto">
				<section id="main" className="py-30 relative " style={{
					backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 30%, rgba(255, 255, 255, 0) 100%), url(${backgroundImage})`,
					backgroundSize: '60% auto',
					backgroundPosition: 'right',
					backgroundRepeat: 'no-repeat',
				}}>
					<div
						className="relative z-10 flex flex-col items-start lg:max-w-[60%] ">
						<motion.h1
							className="text-2xl sm:text-5xl  font-bold mb-6 uppercase"
							variants={fadeInUp}
							initial="hidden"
							animate="visible"
						>
							КАЛЬКУЛЯТОР СТОИМОСТИ
							СЕРВИСНОГО ОБСЛУЖИВАНИЯ
							В ШТУТГАРТ ЦЕНТРЕ
						</motion.h1>
						<motion.p
							className="text-lg sm:text-xl text-gray-600 mb-6  mr-40"
							variants={fadeInUp}
							initial="hidden"
							animate="visible"
							transition={{delay: 0.2}}
						>
							Рассчитайте предварительную стоимость ремонта, диагностики
							или технического обслуживания вашей техники в сервисном
							центре «Штутгарт Центр».
						</motion.p>

						<Link to='/calculator'>
							<motion.button

								className="text-white bg-black  uppercase text-xl rounded-full px-5 py-1 hover:cursor-pointer "
								variants={fadeInUp}
								initial="hidden"
								animate="visible"
								transition={{delay: 0}}
								whileHover={{scale: 1.2}}
								whileTap={{scale: 0.95}}
							>
								РАССЧИТАТЬ
							</motion.button>
						</Link>
					</div>
				</section>
				<section id="about" className="py-30 relative flex justify-end" style={{
					backgroundImage: `linear-gradient(to left, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 30%, rgba(255, 255, 255, 0) 100%), url(${backgroundImage2})`,
					backgroundSize: '45% auto',
					backgroundPosition: 'left',
					backgroundRepeat: 'no-repeat',
				}}>
					<div className="relative z-10 flex  flex-col lg:max-w-[45%]">
						<motion.h1
							className="text-2xl  sm:text-5xl  font-bold mb-6 uppercase"
							variants={fadeInUp}
							initial="hidden"
							animate="visible"
						>
							O HАС
						</motion.h1>
						<motion.p
							className="text-lg sm:text-xl  mb-6 "
							variants={fadeInUp}
							initial="hidden"
							animate="visible"
							transition={{delay: 0.2}}
						>
							<b>ООО «Штутгарт Центр»</b> - официальный дилер и сервисный центр,
							специализирующийся на продаже и обслуживании бытовой и
							профессиональной садовой, клининговой и строительной техники.
						</motion.p>
						<motion.p
							className="text-lg sm:text-xl  mb-6 "
							variants={fadeInUp}
							initial="hidden"
							animate="visible"
							transition={{delay: 0.2}}
						>
							<b>Продажа техники:</b><br/>
							В наших центрах продаж и интернет-магазине представлен
							широкий ассортимент техники и инструментов для дома, сада
							и строительства.
						</motion.p>
						<motion.p
							className="text-lg sm:text-xl  mb-6  "
							variants={fadeInUp}
							initial="hidden"
							animate="visible"
							transition={{delay: 0.2}}
						>
							<b>Сервисное обслуживание:</b><br/>
							Мы оказываем гарантийный и постгарантийный ремонт садово
							парковой техники и техники для дома, используя только
							оригинальные запчасти.
						</motion.p>

					</div>
				</section>


			</div>
			<section id='service' className="py-16 bg-black text-white">
				<div className="max-w-7xl  mx-auto px-4 sm:px-6 lg:px-8">
					<h2
						className="text-3xl sm:text-4xl lg:text-5xl font-bold uppercase  mb-16">
						Наши услуги
					</h2>
					<div
						className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-15 pb-12">

						<div className="flex flex-col items-center text-center">
							<BadgeCheck className='mb-6' size={100}/>
							<h3 className="text-lg sm:text-xl font-bold uppercase mb-4">
								Гарантийный ремонт
							</h3>
							<p className="text-gray-400 text-base sm:text-lg">
								Осуществляем профессиональный гарантийный ремонт техники. Наши
								сертифицированные специалисты используют только оригинальные
								запчасти.
							</p>
						</div>

						<div className="flex flex-col items-center text-center">
							<BadgeCheck className='mb-6' size={100}/>
							<h3 className="text-lg sm:text-xl font-bold uppercase mb-4">
								ПОСЛЕГАРАНТИЙНЫЙ РЕМОНТ
							</h3>
							<p className="text-gray-400 text-base sm:text-lg">
								После окончания гарантии мы предлагаем
								качественную диагностику и ремонт,
								продлевая срок службы вашей техники.
								Гарантия на выполненные работы.
							</p>
						</div>

						<div className="flex flex-col items-center text-center">
							<BadgeCheck className='mb-6' size={100}/>
							<h3 className="text-lg sm:text-xl font-bold uppercase mb-4">
								ДИАГНОСТИКА
							</h3>
							<p className="text-gray-400 text-base sm:text-lg">
								Проводим детальную диагностику техники
								для выявления неисправностей.
								Точная оценка состояния оборудования
								позволяет предотвратить серьезные поломки.
							</p>
						</div>
					</div>
				</div>
			</section>
			<OrderForm/>
			<Contacts/>
		</main>
	);
};

export default MainSection;