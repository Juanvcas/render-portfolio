export const endpoints = {
	projects: {
		getAllProjects: `${process.env.NEXT_PUBLIC_API}/projects/`,
		getOneProject: (id) => `${process.env.NEXT_PUBLIC_API}/projects/${id}`,
	},
};
