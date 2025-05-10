"use client";

export default function Error({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
	return (
		<div className="min-h-screen flex items-center justify-center">
			<div className="text-center">
				<h2 className="text-2xl font-bold text-black mb-4">Something went wrong!</h2>
				<button
					onClick={reset}
					className="bg-[#678FCA] text-white px-6 py-3 rounded-full"
				>
					Try again
				</button>
			</div>
		</div>
	);
}
