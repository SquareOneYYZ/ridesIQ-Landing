"use client";

import React from "react";
import { Navigation } from "@/components/Navigation";
import { PrivacyContent } from "@/components/privacy/PrivacyContent";
import { ContactCTA } from "@/components/shared/ContactCTA";

export default function PrivacyPolicy() {
	return (
		<div className="min-h-screen bg-white">
			<Navigation />
			<PrivacyContent />
			<ContactCTA
				title="Have Questions About Your Privacy?"
				description="Our team is here to help you understand how we protect your data"
				buttonText="Contact Us"
				buttonLink="/contact"
			/>
		</div>
	);
}
