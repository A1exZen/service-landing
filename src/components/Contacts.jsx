import React from 'react'
import {Mail, MapPin, Phone} from "lucide-react";

export const Contacts = () => {
	return (
		<section id='contacts' className=" py-16 bg-black text-white">
			<div className="container  mx-auto px-4 sm:px-6 lg:px-8">
				<h2
					className="text-3xl sm:text-4xl lg:text-5xl font-bold uppercase  ">
					Контакты
				</h2>

				<div className="flex justify-end gap-20">
					<div className="flex flex-col space-y-6">
						<div>
							<p
								className="text-white text-base sm:text-lg flex items-center gap-2 mb-1">
								<MapPin className="w-5 h-5 mr-2"/>
								ул. Дзержинского, 11
							</p>
							<p
								className="text-white text-base sm:text-lg flex items-center gap-2 mb-4">
								<MapPin className="w-5 h-5 mr-2"/>
								ул. Притыцкого, 79
							</p>
							<div className="flex items-center mt-2">
								<Phone className="w-5 h-5 mr-2"/>
								<a
									href="#"
									className="text-gray-400 text-base sm:text-lg hover:text-white"
								>
									+375 (29) 638 20 00
								</a>
							</div>

						</div>
						<div>
							<div className="flex items-center">
								<Mail className="w-5 h-5 mr-4"/>
								<a
									href="mailto:stuttgart.by@gmail.com"
									className="text-gray-400 text-base sm:text-lg hover:text-white mb-1"
								>
									f1@stuttgart.by
								</a>
							</div>
							<div className="flex items-center mb-6">
								<Mail className="w-5 h-5 mr-4"/>
								<a
									href="mailto:stuttgart.by@gmail.com"
									className="text-gray-400 text-base sm:text-lg hover:text-white"
								>
									dz@stuttgart.by
								</a>
							</div>
							<div><h3
								className="text-lg sm:text-xl font-bold uppercase mb-4">
								рабочие часы
							</h3><p className='text-gray-400 uppercase'>ежедневно с 9:00 до
								21:00</p></div>
						</div>
					</div>

					<div className="flex flex-col space-y-6">
						<div>
							<h3 className="text-lg sm:text-xl font-bold uppercase mb-4">
								Сервисный центр
							</h3>
							<p
								className="text-white text-base sm:text-lg flex items-center gap-2 mb-4">
								<MapPin className="w-5 h-5 mr-2"/>
								ул. Дзержинского, 1 к.9
							</p>
							<div className="flex items-center mt-2">
								<Phone className="w-5 h-5 mr-2"/>
								<a
									href="#"
									className="text-gray-400 text-base sm:text-lg hover:text-white mb-4"
								>
									+375 (29) 638 20 00
								</a>
							</div>
							<div className="flex items-center mb-12">
								<Mail className="w-5 h-5 mr-4"/>
								<a
									href="mailto:stuttgart.by@gmail.com"
									className="text-gray-400 text-base sm:text-lg hover:text-white "
								>
									service@stuttgart.by
								</a>
							</div>

							<div><h3
								className="text-lg sm:text-xl font-bold uppercase mb-4">
								рабочие часы
							</h3><p className='text-gray-400 uppercase'>пн-пт с 9:00 до
								18:00</p>
							</div>
						</div>
					</div>


				</div>

			</div>
		</section>
	)
}

