import { TypesService } from '../services/types.service';

const service = new TypesService();

export default async function Types(req, res) {
	if (req.method === 'GET') {
		const types = await service.find();
		if (types) {
			await res.status(200).json(types);
		} else {
			await res.status(404).json({ message: 'Types not found' });
		}
	}
}
