
"use client";

import { ThemeProvider } from "next-themes";
import type { ThemeProviderProps } from "next-themes";

export function Providers({ children, ...props }: ThemeProviderProps) {
	return (
		<ThemeProvider
			attribute="class"
			defaultTheme="dark"
			{...props}
		>
			{children}
		</ThemeProvider>
	);
}
