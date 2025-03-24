"use client";

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { useEffect } from "react";
import { initClarity } from "@/lib/clarity";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "RidesIQ - Fleet Management Solutions",
	description: "Advanced fleet telematics and management solutions",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	useEffect(() => {
		initClarity();
	}, []);

	return (
		<html lang="en">
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
		</html>
	);
}
