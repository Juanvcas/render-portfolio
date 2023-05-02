import { categories } from './categories.data';
import { types } from './types.data';
import { technologies, engines } from './technologies.data';

export const projects = [
	{
		id: 'san-jeronimo',
		type: types[0],
		categories: [categories[0]],
		technologies: {
			model: [technologies[1], technologies[2]],
			render: [engines[1]],
		},
		tags: ['casa', 'casas', 'casa de campo', 'casa campestre', 'piscina'],
		title: 'San Jerónimo',
		subtitle: 'Proyecto de Arquitectura',
		text: 'Hermosa casa campestre de dos niveles con diseño moderno, colores blancos y negros en un diseño minimalista y elegante, areas abiertas y grandes ventanales hacen que la luz sea el protagonista en toda la casa. \nSu diseño abierto permite tener un bonito jardín interno que llena de vida la casa, ademas cuenta con un gran patio trasero, piscina y barra desde la cocina.',
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
	{
		id: 'daniel-santiago',
		type: types[0],
		categories: [categories[0], categories[1]],
		technologies: {
			model: [technologies[1], technologies[2]],
			render: [engines[1]],
		},
		tags: ['casa', 'casas', 'casa de campo', 'casa campestre', 'piscina'],
		title: 'Daniel Santiago',
		subtitle: 'Proyecto de Arquitectura',
		text: 'Espaciosa casa campestre de un nivel estilo industrial, con grandes salones y espacios comunes donde la luz es la protagonista. Su estilo industrial en concreto pulido y toques negros hacen que la vegetación resalte sobre lo demás y permitiendo un diseño de mobiliario moderno y sofisticado.',
		images: [
			{
				src: 'https://i.postimg.cc/4y3Tbt3K/Enscape_2020-08-07-14-20-42.jpg',
				alt: 'Casa de campo de un nivel en concreto con un muro ecológico desde el patio trasero',
			},
			{
				src: 'https://i.postimg.cc/pdDx2R7d/Enscape_2020-08-07-14-16-46.jpg',
				alt: 'Casa de campo de un nivel en concreto con pergola exterior en madera y muro ecológico',
			},
			{
				src: 'https://i.postimg.cc/JhJ7GbyM/Enscape_2020-08-07-12-30-43.jpg',
				alt: 'Casa de campo de un nivel en concreto con muros negros',
			},
			{
				src: 'https://i.postimg.cc/3Jc31Lm3/Enscape_2020-08-07-12-34-37.jpg',
				alt: 'Casa de campo de un nivel en concreto con un muro persiana en madera y una gran puerta principal',
			},
			{
				src: 'https://i.postimg.cc/59p4Y9tY/Enscape_2020-08-07-14-05-29.jpg',
				alt: 'Sala espaciosa en concreto pulido con muebles grises y comedor en madera',
			},
			{
				src: 'https://i.postimg.cc/dVZwx8jr/Enscape_2020-08-07-14-10-47.jpg',
				alt: 'Sala espaciosa en concreto pulido con muebles grises y comedor en madera',
			},
			{
				src: 'https://i.postimg.cc/MHZzPN9p/Enscape_2020-08-07-14-03-46.jpg',
				alt: 'Sala de estar en concreto pulido con biblioteca, TV y muebles grises',
			},
			{
				src: 'https://i.postimg.cc/zvd897QS/Enscape_2020-08-07-14-09-26.jpg',
				alt: 'Cocina integral estilo industrial en concreto pulido con muebles oscuros, encimeras en madera y platas',
			},
			{
				src: 'https://i.postimg.cc/W38vkSsL/Enscape_2020-08-07-14-30-35.jpg',
				alt: 'Habitación espaciosa con cama doble y muebles grises con ventanas grandes y piso en madera',
			},
			{
				src: 'https://i.postimg.cc/q7f4Vz1Y/Enscape_2020-08-07-14-27-37.jpg',
				alt: 'Baño estilo industrial en concreto negro y piso en madera con bañera, sanitario y lavamanos en concreto',
			},
			{
				src: 'https://i.postimg.cc/CMv0Mvvb/Enscape_2020-08-08-18-50-30.jpg',
				alt: 'Planta arquitectónica de la casa de campo con todas sus areas y habitaciones',
			},
		],
		video: [
			{
				src: 'https://drive.google.com/file/d/1YxhRQLnZHmHicRAjleukd8FZFawz6ufP/preview',
				type: 'video/mp4',
			},
		],
	},
];
