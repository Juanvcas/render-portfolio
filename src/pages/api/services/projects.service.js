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
}
