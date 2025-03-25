"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { clarityProvider } from "@/providers/clarity";

function SolutionCards() {
	const [hoveredCard, setHoveredCard] = useState<number | null>(null);

	const ListElm = ({ text }: { text: string }) => <li className="before:content-['•'] before:text-blue-400 before:inline-block before:mr-2 before:leading-6">{text}</li>;

	const cards = [
		{
			id: 1,
			title: "Real-Time Fleet Visibility",
			gradient: "from-[#486390] to-[#678FCA]",
			items: ["Live tracking across your entire fleet.", "Instant location & status updates.", "Comprehensive route history.", "Custom geofencing alerts."],
		},
		{
			id: 2,
			title: "Safety & Analytics",
			gradient: "from-[#678FCA] to-[#99D5C9]",
			items: ["Speeding detection.", "Harsh driving alerts (braking, acceleration)", "Driver scoring & safety metrics.", "Trip history analysis."],
		},
		{
			id: 3,
			title: "Comprehensive Reports",
			gradient: "from-[#567AA8] to-[#7AB3A9]",
			items: ["Trip summary reports", "Stop report analysis", "Event logging", "Custom report generation"],
		},
		{
			id: 4,
			title: "Automated Toll Management",
			gradient: "from-[#7AB3A9] to-[#99D5C9]",
			items: ["Automated toll detection", "Simplified billing process", "Real-time notifications", "API Integration"],
		},
	];

	// Add tracking for card interactions
	const handleCardHover = (card: (typeof cards)[0]) => {
		setHoveredCard(card.id);
		clarityProvider.trackEvent("solution_card_hover", {
			cardId: String(card.id),
			title: card.title,
		});
	};

	return (
		<div className="min-h-screen bg-black text-white p-6 md:p-12">
			<div className="max-w-7xl mx-auto">
				<h1 className="uppercase font-light opacity-50 mb-10 tracking-tighter">platform features</h1>
				<h2 className="text-2xl md:text-4xl font-medium mb-12 max-w-4xl">
					Streamline your fleet operations with integrated tracking, analytics, and automated toll management in one powerful platform.
				</h2>

				<div className="flex flex-col md:flex-row gap-6 min-h-[50vh] relative">
					{cards.map((card) => (
						<motion.div
							key={card.id}
							className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${card.gradient} p-6`}
							onHoverStart={() => handleCardHover(card)}
							onHoverEnd={() => setHoveredCard(null)}
							layout
							transition={{
								layout: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
								opacity: { duration: 0.3 },
							}}
							animate={{
								flex: hoveredCard === card.id ? "1 1 60%" : hoveredCard === null ? "1 1 25%" : "1 1 10%",
								opacity: hoveredCard === null || hoveredCard === card.id ? 1 : 0.3,
							}}
							style={{
								minWidth: hoveredCard !== null && hoveredCard !== card.id ? "80px" : "auto",
							}}
						>
							<motion.div
								initial={false}
								animate={{
									opacity: hoveredCard === null || hoveredCard === card.id ? 1 : 0.3,
								}}
								transition={{ duration: 0.3 }}
								className="h-full flex flex-col"
							>
								<div className="absolute top-4 left-4 text-lg font-medium opacity-70">{String(card.id).padStart(2, "0")}</div>
								<div className="mt-8 flex-grow">
									<motion.h3
										layout="position"
										className="text-3xl font-semibold mb-2 whitespace-nowrap text-wrap tracking-tighter leading-2"
										animate={{
											opacity: hoveredCard === null || hoveredCard === card.id ? 1 : 0,
										}}
									>
										{card.title}
									</motion.h3>
									<motion.ul
										initial={{ opacity: 0, y: 20 }}
										animate={{
											opacity: hoveredCard === card.id ? 1 : 0,
											y: hoveredCard === card.id ? 0 : 20,
										}}
										transition={{ duration: 0.3 }}
										className="text-sm md:block hidden"
									>
										{card.items.map((item, index) => (
											<ListElm
												key={index}
												text={item}
											/>
										))}
									</motion.ul>
									{/* Mobile list - always visible */}
									<ul className="text-md md:hidden block space-y-2">
										{card.items.map((item, index) => (
											<ListElm
												key={index}
												text={item}
											/>
										))}
									</ul>
								</div>
							</motion.div>
						</motion.div>
					))}
				</div>
			</div>
		</div>
	);
}

export default SolutionCards;
