"use client";

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import { Providers } from "@/components/theme/providers";
import { Toaster } from "@/components/ui/sonner";

import { useEffect } from "react";
import { clarityProvider } from "@/providers/clarity";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "RidesIQ",
	description: "RidesIQ is a fleet management solution that provides real-time tracking, monitoring, and diagnostics for vehicles and assets.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	useEffect(() => {
		clarityProvider.init();
	}, []);

	return (
		<html
			lang="en"
			suppressHydrationWarning={true}
		>
			<head>
	
			</head>
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}>
				<Providers>
					<Navbar />
					{children}
					<Toaster />
					<Footer />
				</Providers>

			</body>
		</html>
	);
}
