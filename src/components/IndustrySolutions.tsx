"use client";
import React from "react";
import { motion } from "framer-motion";
import { Sparkles, ChevronRight, MapPin, Construction, Bike, Bus, Truck, Factory, Ambulance, Warehouse } from "lucide-react";
import Link from "next/link";

interface Industry {
	icon: typeof MapPin;
	title: string;
	description: string;
	link: string;
}

const industries: Industry[] = [
	{
		icon: Truck,
		title: "Logistics & Transportation",
		description: "Real-time tracking & route optimization for trucking and logistics fleets.",
		link: "/industries/logistics",
	},
	{
		icon: Construction,
		title: "Construction Fleets",
		description: "Monitor heavy equipment and vehicles to improve productivity and prevent theft.",
		link: "/industries/construction",
	},
	{
		icon: Bike,
		title: "Food Delivery",
		description: "Ensure on-time deliveries with temperature monitoring and route efficiency.",
		link: "/industries/food-delivery",
	},
	{
		icon: Bus,
		title: "Public Transit",
		description: "Improve transit efficiency with automated scheduling and vehicle health tracking.",
		link: "/industries/public-transit",
	},
];

const additionalIndustries: Industry[] = [
	{
		icon: Factory,
		title: "Manufacturing",
		description: "Optimize supply chain logistics and material transport operations.",
		link: "/industries/manufacturing",
	},
	{
		icon: Ambulance,
		title: "Emergency Services",
		description: "Critical response fleet management for emergency vehicles.",
		link: "/industries/emergency-services",
	},
	{
		icon: Warehouse,
		title: "Distribution",
		description: "Streamline warehouse and distribution fleet operations.",
		link: "/industries/distribution",
	},
];

export const IndustrySolutions = () => {
	return (
		<section className="py-24 relative overflow-hidden">
			<div className="absolute inset-0 bg-[#678FCA]/[0.02] hero-pattern opacity-50" />
			<div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white" />

			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="text-center mb-16"
				>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="inline-flex items-center px-4 py-2 rounded-full bg-[#678FCA]/10 text-[#678FCA] text-sm font-medium mb-6"
					>
						<Sparkles className="w-4 h-4 mr-2" />
						Industry Solutions
					</motion.div>

					<motion.h2
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="text-4xl sm:text-5xl font-bold mb-6 text-black"
					>
						Built for Every Industry – <span className="bg-gradient-to-r from-[#678FCA] to-[#99D5C9] bg-clip-text text-transparent">Optimized for Efficiency</span>
					</motion.h2>

					<motion.p
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="text-xl text-black max-w-3xl mx-auto"
					>
						RidesIQ offers tailored fleet tracking solutions to meet the unique needs of different industries. No matter your fleet size, we help you streamline operations, improve safety,
						and reduce costs.
					</motion.p>
				</motion.div>

				{/* Industry Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
					{industries.map((industry, index) => (
						<motion.div
							key={industry.title}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: index * 0.1 }}
							className="relative group"
						>
							<div className="absolute inset-0 bg-gradient-to-br from-[#678FCA]/5 to-[#99D5C9]/5 rounded-2xl transform transition-all duration-300 group-hover:scale-[1.02]" />

							<Link
								href={industry.link}
								className="relative block bg-white rounded-2xl p-8 shadow-lg transition-all duration-300 group-hover:shadow-xl border border-gray-100/50"
							>
								<div className="flex items-start gap-6">
									<div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#678FCA] to-[#99D5C9] p-0.5 flex-shrink-0">
										<div className="w-full h-full rounded-xl bg-white flex items-center justify-center">
											<industry.icon className="w-8 h-8 text-[#678FCA]" />
										</div>
									</div>

									<div className="flex-1">
										<h3 className="text-2xl font-semibold mb-3 text-gray-900 group-hover:text-[#678FCA] transition-colors">{industry.title}</h3>
										<p className="text-gray-600 mb-4">{industry.description}</p>
										<div className="flex items-center text-[#678FCA] font-medium group/link">
											Learn More
											<ChevronRight className="ml-1 w-4 h-4 transition-transform group-hover/link:translate-x-1" />
										</div>
									</div>
								</div>
							</Link>
						</motion.div>
					))}
				</div>

				{/* Additional Industries Slider */}
				<div className="relative">
					<div className="flex gap-6 overflow-x-auto pb-8 snap-x-mandatory">
						{additionalIndustries.map((industry, index) => (
							<motion.div
								key={industry.title}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: index * 0.1 }}
								className="min-w-[300px] sm:min-w-[350px] snap-center"
							>
								<Link
									href={industry.link}
									className="block bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all border border-gray-100"
								>
									<div className="flex items-center gap-4">
										<div className="w-12 h-12 rounded-lg bg-[#678FCA]/10 flex items-center justify-center">
											<industry.icon className="w-6 h-6 text-[#678FCA]" />
										</div>
										<div>
											<h4 className="font-semibold text-gray-900">{industry.title}</h4>
											<p className="text-sm text-gray-600 mt-1">{industry.description}</p>
										</div>
									</div>
								</Link>
							</motion.div>
						))}
					</div>
				</div>

				{/* CTA */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="mt-12 text-center"
				>
					<Link
						href="/industries"
						className="inline-flex items-center bg-[#678FCA] text-white px-8 py-4 rounded-full hover:bg-[#678FCA]/90 transition-all group"
					>
						Explore Industry Solutions
						<ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
					</Link>
				</motion.div>
			</div>
		</section>
	);
};
