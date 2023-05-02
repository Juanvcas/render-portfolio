import { ProjectsService } from '../../services/projects.service';

const service = new ProjectsService();

export default async function Search(req, res) {
	if (req.method === 'GET') {
		const { query } = req.query;
		const result = await service.search(query);
		await res.status(200).json(result);
	}
}
