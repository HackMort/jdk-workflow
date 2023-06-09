export const SITE = {
	title: 'Web Development',
	description: 'JDK Web Development Workflow Website.',
	defaultLanguage: 'en-us',
} as const;

export const OPEN_GRAPH = {
	image: {
		src: 'https://github.com/HackMort/jdk-workflow/blob/359bea5640e6b785be658ea03c83bd38b8205ec4/public/logo.png?raw=true',
		alt:
			'JDK Outstanding Technologies Logo ',
	},
	twitter: 'astrodotbuild',
};

export const KNOWN_LANGUAGES = {
	English: 'en',
} as const;
export const KNOWN_LANGUAGE_CODES = Object.values(KNOWN_LANGUAGES);
export const GITHUB_EDIT_URL = `https://github.com/withastro/astro/tree/main/examples/docs`;

// See "Algolia" section of the README for more information.
export const ALGOLIA = {
	indexName: 'tech-jdoutstanding',
	appId: 'AKCUAKGYAJ',
	apiKey: '9344bf64fb52846c58b95a2428f3a697',
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
			{ text: 'Introduction', link: 'en/local-intro' },
			{ text: 'How to install VSCode on Windows 11', link: 'en/install-vscode-windows-11' },
			{ text: 'How to install GIT on Windows 11', link: 'en/install-git-windows-11' },
			{ text: 'How to install nodejs on Windows 11', link: 'en/install-nodejs-windows-11' },
		],
		'Resources': [
			{ text: 'BEM', link: 'en/bem' },
			{ text: 'Git', link: 'en/git' },
			{ text: 'ESLint', link: 'en/eslint' },
			{ text: 'Asset compression', link: 'en/asset-compression' }
		],
	},
};
