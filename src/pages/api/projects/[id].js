import { ProjectsService } from '../services/projects.service';

const service = new ProjectsService();

export default async function Project(req, res) {
	if (req.method === 'GET') {
		const { id } = req.query;
		const project = await service.findOne(id);
		if (project) {
			await res.status(200).json(project);
		} else {
			await res.status(404).json({ message: 'Project not found' });
		}
	}
}
