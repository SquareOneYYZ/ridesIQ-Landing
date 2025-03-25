"use client";
import { Car, Shield, Truck, Route } from "lucide-react";
import { useEffect } from "react";
import { clarityProvider } from "@/providers/clarity";

const solutions = [
	{
		id: "01",
		icon: Car,
		title: "Rental, Leasing & Sales",
		description: "Enhance rental experiences with quick vehicle pickup and return, transparent billing, and deterrence of theft and unauthorized use.",
		details: [
			"Streamline your rental operations and boost efficiency with our GPS tracking solutions.",
			"Monitor vehicle status, optimize fleet allocation, and simplify maintenance scheduling to keep your business running smoothly.",
			"Gain valuable insights to drive profitability and growth.",
		],
		gradient: "from-blue-600 to-blue-400",
	},
	{
		id: "02",
		icon: Shield,
		title: "Insurance/Brokers",
		description: "Gain deeper insights into driving behaviors, vehicle usage, and risk profiles to underwrite policies more effectively.",
		details: [
			"Enhance risk assessment and pricing precision with our advanced telematics data.",
			"Streamline claims management with real-time accident detection, detailed incident reports, and efficient processing.",
			"Offer competitive, usage-based insurance products tailored to your customers' needs.",
		],
		gradient: "from-blue-500 to-blue-300",
	},
	{
		id: "03",
		icon: Truck,
		title: "Courier",
		description: "Expand your courier services and boost profitability with our comprehensive GPS tracking solutions.",
		details: [
			"Provide customers with live tracking updates and accurate ETAs to enhance their experience.",
			"Monitor driver behavior and vehicle health to improve safety and minimize downtime, keeping your fleet running efficiently around the clock.",
			"Ensure on-time deliveries while reducing fuel costs.",
		],
		gradient: "from-[#73ACA2] to-[#5C9B91]",
	},
	{
		id: "04",
		icon: Route,
		title: "Transportation",
		description: "Gain a 360-degree view of your fleet operations with our advanced telematics solutions.",
		details: [
			"Gain real-time visibility into vehicle location, performance, and driver behavior to streamline dispatching, reduce fuel costs, and improve safety.",
			"Leverage valuable telematics data to enhance route planning, maximize asset utilization, and drive operational efficiency across your transportation business.",
			"Ensure timely maintenance with predictive alerts and remote diagnostics, minimizing downtime and extending vehicle lifespan.",
		],
		gradient: "from-[#73ACA2] to-[#73ACA2]",
	},
];

export default function IndustrySolutions() {
	useEffect(() => {
		// Track when industry solutions section is viewed
		clarityProvider.trackEvent("industry_card_view", {
			industryType: "industry_solutions",
			cardId: solutions.length.toString(),
		});
	}, []);

	return (
		<section className="bg-black min-h-screen w-full py-16 px-4">
			<div className="max-w-7xl mx-auto">
				<div className="text-center mb-12">
					<p className="text-sm uppercase tracking-wider text-gray-400 mb-4 text-start">TRUSTED ACROSS INDUSTRIES</p>
					<div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
						<h2 className="text-4xl md:text-5xl font-bold text-white">Industry Solutions</h2>
						<p className="text-gray-300 md:max-w-xl text-left">
							Professional GPS tracking solutions tailored to your business needs, offering complete visibility and control across your entire fleet.
						</p>
					</div>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
					{solutions.map((solution) => {
						const IconComponent = solution.icon;
						return (
							<div
								key={solution.id}
								className="rounded-3xl overflow-hidden relative p-6 min-h-[400px] group transition-transform hover:scale-105"
							>
								<div className={`absolute inset-0 bg-gradient-to-br ${solution.gradient}`} />
								<div className="relative h-full flex flex-col">
									<div className="flex justify-between items-start mb-8">
										<div className="bg-black/20 p-3 rounded-xl">
											<IconComponent className="w-6 h-6 text-white" />
										</div>
										<span className="text-white/60 text-sm">{solution.id}</span>
									</div>
									<h3 className="text-white text-2xl font-semibold mb-4">{solution.title}</h3>
									<p className="text-white/90 mb-6">{solution.description}</p>
									<ul className="mt-auto space-y-4">
										{solution.details.map((detail, index) => (
											<li
												key={index}
												className="text-white/70 text-sm leading-relaxed"
											>
												{detail}
											</li>
										))}
									</ul>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
