import Clarity from "@microsoft/clarity";

export function initClarity() {
	if (typeof window !== "undefined") {
		Clarity.init(process.env.CLARITY_PROJECT_ID as string);
	}
}

