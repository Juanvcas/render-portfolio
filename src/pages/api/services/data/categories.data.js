import { customAlphabet } from 'nanoid';

const id = customAlphabet('1234567890abcdef', 10);

export const categories = [
	{
		id: id(5),
		title: 'Renderización',
		description:
			'Renderización de imágenes de alta resolución con carga visual variable de arquitectura, mobiliario, arte, entre otros.',
		tags: ['render', 'renderizacion', 'imagen', 'imágenes'],
	},
	{
		id: id(5),
		title: 'Recorridos',
		description:
			'Renderización de videos e imágenes 360 en diferentes formatos para arquitectura, mobiliario, arte, entre otros.',
		tags: ['video', 'videos', 'imágenes 360'],
	},
	{
		id: id(5),
		title: 'Modelado 3D',
		description:
			'Creación de modelos técnicos para arquitectura y modelos creativos para mobiliario y arte',
		tags: ['modelo', 'modelos', 'modelado', 'modelo 3d', 'modelos 3d', '3d'],
	},
];
