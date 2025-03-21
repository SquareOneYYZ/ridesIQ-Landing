"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { MenuIcon, X, ChevronRight, Truck, Construction, Bike, Bus, Factory, Ambulance, Warehouse, ChevronDown, Car } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface IndustryLink {
	icon: typeof Truck;
	title: string;
	description: string;
	href: string;
}

const industryLinks: IndustryLink[] = [
	{
		icon: Truck,
		title: "Logistics & Transportation",
		description: "Fleet solutions for trucking and delivery companies",
		href: "/industries/fleet-management",
	},
	{
		icon: Construction,
		title: "Construction",
		description: "Track and manage construction vehicle fleets",
		href: "/industries/construction",
	},
	{
		icon: Bike,
		title: "Food Delivery",
		description: "Optimize routes for food delivery services",
		href: "/industries/food-delivery",
	},
	{
		icon: Bus,
		title: "Public Transit",
		description: "Solutions for public transportation fleets",
		href: "/industries/public-transit",
	},
	{
		icon: Factory,
		title: "Manufacturing",
		description: "Monitor industrial vehicle operations",
		href: "/industries/manufacturing",
	},
	{
		icon: Ambulance,
		title: "Emergency Services",
		description: "Track emergency response vehicles",
		href: "/industries/emergency-services",
	},
	{
		icon: Warehouse,
		title: "Distribution",
		description: "Manage warehouse and logistics fleets",
		href: "/industries/distribution",
	},
	{
		icon: Car,
		title: "Car Rental",
		description: "Smart solutions for car rental fleet management",
		href: "/industries/car-rental",
	},
];

