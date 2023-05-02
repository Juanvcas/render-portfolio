import { categories } from './data/categories.data';

export class CategoriesService {
	constructor() {
		this.categories = categories;
	}

	async find() {
		return this.categories;
	}

	async findOne(id) {
		const category = this.categories.filter((item) => item.id === id);

		if (category !== 0) {
			return category;
		} else {
			return false;
		}
	}
}
