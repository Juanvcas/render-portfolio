import { categories } from './categories.data';
import { types } from './types.data';
import { technologies, engines } from './technologies.data';
import { customAlphabet } from 'nanoid';

const id = customAlphabet('1234567890abcdef', 10);

export const projects = [
	{
		id: id(),
		type: types[0],
		categories: [categories[0]],
		tags: ['casa', 'casas', 'casa de campo', 'casa campestre', 'piscina'],
		technologies: {
			model: [technologies[1], technologies[2]],
			render: [engines[1]],
		},
		title: 'San Jerónimo',
		subtitle: 'Proyecto de Arquitectura',
		text: 'Hermosa casa campestre de dos niveles con diseño moderno, colores blancos y negros en un diseño minimalista y elegante, areas abiertas y grandes ventanales hacen que la luz sea el protagonista en toda la casa. \n\nSu diseño abierto permite tener un bonito jardín interno que llena de vida la casa, ademas cuenta con un gran patio trasero, piscina y barra desde la cocina.',
		images: [
			{
				src: 'https://i.postimg.cc/6pb390mT/Enscape-2020-05-18-17-30-20.jpg',
				alt: 'Casa de campo de dos niveles desde el patio trasero',
			},
			{
				src: 'https://i.postimg.cc/cLFKvZrx/Enscape-2020-05-18-18-20-41.jpg',
				alt: 'Casa de campo de dos niveles desde el patio trasero',
			},
			{
				src: 'https://i.postimg.cc/VL1545ts/Enscape-2020-05-18-17-34-44.jpg',
				alt: 'Casa de campo de dos niveles desde el frente',
			},
			{
				src: 'https://i.postimg.cc/057bp7bH/Enscape-2020-05-18-18-12-08.jpg',
				alt: 'Cocina integral en madera clara y metal oscuro',
			},
			{
				src: 'https://i.postimg.cc/sggxd8Kt/Enscape-2020-05-18-17-28-42.jpg',
				alt: 'Sala de casa de campo con jardín interior con vista desde la cocina',
			},
			{
				src: 'https://i.postimg.cc/4N5y0Zv6/Enscape-2020-05-18-17-36-21.jpg',
				alt: 'Sala de casa de campo con un jardín interior y mobiliario claro',
			},
			{
				src: 'https://i.postimg.cc/JhgGQqNS/Enscape-2020-07-09-17-57-41.jpg',
				alt: 'Casa de campo de dos niveles desde el patio trasero en la noche',
			},
			{
				src: 'https://i.postimg.cc/wjqyx3x4/Enscape-2020-07-09-18-13-43.jpg',
				alt: 'Casa de campo de dos niveles desde el patio trasero en la noche',
			},
			{
				src: 'https://i.postimg.cc/5tjXvGCw/Enscape-2020-07-09-19-09-53.jpg',
				alt: 'Casa de campo de dos niveles desde el frente en la noche',
			},
		],
	},
];
