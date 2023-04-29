import { ProjectsService } from '../services/projects.service';

const service = new ProjectsService();

export default async function Projects(req, res) {
	if (req.method === 'GET') {
		const projects = await service.find();
		if (projects) {
			await res.status(200).json(projects);
			console.log(projects);
		} else {
			await res.status(404).json({ message: 'Projects not found' });
		}
	}
}
