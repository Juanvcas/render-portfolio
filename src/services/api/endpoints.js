export const endpoints = {
	projects: {
		getAllProjects: `${process.env.NEXT_PUBLIC_API}/projects/`,
		getOneProject: (id) => `${process.env.NEXT_PUBLIC_API}/projects/${id}`,
		searchProject: (query) =>
			`${process.env.NEXT_PUBLIC_API}/projects/search/${query}`,
		filterProject: (query) =>
			`${process.env.NEXT_PUBLIC_API}/projects/filter/${query}`,
	},
	categories: {
		getAllCategories: `${process.env.NEXT_PUBLIC_API}/categories`,
		getOneCategory: (id) => `${process.env.NEXT_PUBLIC_API}/categories/${id}`,
	},
	types: {
		getAllTypes: `${process.env.NEXT_PUBLIC_API}/types`,
		getOneType: (id) => `${process.env.NEXT_PUBLIC_API}/types/${id}`,
	},
};