export const Navigation = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
	const menuRef = useRef<HTMLDivElement>(null);
	const buttonRef = useRef<HTMLButtonElement>(null);

	// Lock body scroll when mobile menu is open
	useEffect(() => {
		if (isMenuOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "";
		}
		return () => {
			document.body.style.overflow = "";
		};
	}, [isMenuOpen]);

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 20);
		};

		const handleClickOutside = (event: MouseEvent) => {
			if (isMenuOpen && menuRef.current && !menuRef.current.contains(event.target as Node) && buttonRef.current && !buttonRef.current.contains(event.target as Node)) {
				setIsMenuOpen(false);
			}
		};

		window.addEventListener("scroll", handleScroll);
		document.addEventListener("mousedown", handleClickOutside);

		return () => {
			window.removeEventListener("scroll", handleScroll);
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [isMenuOpen]);

	// Handle keyboard navigation for accessibility
	useEffect(() => {
		const handleEscape = (e: KeyboardEvent) => {
			if (e.key === "Escape") {
				setIsMenuOpen(false);
				setActiveDropdown(null);
				buttonRef.current?.focus();
			}
		};

		window.addEventListener("keydown", handleEscape);
		return () => window.removeEventListener("keydown", handleEscape);
	}, []);

	const handleDropdownEnter = (dropdown: string) => {
		setActiveDropdown(dropdown);
	};

	const handleDropdownLeave = () => {
		setActiveDropdown(null);
	};

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	// Animation variants
	const navbarVariants = {
		visible: {
			backgroundColor: scrolled ? "rgba(255, 255, 255, 0.95)" : "rgba(255, 255, 255, 0)",
			boxShadow: scrolled ? "0 1px 3px rgba(0,0,0,0.1)" : "none",
		},
		hidden: {
			backgroundColor: "rgba(255, 255, 255, 0)",
			boxShadow: "none",
		},
	};

	const mobileMenuVariants = {
		closed: {
			height: 0,
			opacity: 0,
			transition: {
				duration: 0.3,
				ease: "easeInOut",
			},
		},
		open: {
			height: "auto",
			opacity: 1,
			transition: {
				duration: 0.3,
				ease: "easeInOut",
			},
		},
	};

	const dropdownVariants = {
		hidden: {
			opacity: 0,
			y: 10,
			transition: {
				duration: 0.2,
			},
		},
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.2,
			},
		},
	};

	return (
		<motion.nav
			className="fixed w-full z-50"
			initial="hidden"
			animate="visible"
			variants={navbarVariants}
			transition={{ duration: 0.3 }}
		>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between items-center h-20">
					<div className="flex items-center">
						<Link
							href="/"
							className="text-2xl font-bold text-[#678FCA]"
							aria-label="RidesIQ Home"
						>
							RidesIQ
						</Link>
					</div>

					<div className="hidden md:flex items-center space-x-8">
						{/* Industries Dropdown */}
						<div
							className="relative"
							onMouseEnter={() => handleDropdownEnter("industries")}
							onMouseLeave={handleDropdownLeave}
						>
							<button
								className="flex items-center text-gray-700 hover:text-[#678FCA] transition-colors"
								aria-expanded={activeDropdown === "industries"}
								aria-haspopup="true"
								onClick={() => (activeDropdown === "industries" ? setActiveDropdown(null) : handleDropdownEnter("industries"))}
							>
								Industries
								<motion.div
									animate={{ rotate: activeDropdown === "industries" ? 180 : 0 }}
									transition={{ duration: 0.2 }}
								>
									<ChevronDown className="ml-1 w-4 h-4" />
								</motion.div>
							</button>

							<AnimatePresence>
								{activeDropdown === "industries" && (
									<motion.div
										className="absolute left-0 mt-2 w-[600px] bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden"
										initial="hidden"
										animate="visible"
										exit="hidden"
										variants={dropdownVariants}
										role="menu"
										aria-orientation="vertical"
										aria-labelledby="industries-menu"
									>
										<div className="p-6">
											<h3 className="text-lg font-semibold text-gray-900 mb-4">Industries We Serve</h3>
											<div className="grid grid-cols-2 gap-4">
												{industryLinks.map((industry) => (
													<Link
														key={industry.href}
														href={industry.href}
														className="flex items-start p-3 rounded-xl hover:bg-gray-50 transition-colors group"
														role="menuitem"
													>
														<div className="w-10 h-10 rounded-lg bg-[#678FCA]/10 flex items-center justify-center flex-shrink-0">
															<industry.icon
																className="w-5 h-5 text-[#678FCA]"
																aria-hidden="true"
															/>
														</div>
														<div className="ml-4">
															<div className="text-sm font-medium text-gray-900 group-hover:text-[#678FCA] transition-colors">{industry.title}</div>
															<div className="text-xs text-gray-500">{industry.description}</div>
														</div>
													</Link>
												))}
											</div>
										</div>
										<div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
											<Link
												href="/industries"
												className="flex items-center text-sm text-[#678FCA] hover:text-[#678FCA]/80 transition-colors group"
												role="menuitem"
											>
												View All Industries
												<motion.div
													className="ml-1"
													whileHover={{ x: 4 }}
													transition={{ duration: 0.2 }}
												>
													<ChevronRight className="w-4 h-4" />
												</motion.div>
											</Link>
										</div>
									</motion.div>
								)}
							</AnimatePresence>
						</div>

						{/* Solutions Dropdown */}
						<div
							className="relative"
							onMouseEnter={() => handleDropdownEnter("solutions")}
							onMouseLeave={handleDropdownLeave}
						>
							<button
								className="flex items-center text-gray-700 hover:text-[#678FCA] transition-colors"
								aria-expanded={activeDropdown === "solutions"}
								aria-haspopup="true"
								onClick={() => (activeDropdown === "solutions" ? setActiveDropdown(null) : handleDropdownEnter("solutions"))}
							>
								Solutions
								<motion.div
									animate={{ rotate: activeDropdown === "solutions" ? 180 : 0 }}
									transition={{ duration: 0.2 }}
								>
									<ChevronDown className="ml-1 w-4 h-4" />
								</motion.div>
							</button>

							<AnimatePresence>
								{activeDropdown === "solutions" && (
									<motion.div
										className="absolute left-0 mt-2 w-[300px] bg-white rounded-2xl shadow-xl border border-gray-100"
										initial="hidden"
										animate="visible"
										exit="hidden"
										variants={dropdownVariants}
										role="menu"
										aria-orientation="vertical"
										aria-labelledby="solutions-menu"
									>
										<div className="p-4">
											<motion.div
												initial={{ opacity: 0, x: -10 }}
												animate={{ opacity: 1, x: 0 }}
												transition={{ delay: 0.3 }}
											>
												<Link
													href="/solutions/hard-wired-trackers"
													className="block px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg"
												>
													Hard-Wired Trackers
												</Link>
											</motion.div>
											<motion.div
												initial={{ opacity: 0, x: -10 }}
												animate={{ opacity: 1, x: 0 }}
												transition={{ delay: 0.33 }}
											>
												<Link
													href="/solutions/obd-trackers"
													className="block px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg"
												>
													OBD Trackers
												</Link>
											</motion.div>
											<motion.div
												initial={{ opacity: 0, x: -10 }}
												animate={{ opacity: 1, x: 0 }}
												transition={{ delay: 0.36 }}
											>
												<Link
													href="/solutions/asset-trackers"
													className="block px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg"
												>
													Asset Trackers
												</Link>
											</motion.div>
										</div>
									</motion.div>
								)}
							</AnimatePresence>
						</div>

						{/* <Link
							href="/pricing"
							className="text-gray-700 hover:text-[#678FCA] transition-colors"
						>
							Pricing
						</Link> */}

						<Link
							href="/resources"
							className="text-gray-700 hover:text-[#678FCA] transition-colors"
						>
							Resources
						</Link>

						<motion.button
							className="bg-[#678FCA] text-white px-6 py-2.5 rounded-full hover:bg-[#678FCA]/90 transition-colors"
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							transition={{ duration: 0.2 }}
						>
							Get a Demo
						</motion.button>
					</div>

					<motion.button
						ref={buttonRef}
						className="md:hidden text-gray-700 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#678FCA]/50"
						onClick={toggleMenu}
						aria-expanded={isMenuOpen}
						aria-label={isMenuOpen ? "Close menu" : "Open menu"}
						whileTap={{ scale: 0.9 }}
						transition={{ duration: 0.2 }}
					>
						<AnimatePresence
							mode="wait"
							initial={false}
						>
							{isMenuOpen ? (
								<motion.div
									key="close"
									initial={{ rotate: -90, opacity: 0 }}
									animate={{ rotate: 0, opacity: 1 }}
									exit={{ rotate: 90, opacity: 0 }}
									transition={{ duration: 0.2 }}
								>
									<X className="w-6 h-6" />
								</motion.div>
							) : (
								<motion.div
									key="menu"
									initial={{ rotate: 90, opacity: 0 }}
									animate={{ rotate: 0, opacity: 1 }}
									exit={{ rotate: -90, opacity: 0 }}
									transition={{ duration: 0.2 }}
								>
									<MenuIcon className="w-6 h-6" />
								</motion.div>
							)}
						</AnimatePresence>
					</motion.button>
				</div>
			</div>

			{/* Mobile Menu */}
			<AnimatePresence>
				{isMenuOpen && (
					<motion.div
						ref={menuRef}
						className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
						initial="closed"
						animate="open"
						exit="closed"
						variants={mobileMenuVariants}
					>
						<motion.div
							className="px-4 py-4 space-y-3"
							initial={{ opacity: 0, y: -20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.1, staggerChildren: 0.05 }}
						>
							<div className="space-y-2">
								<div className="px-4 py-2 text-sm font-medium text-gray-500">Industries</div>
								{industryLinks.map((industry, index) => (
									<motion.div
										key={industry.href}
										initial={{ opacity: 0, x: -10 }}
										animate={{ opacity: 1, x: 0 }}
										transition={{ delay: 0.1 + index * 0.03 }}
									>
										<Link
											href={industry.href}
											className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg"
										>
											<industry.icon
												className="w-5 h-5 mr-3 text-[#678FCA]"
												aria-hidden="true"
											/>
											{industry.title}
										</Link>
									</motion.div>
								))}
							</div>

							<div className="space-y-2">
								<div className="px-4 py-2 text-sm font-medium text-gray-500">Solutions</div>
								<motion.div
									initial={{ opacity: 0, x: -10 }}
									animate={{ opacity: 1, x: 0 }}
									transition={{ delay: 0.3 }}
								>
									<Link
										href="/solutions/hard-wired-trackers"
										className="block px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg"
									>
										Hard-Wired Trackers
									</Link>
								</motion.div>
								<motion.div
									initial={{ opacity: 0, x: -10 }}
									animate={{ opacity: 1, x: 0 }}
									transition={{ delay: 0.33 }}
								>
									<Link
										href="/solutions/obd-trackers"
										className="block px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg"
									>
										OBD Trackers
									</Link>
								</motion.div>
								<motion.div
									initial={{ opacity: 0, x: -10 }}
									animate={{ opacity: 1, x: 0 }}
									transition={{ delay: 0.36 }}
								>
									<Link
										href="/solutions/asset-trackers"
										className="block px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg"
									>
										Asset Trackers
									</Link>
								</motion.div>
							</div>

							{/* <motion.div
								initial={{ opacity: 0, x: -10 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ delay: 0.4 }}
							>
								<Link
									href="/pricing"
									className="block px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg"
								>
									Pricing
								</Link>
							</motion.div> */}

							<motion.div
								initial={{ opacity: 0, x: -10 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ delay: 0.43 }}
							>
								<Link
									href="/resources"
									className="block px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg"
								>
									Resources
								</Link>
							</motion.div>

							<motion.div
								initial={{ opacity: 0, y: 10 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.5 }}
							>
								<motion.button
									className="w-full mt-4 bg-[#678FCA] text-white px-6 py-3 rounded-full"
									whileHover={{ scale: 1.03 }}
									whileTap={{ scale: 0.97 }}
									transition={{ duration: 0.2 }}
								>
									Get a Demo
								</motion.button>
							</motion.div>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</motion.nav>
	);
};
