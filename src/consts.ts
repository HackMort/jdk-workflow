export const SITE = {
	title: 'Web Development',
	description: 'JDK Web Development Workflow Website.',
	defaultLanguage: 'en-us',
} as const;

export const OPEN_GRAPH = {
	image: {
		src: 'https://github.com/withastro/astro/blob/main/assets/social/banner-minimal.png?raw=true',
		alt:
			'astro logo on a starry expanse of space,' +
			' with a purple saturn-like planet floating in the right foreground',
	},
	twitter: 'astrodotbuild',
};

export const KNOWN_LANGUAGES = {
	English: 'en',
} as const;
export const KNOWN_LANGUAGE_CODES = Object.values(KNOWN_LANGUAGES);

export const GITHUB_EDIT_URL = `https://github.com/withastro/astro/tree/main/examples/docs`;

export const COMMUNITY_INVITE_URL = `https://astro.build/chat`;

// See "Algolia" section of the README for more information.
export const ALGOLIA = {
	indexName: 'XXXXXXXXXX',
	appId: 'XXXXXXXXXX',
	apiKey: 'XXXXXXXXXX',
};

export type Sidebar = Record<
	(typeof KNOWN_LANGUAGE_CODES)[number],
	Record<string, { text: string; link: string }[]>
>;
export const SIDEBAR: Sidebar = {
	en: {
		'Workflow': [
			{ text: 'Introduction', link: 'en/introduction' },
			{ text: 'Analysis', link: 'en/analysis' },
			{ text: 'Codebase', link: 'en/codebase' },
			{ text: 'Components', link: 'en/components' },
			{ text: 'Pages', link: 'en/pages' },
			{ text: 'Final Steps', link: 'en/final-steps' },
		],
		'Local Environment': [
			{ text: 'Introduction', link: 'en/local-intro' }
		],
	},
};
