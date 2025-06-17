"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import DottedMap from "dotted-map";
import Image from "next/image";

interface MapProps {
	dots?: Array<{
		start: { lat: number; lng: number; label?: string };
		end: { lat: number; lng: number; label?: string };
	}>;
	lineColor?: string;
}

export default function WorldMap({ dots = [], lineColor = "#0ea5e9" }: MapProps) {
	const containerRef = useRef<HTMLDivElement>(null);
	const svgRef = useRef<SVGSVGElement>(null);
	const [isInView, setIsInView] = useState(false);
	const map = new DottedMap({ height: 100, grid: "diagonal" });

	const theme = "dark";

	const svgMap = map.getSVG({
		radius: 0.22,
		color: theme === "dark" ? "#FFFFFF40" : "#00000040",
		shape: "circle",
		backgroundColor: theme === "dark" ? "black" : "white",
	});

	const projectPoint = (lat: number, lng: number) => {
		const x = (lng + 180) * (800 / 360);
		const y = (90 - lat) * (400 / 180);
		return { x, y };
	};

	const createCurvedPath = (start: { x: number; y: number }, end: { x: number; y: number }) => {
		const midX = (start.x + end.x) / 2;
		const midY = Math.min(start.y, end.y) - 50;
		return `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`;
	};

	useEffect(() => {
		const ContainerRef = containerRef.current;
		const observer = new IntersectionObserver(
			([entry]) => {
				setIsInView(entry.isIntersecting);
			},
			{
				root: null,
				rootMargin: "0px",
				threshold: 0.1,
			},
		);

		if (ContainerRef) {
			observer.observe(ContainerRef);
		}

		return () => {
			if (ContainerRef) {
				observer.unobserve(ContainerRef);
			}
		};
	}, []);

	return (
		<div
			ref={containerRef}
			className="w-full md:aspect-[3/1] aspect-[4/4] dark:bg-black bg-black rounded-lg relative font-sans overflow-hidden"
		>
			<div className="absolute inset-0 md:static">
				<Image
					src={`data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`}
					className="h-full w-full object-cover md:object-contain [mask-image:linear-gradient(to_bottom,transparent,white_10%,white_90%,transparent)] pointer-events-none select-none"
					alt="world map"
					fill
					draggable={false}
				/>
			</div>
			<svg
				ref={svgRef}
				viewBox="0 0 800 400"
				className="w-full h-full absolute inset-0 pointer-events-none select-none"
				preserveAspectRatio="xMidYMid slice"
			>
				{dots.map((dot, i) => {
					const startPoint = projectPoint(dot.start.lat, dot.start.lng);
					const endPoint = projectPoint(dot.end.lat, dot.end.lng);
					return (
						<g key={`path-group-${i}`}>
							<motion.path
								d={createCurvedPath(startPoint, endPoint)}
								fill="none"
								stroke="url(#path-gradient)"
								strokeWidth="1"
								initial={{
									pathLength: 0,
								}}
								animate={{
									pathLength: isInView ? 1 : 0,
								}}
								transition={{
									duration: 1,
									delay: 0.5 * i,
									ease: "easeOut",
								}}
								key={`start-upper-${i}`}
							></motion.path>
						</g>
					);
				})}

				<defs>
					<linearGradient
						id="path-gradient"
						x1="0%"
						y1="0%"
						x2="100%"
						y2="0%"
					>
						<stop
							offset="0%"
							stopColor="white"
							stopOpacity="0"
						/>
						<stop
							offset="5%"
							stopColor={lineColor}
							stopOpacity="1"
						/>
						<stop
							offset="95%"
							stopColor={lineColor}
							stopOpacity="1"
						/>
						<stop
							offset="100%"
							stopColor="white"
							stopOpacity="0"
						/>
					</linearGradient>
				</defs>

				{dots.map((dot, i) => (
					<g key={`points-group-${i}`}>
						<g key={`start-${i}`}>
							<circle
								cx={projectPoint(dot.start.lat, dot.start.lng).x}
								cy={projectPoint(dot.start.lat, dot.start.lng).y}
								r="2"
								fill={lineColor}
							/>
							<motion.circle
								cx={projectPoint(dot.start.lat, dot.start.lng).x}
								cy={projectPoint(dot.start.lat, dot.start.lng).y}
								r="2"
								fill={lineColor}
								opacity="0.5"
								animate={{
									r: isInView ? [2, 8, 2] : 2,
									opacity: isInView ? [0.5, 0, 0.5] : 0.5,
								}}
								transition={{
									duration: 1.5,
									repeat: Number.POSITIVE_INFINITY,
									ease: "linear",
								}}
							/>
						</g>
						<g key={`end-${i}`}>
							<circle
								cx={projectPoint(dot.end.lat, dot.end.lng).x}
								cy={projectPoint(dot.end.lat, dot.end.lng).y}
								r="2"
								fill={lineColor}
							/>
							<motion.circle
								cx={projectPoint(dot.end.lat, dot.end.lng).x}
								cy={projectPoint(dot.end.lat, dot.end.lng).y}
								r="2"
								fill={lineColor}
								opacity="0.5"
								animate={{
									r: isInView ? [2, 8, 2] : 2,
									opacity: isInView ? [0.5, 0, 0.5] : 0.5,
								}}
								transition={{
									duration: 1.5,
									repeat: Number.POSITIVE_INFINITY,
									ease: "linear",
								}}
							/>
						</g>
					</g>
				))}
			</svg>
		</div>
	);
}
