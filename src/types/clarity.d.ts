type ClarityEventValue = {
	[key: string]: string | number | boolean | null | undefined | string[] | number[] | ClarityEventValue;
};

interface Window {
	clarity?: {
		(command: "event", name: string, value?: ClarityEventValue): void;
		(command: "set", key: string, value: string | string[]): void;
		(command: "identify", userId: string, sessionId?: string, pageId?: string, friendlyName?: string): void;
		(command: "consent", granted: boolean): void;
		(command: "upgrade", reason: string): void;
	};
}
