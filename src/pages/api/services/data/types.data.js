import { customAlphabet } from 'nanoid';

const id = customAlphabet('1234567890abcdef', 10);

export const types = [
	{
		id: id(5),
		title: 'Arquitectura',
		tags: ['construcción', 'estructura'],
	},
	{
		id: id(5),
		title: 'Mobiliario',
		tags: ['mueble', 'muebles'],
	},
	{
		id: id(5),
		title: 'Arte',
		tags: ['ilustración', 'creativo'],
	},
];
