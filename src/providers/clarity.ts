import Clarity from "@microsoft/clarity";

// Define base event types
type BaseEventValue = Record<string, string | number | boolean | null | undefined | string[] | number[]>;

// Define specific event types
interface FormEvents {
	quote_form_submit_attempt: {
		company: string;
		region: string;
		interest: string;
		vehicleCount: string;
		trackingTypes: number;
		featuresCount: number;
	};
	quote_form_success: {
		company: string;
		region: string;
		interest: string;
	};
	quote_form_error: {
		error: string;
		type?: string;
		company?: string;
	};
	form_step_change: {
		previousStep: number;
		newStep: number;
		isForward: boolean;
	};
}

// Combine all event types
type ClarityEventValue = FormEvents & {
	[key: string]: BaseEventValue;
};

// Define window.clarity type
declare global {
	interface Window {
		clarity?: {
			(command: "event", name: keyof ClarityEventValue, value?: ClarityEventValue[keyof ClarityEventValue]): void;
			(command: "set", key: string, value: string | string[]): void;
			(command: "identify", userId: string, sessionId?: string, pageId?: string, friendlyName?: string): void;
			(command: "consent", granted: boolean): void;
			(command: "upgrade", reason: string): void;
		};
	}
}

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
			const projectId = process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID;
			if (!projectId) {
				throw new Error("Clarity Project ID is not defined");
			}
			Clarity.init(projectId);
			this.initialized = true;
			console.log("Clarity initialized successfully");
		} catch (error) {
			console.error("Failed to initialize Clarity:", error);
		}
	}

	public trackEvent<K extends keyof ClarityEventValue>(name: K, value?: ClarityEventValue[K]): void {
		if (typeof window === "undefined" || !this.initialized) return;

		try {
			if (value) {
				window.clarity?.("event", name, value);
			} else {
				window.clarity?.("event", name);
			}
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
}

export const clarityProvider = ClarityProvider.getInstance();
