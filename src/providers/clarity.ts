import Clarity from "@microsoft/clarity";

const CLARITY_PROJECT_ID = process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID || "";

// 1. Add specific event types for your components
type ClarityEvents = {
	// Form Events
	form_start: { formType: string; page: string };
	form_step_complete: { step: number; formType: string };
	form_submit: { formType: string; success: boolean };

	// Industry Solutions Events
	industry_card_view: { industryType: string; cardId: string };

	// Solution Cards Events
	solution_card_hover: { cardId: string; title: string };

	// Navigation Events
	nav_click: { destination: string; source: string };
};

class ClarityProvider {
	private static instance: ClarityProvider;
	private initialized: boolean = false;

	private constructor() {}

	public static getInstance(): ClarityProvider {
		if (!ClarityProvider.instance) {
			ClarityProvider.instance = new ClarityProvider();
		}
		return ClarityProvider.instance;
	}

	public init(): void {
		if (typeof window === "undefined" || this.initialized) return;

		try {
			Clarity.init(CLARITY_PROJECT_ID);
			this.initialized = true;
			console.log("Clarity initialized successfully");
		} catch (error) {
			console.error("Failed to initialize Clarity:", error);
		}
	}

	// 2. Type-safe event tracking
	public trackEvent<K extends keyof ClarityEvents>(name: K, value: ClarityEvents[K]): void {
		if (typeof window === "undefined" || !this.initialized) return;

		try {
			window.clarity?.("event", name, value);
		} catch (error) {
			console.error("Failed to track Clarity event:", error);
		}
	}

	public setTag(key: string, value: string | string[]): void {
		if (typeof window === "undefined" || !this.initialized) return;

		try {
			window.clarity?.("set", key, value);
		} catch (error) {
			console.error("Failed to set Clarity tag:", error);
		}
	}

	public identify(userId: string, sessionId?: string, pageId?: string, friendlyName?: string): void {
		if (typeof window === "undefined" || !this.initialized) return;

		try {
			window.clarity?.("identify", userId, sessionId, pageId, friendlyName);
		} catch (error) {
			console.error("Failed to identify user in Clarity:", error);
		}
	}

	public consent(granted: boolean = true): void {
		if (typeof window === "undefined" || !this.initialized) return;

		try {
			window.clarity?.("consent", granted);
		} catch (error) {
			console.error("Failed to set Clarity consent:", error);
		}
	}

	public upgradeSession(reason: string): void {
		if (typeof window === "undefined" || !this.initialized) return;

		try {
			window.clarity?.("upgrade", reason);
		} catch (error) {
			console.error("Failed to upgrade Clarity session:", error);
		}
	}

	// Use for important user journeys
	public startImportantSession(): void {
		this.upgradeSession("important_user_journey");
	}
}

export const clarityProvider = ClarityProvider.getInstance();
