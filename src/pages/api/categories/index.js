import { CategoriesService } from '../services/categories.service';

const service = new CategoriesService();

export default async function Categories(req, res) {
	if (req.method === 'GET') {
		const categories = await service.find();
		if (categories) {
			await res.status(200).json(categories);
		} else {
			await res.status(404).json({ message: 'Categories not found' });
		}
	}
}
