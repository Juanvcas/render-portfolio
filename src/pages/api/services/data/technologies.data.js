import { customAlphabet } from 'nanoid';

const id = customAlphabet('1234567890abcdef', 10);

export const technologies = [
	{
		id: id(5),
		title: 'Blender',
	},
	{
		id: id(5),
		title: 'SketchUp',
	},
	{
		id: id(5),
		title: 'Revit',
	},
];

export const engines = [
	{
		id: id(5),
		title: 'Cycles',
	},
	{
		id: id(5),
		title: 'Enscape',
	},
	{
		id: id(5),
		title: 'Lumion',
	},
	{
		id: id(5),
		title: 'Vray',
	},
];
