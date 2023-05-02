import { types } from './data/types.data';

export class TypesService {
	constructor() {
		this.types = types;
	}

	async find() {
		return this.types;
	}

	async findOne(id) {
		const type = this.types.filter((item) => item.id === id);

		if (type !== 0) {
			return type;
		} else {
			return false;
		}
	}
}
