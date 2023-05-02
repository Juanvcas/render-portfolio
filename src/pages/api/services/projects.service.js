import { projects } from './data/projects.data';

export class ProjectsService {
	constructor() {
		this.projects = projects;
	}

	async find() {
		return this.projects;
	}

	async findOne(id) {
		const project = this.projects.filter((item) => item.id === id);

		if (project !== 0) {
			return project;
		} else {
			return false;
		}
	}

	async search(query) {
		const search = query
			.normalize('NFD')
			.replace(/[\u0300-\u036f]/g, '')
			.toLowerCase();

		const norm = (string) =>
			string
				.normalize('NFD')
				.replace(/[\u0300-\u036f]/g, '')
				.toLowerCase();

		const result = this.projects.filter(
			(project) =>
				norm(project.title).includes(search) ||
				project.categories.some((cat) => norm(cat.title).includes(search)) ||
				project.categories.some((cat) =>
					cat.tags.some((tag) => norm(tag).includes(search))
				) ||
				norm(project.type.title).includes(search) ||
				project.type.tags.some((tag) => norm(tag).includes(search)) ||
				project.technologies.model.some((tech) =>
					norm(tech.title).includes(search)
				) ||
				project.technologies.render.some((tech) =>
					norm(tech.title).includes(search)
				)
		);

		return result;
	}

	async filter(query) {
		const { category, type } = JSON.parse(query);
		if (category && type !== 'false') {
			console.log(typeof type);
			const result = this.projects.filter(
				(project) =>
					project.categories.some((cat) => cat.title == category) &&
					project.type.title == type
			);
			return result;
		} else if (type === 'false') {
			console.log('cat');
			const result = this.projects.filter((project) =>
				project.categories.some((cat) => cat.title == category)
			);
			return result;
		} else if (category === 'false') {
			console.log('tp');
			const result = this.projects.filter(
				(project) => project.type.title == type
			);
			return result;
		}
	}
}
