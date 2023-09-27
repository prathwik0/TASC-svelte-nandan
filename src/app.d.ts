// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
		interface NAV_ITEM{
			title: string;
			href: string;
		}

		interface MemberCard {
			image: string;
			name: string;
			role: string;
			quote?: string;
			github?: string;
			linkedin?: string;
			instagram?: string;
		}
	}
}

export {};
