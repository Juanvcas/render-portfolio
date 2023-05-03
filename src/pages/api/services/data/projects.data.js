import { categories } from './categories.data';
import { types } from './types.data';
import { technologies, engines } from './technologies.data';

export const projects = [
	{
		id: 'san-jeronimo',
		type: types[0],
		categories: [categories[0], categories[2]],
		technologies: {
			model: [technologies[1], technologies[2]],
			render: [engines[1]],
		},
		tags: ['casa', 'casas', 'casa de campo', 'casa campestre', 'piscina'],
		title: 'San Jerónimo',
		subtitle: 'Proyecto de Arquitectura',
		text: 'Hermosa casa campestre de dos niveles con diseño moderno, con colores blancos y negros en un diseño minimalista y elegante, que con sus areas abiertas y grandes ventanales hacen que la luz sea el protagonista en toda la casa. \nSu diseño abierto permite tener un bonito jardín interno que llena de vida la casa, ademas cuenta con un gran patio trasero, piscina y barra desde la cocina.',
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
		categories: [categories[0], categories[1], categories[2]],
		technologies: {
			model: [technologies[1], technologies[2]],
			render: [engines[1]],
		},
		tags: ['casa', 'casas', 'casa de campo', 'casa campestre', 'piscina'],
		title: 'Daniel Santiago',
		subtitle: 'Proyecto de Arquitectura',
		text: 'Espaciosa casa campestre de un nivel estilo industrial, con grandes salones y espacios comunes donde la luz es la protagonista. \nSu estilo industrial en concreto pulido y toques negros hacen que la vegetación resalte sobre lo demás y permitiendo un diseño de mobiliario moderno y sofisticado.',
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
	{
		id: 'casa-bello',
		type: types[0],
		categories: [categories[0], categories[2]],
		technologies: {
			model: [technologies[1]],
			render: [engines[1]],
		},
		tags: ['casa', 'casas', 'casa de campo', 'casa campestre'],
		title: 'Casa Bello',
		subtitle: 'Proyecto de Arquitectura',
		text: 'Moderna Casa campestre de un nivel con estilo industrial, posee un diseño irregular que irrumpe con lo mas tradicional y ofrece un espacio mas dinámico. \nSus colores en concreto y ladrillo permiten que la vegetación resalte y la casa se integre con el paisaje, convirtiéndolo en un espacio natural y lleno de vida',
		images: [
			{
				src: 'https://i.postimg.cc/HLDKfmYG/Enscape_2020-07-07-13-38-35.jpg',
				alt: 'Casa de campo de un nivel con una puerta ventanal en vidrio y marcos negros',
			},
			{
				src: 'https://i.postimg.cc/FKpZDX1V/Enscape_2020-07-07-13-37-17.jpg',
				alt: 'Casa de campo de un nivel en concreto y ladrillo con grandes ventanas y mucha vegetación',
			},
			{
				src: 'https://i.postimg.cc/hGLwnYvX/Enscape_2020-07-07-13-50-47.jpg',
				alt: 'Casa de campo de un nivel con pintura blanca y habitaciones con grandes ventanas',
			},
			{
				src: 'https://i.postimg.cc/XJxzGyw3/Enscape_2020-07-07-13-49-19.jpg',
				alt: 'Casa de campo de un nivel en concreto y ladrillo con grandes ventanas y mucha vegetación',
			},
			{
				src: 'https://i.postimg.cc/D08BSpvd/Enscape_2020-07-07-13-15-45.jpg',
				alt: 'Interior de casa de campo en concreto pulido, con muebles grises oscuros y comedor en madera',
			},
			{
				src: 'https://i.postimg.cc/63HM5xXp/Enscape_2020-07-07-13-17-11.jpg',
				alt: 'Interior de casa de campo en concreto pulido, con muebles grises oscuros, comedor en madera y cocina gris oscura',
			},
			{
				src: 'https://i.postimg.cc/qqSQycgf/Enscape_2020-07-07-13-19-27.jpg',
				alt: 'Cocina gris oscura con superficies en mármol negro y electrodomésticos gris plateado',
			},
			{
				src: 'https://i.postimg.cc/t402gzLW/Enscape_2020-07-07-13-23-08.jpg',
				alt: 'Corredor interior en ladrillo con grandes ventanas, pergola en madera y vidrio y vegetación',
			},
			{
				src: 'https://i.postimg.cc/R04d7ZC0/Enscape_2020-07-07-13-34-20.jpg',
				alt: 'Habitación en colores blancos, con cama doble blanca, muebles grises y grandes ventanas',
			},
			{
				src: 'https://i.postimg.cc/gjJBvkDh/Enscape_2020-07-15-13-29-04.jpg',
				alt: 'Corredor interior en ladrillo con grandes ventanas, pergola en madera y vidrio y vegetación de noche',
			},
			{
				src: 'https://i.postimg.cc/zX4PgNRL/Enscape_2020-07-15-13-31-16.jpg',
				alt: 'Interior de casa de campo en concreto pulido, con muebles grises oscuros, comedor en madera y cocina gris oscura de noche',
			},
			{
				src: 'https://i.postimg.cc/05BVTvnt/Enscape_2020-07-15-13-37-08.jpg',
				alt: 'Casa de campo de un nivel en concreto y ladrillo con grandes ventanas y mucha vegetación de noche',
			},
		],
	},
	{
		id: 'casa-la-ceja',
		type: types[0],
		categories: [categories[0], categories[2]],
		technologies: {
			model: [technologies[0], technologies[1]],
			render: [engines[2]],
		},
		tags: ['casa', 'casas', 'casa de campo', 'casa campestre'],
		title: 'Casa La Ceja',
		subtitle: 'Proyecto de Arquitectura',
		text: 'Lujosa casa de campo de un nivel de estilo industrial, con un diseño diseño moderno y sofisticado en concreto negro y ladrillo, con areas abiertas, grandes ventanas y mucha vegetación. Sus toques en negro resaltan la elegancia del diseño y sus colores hacen que se integre con la vegetación',
		images: [
			{
				src: 'https://i.postimg.cc/T1XK7XDK/Exterior_01-2Post.jpg',
				alt: 'Casa de campo de un nivel con pergola de concreto negro, metal y vidrio',
			},
			{
				src: 'https://i.postimg.cc/cJ2g331M/Exterior_05-2Post.jpg',
				alt: 'Casa de campo de un nivel con pergola de concreto negro, metal y vidrio',
			},
			{
				src: 'https://i.postimg.cc/XvGXnvKZ/Exterior_02Post.jpg',
				alt: 'Casa de campo de un nivel, con grandes ventanas, muro en ladrillo y concreto negro',
			},
			{
				src: 'https://i.postimg.cc/QtctWnyh/Exterior_07Post.jpg',
				alt: 'Casa de campo de un nivel, con grandes ventanas, muro en ladrillo y concreto negro',
			},
			{
				src: 'https://i.postimg.cc/RZ0NbdNL/Exterior_03Post.jpg',
				alt: 'Casa de campo de un nivel, con grandes ventanas, muro en ladrillo y concreto negro',
			},
			{
				src: 'https://i.postimg.cc/L8h8Vsby/Interior_03Post.jpg',
				alt: 'Interior de casa de campo en concreto pulido, con muebles gris claro y cocina gris claro',
			},
			{
				src: 'https://i.postimg.cc/BZcbSkFC/Interior_02Post.jpg',
				alt: 'Interior de casa de campo en concreto pulido, con muebles gris claro y cocina gris claro',
			},
			{
				src: 'https://i.postimg.cc/FzmKbgMc/Interior_01Post.jpg',
				alt: 'Cocina gris claro hecha en mármol, con comedor en madera clara',
			},
			{
				src: 'https://i.postimg.cc/tCBgP62Z/Interior_05Post.jpg',
				alt: 'Mini sala con sofá gris oscuro, mesa en madera y TV',
			},
			{
				src: 'https://i.postimg.cc/8z3PXS8T/Interior_04Post.jpg',
				alt: 'Habitación en concreto pulido y ladrillo, con cama doble blanca y muebles gris oscuro',
			},
			{
				src: 'https://i.postimg.cc/7YH6f9Mr/Interior_06-2Post.jpg',
				alt: 'Baño en concreto pulido con muebles en madera clara',
			},
		],
	},
	{
		id: 'casa-doradal',
		type: types[0],
		categories: [categories[0], categories[2]],
		technologies: {
			model: [technologies[0], technologies[1]],
			render: [engines[1]],
		},
		tags: ['casa', 'casas', 'casa de campo', 'casa campestre', 'piscina'],
		title: 'Casa Doradal',
		subtitle: 'Proyecto de Arquitectura',
		text: 'Espaciosa casa de campo de un nivel de estilo moderno, con un diseño a gran escala con grandes areas abiertas, en colores mayormente blancos y toques en ladrillo, grandes ventanales, espacios comunes y piscina. Su diseño con cubierta inclinada le da un toque irregular y resalta la modernidad en toda la casa',
		images: [
			{
				src: 'https://i.postimg.cc/gc3LScCk/Enscape-2021-07-10-00-05-05.jpg',
				alt: 'Casa de campo blanca de un nivel con techo inclinado y grandes ventanas',
			},
			{
				src: 'https://i.postimg.cc/4dDtKmjj/Enscape-2021-07-09-23-12-09.jpg',
				alt: 'Casa de campo blanca de un nivel con techo inclinado y grandes ventanas',
			},
			{
				src: 'https://i.postimg.cc/ZqD6SfHb/Enscape-2021-05-12-20-51-35.jpg',
				alt: 'Casa de campo blanca de un nivel con techo inclinado y un gran portal principal',
			},
			{
				src: 'https://i.postimg.cc/JnDZ4bYb/Enscape-2021-05-12-20-49-30.jpg',
				alt: 'Casa de campo blanca de un nivel con muro ecológico y pergola de madera',
			},
			{
				src: 'https://i.postimg.cc/Y0QFQtH0/Enscape-2021-07-09-23-23-36.jpg',
				alt: 'Casa de campo blanca de un nivel con pergola de madera y mobiliario exterior',
			},
			{
				src: 'https://i.postimg.cc/YqwYML6W/Enscape-2021-07-10-00-01-18.jpg',
				alt: 'Casa de campo blanca de un nivel con techo inclinado, pasillo con muro persiana y pergola de madera y zona interior abierta',
			},
			{
				src: 'https://i.postimg.cc/6QHfQ6WN/Enscape-2021-05-12-20-08-36.jpg',
				alt: 'Interior de casa de campo en color blanco y piso en concreto con muebles blancos y cocina blanca',
			},
			{
				src: 'https://i.postimg.cc/2yWQT44z/Enscape-2021-05-12-20-13-21.jpg',
				alt: 'Interior de casa de campo en color blanco y piso en concreto con muebles blancos y cocina blanca',
			},
			{
				src: 'https://i.postimg.cc/7YvMhWkb/Enscape-2021-05-12-20-15-24.jpg',
				alt: 'Interior de casa de campo en color blanco y piso en concreto con muebles blancos y cocina blanca',
			},
			{
				src: 'https://i.postimg.cc/DZHQqC4j/Enscape-2021-05-12-20-26-10.jpg',
				alt: 'Pasillo interior con muro persiana de madera',
			},
			{
				src: 'https://i.postimg.cc/QNKJXrvR/Enscape-2021-05-12-20-28-51.jpg',
				alt: 'Habitación con mini mezzanine a media altura, cama doble, piso en concreto y fachada en piedra',
			},
			{
				src: 'https://i.postimg.cc/65dVvfWc/Enscape-2021-05-12-20-30-40.jpg',
				alt: 'Habitación con mini mezzanine a media altura, cama doble, piso en concreto y fachada en piedra',
			},
			{
				src: 'https://i.postimg.cc/d1LmZM3Z/Enscape-2021-05-12-20-32-21.jpg',
				alt: 'Baño con muros en piedra, ducha embebida, lavamanos en madera y sanitario',
			},
			{
				src: 'https://i.postimg.cc/Sxk67Yjh/Enscape-2021-05-12-20-35-24.jpg',
				alt: 'Habitación blanca con cama doble y tv con grandes puertas en madera',
			},
			{
				src: 'https://i.postimg.cc/4xPz84hh/Enscape-2021-05-12-20-42-33.jpg',
				alt: 'Zona interior con muro persiana y pergola de madera, muebles blancos y mesa de madera',
			},
			{
				src: 'https://i.postimg.cc/q772Wf8D/Enscape-2021-05-12-20-44-46.jpg',
				alt: 'Habitación blanca con cama doble y tv con grandes ventanas',
			},
		],
	},
	{
		id: 'cabanas-glamping',
		type: types[0],
		categories: [categories[0], categories[2]],
		technologies: {
			model: [technologies[0]],
			render: [engines[0]],
		},
		tags: ['cabaña', 'cabañas', 'glamping', 'campo', 'bosque'],
		title: 'Cabañas Glamping',
		subtitle: 'Proyecto de Arquitectura',
		text: 'Hermoso proyecto de cabañas glamping, con multiples diseños y formas orgánicas hechas principalmente en madera. Sus diseños y materiales se integran perfectamente con el paisaje, ya sea en bosque o campo abierto, ademas de ser cálidas y acogedoras para estar con esa persona espacial',
		images: [
			{
				src: 'https://i.postimg.cc/Pq4KXHVz/RC4p_005.jpg',
				alt: 'Cabaña de madera de dos niveles con diseño en rombo y grandes ventanales tanto frontal como trasero',
			},
			{
				src: 'https://i.postimg.cc/Bn2MzHxz/RC4p-004.jpg',
				alt: 'Cabaña de madera de dos niveles con diseño en rombo y grandes ventanales tanto frontal como trasero',
			},
			{
				src: 'https://i.postimg.cc/6qSYkhjk/RC4p-002.jpg',
				alt: 'Interior de cabaña con muebles en madera y cojines blancos',
			},
			{
				src: 'https://i.postimg.cc/85ZyHGhP/RC4p-003.jpg',
				alt: 'Baño de cabaña con bañera, lavamanos y sanitario',
			},
			{
				src: 'https://i.postimg.cc/G3S7TcLX/RC4p-001.jpg',
				alt: 'Habitación de cabaña con colchón doble, muebles en madera, cojines y alfombra',
			},
			{
				src: 'https://i.postimg.cc/vBzKssVC/RC6_001.jpg',
				alt: 'Cabaña de madera de dos niveles con diseño triangular y grandes ventanales tanto frontal como trasero',
			},
			{
				src: 'https://i.postimg.cc/nc3HD9s6/RC6_005.jpg',
				alt: 'Cabaña de madera de dos niveles con diseño triangular y grandes ventanales tanto frontal como trasero',
			},
			{
				src: 'https://i.postimg.cc/Gh8MkZ9d/RC6_004.jpg',
				alt: 'Baño de cabaña con bañera, lavamanos y sanitario',
			},
			{
				src: 'https://i.postimg.cc/Qx2fS0W5/RC6_02.jpg',
				alt: 'Habitación de cabaña con colchón doble, cojines y alfombra',
			},
			{
				src: 'https://i.postimg.cc/cJZXGChL/RC6_003.jpg',
				alt: 'Mirador de cabaña, con pergola en cristal y estructura metálica con muebles de madera y cojines blancos',
			},
			{
				src: 'https://i.postimg.cc/jqZVg0sf/PC8-001.jpg',
				alt: 'Cabaña de madera de dos niveles con diseño en globo y con estructura tipo jaula con barras de madera',
			},
			{
				src: 'https://i.postimg.cc/fyH6JXHC/PC8-002.jpg',
				alt: 'Cabaña de madera de dos niveles con diseño en globo y con estructura tipo jaula con barras de madera',
			},
			{
				src: 'https://i.postimg.cc/6p4Dp8CV/PC8-005.jpg',
				alt: 'Interior de cabaña con muebles en madera',
			},
			{
				src: 'https://i.postimg.cc/zXcsNCHX/PC8-003.jpg',
				alt: 'Baño de cabaña con bañera, lavamanos y sanitario',
			},
			{
				src: 'https://i.postimg.cc/KYnwtCqR/PC8-007.jpg',
				alt: 'Habitación de cabaña con lona de cubierta y cama doble',
			},
			{
				src: 'https://i.postimg.cc/MTq45tNt/RC2p-002.jpg',
				alt: 'Cabaña de madera de dos niveles con diseño en cilindro y con estructura tipo persiana con paneles de madera',
			},
			{
				src: 'https://i.postimg.cc/SRtvy4st/RC2p-005.jpg',
				alt: 'Cabaña de madera de dos niveles con diseño en cilindro y con estructura tipo persiana con paneles de madera',
			},
			{
				src: 'https://i.postimg.cc/4dP0SVTG/RC2p-004.jpg',
				alt: 'Interior de cabaña con muebles en madera',
			},
			{
				src: 'https://i.postimg.cc/Y2XVN63f/RC2p-006.jpg',
				alt: 'Habitación de cabaña con colchón doble, cojines y alfombra',
			},
			{
				src: 'https://i.postimg.cc/vHkNkGC4/RC2p-007-1.jpg',
				alt: 'Cabaña de madera de dos niveles con diseño en cilindro y con estructura tipo persiana con paneles de madera',
			},
		],
	},
	{
		id: 'silla-button',
		type: types[1],
		categories: [categories[0], categories[1], categories[2]],
		technologies: {
			model: [technologies[0]],
			render: [engines[0]],
		},
		tags: ['silla', 'sillas'],
		title: 'Silla Button',
		subtitle: 'Proyecto de Líneas y Diseños',
		text: 'Hermosa silla de diseño clásico, con estructura metálica pintada con espaldar y asiento en madera de roble natural lacada. Su diseño minimalista y simple hace que se pueda integrar en prácticamente cualquier espacio, resaltando lo natural y elegante del producto',
		images: [
			{
				src: 'https://i.postimg.cc/m2qTyHT5/Silla-Button-01.jpg',
				alt: 'Silla de madera de roble natural con estructura metálica',
			},
			{
				src: 'https://i.postimg.cc/YCWMnC9q/Silla-Button-02.jpg',
				alt: 'Silla de madera de roble natural con estructura metálica',
			},
			{
				src: 'https://i.postimg.cc/k5P9kP6N/Silla-Button-03.jpg',
				alt: 'Silla de madera de roble natural con estructura metálica',
			},
			{
				src: 'https://i.postimg.cc/3wj7hfms/Silla-Button-07.jpg',
				alt: 'Silla de madera de roble natural con estructura metálica',
			},
		],
		video: [
			{
				src: 'https://drive.google.com/file/d/1m1w06i8erj1pLB3E6ZJ82iyzt3yGJ9RI/preview',
				type: 'video/mp4',
			},
		],
	},
	{
		id: 'sillas-slim-slide',
		type: types[1],
		categories: [categories[0], categories[2]],
		technologies: {
			model: [technologies[0]],
			render: [engines[0]],
		},
		tags: [
			'silla',
			'sillas',
			'butaca',
			'butacas',
			'mesa',
			'mesas',
			'restaurante',
		],
		title: 'Sillas Slim y Slide',
		subtitle: 'Proyecto de Líneas y Diseños',
		text: 'Elegante y funcional silla multi propósito Slim, con diseño simple pero moderno que se integra fácilmente a cualquier espacio, ya sea de interior o de exterior, perfecta para restaurantes y espacios al aire libre',
		images: [
			{
				src: 'https://i.postimg.cc/xCH6JmrW/SS02_01.jpg',
				alt: 'Restaurante moderno con sillas slim, butacas y mesas de madera',
			},
			{
				src: 'https://i.postimg.cc/wB1fzPwx/SS_02.jpg',
				alt: 'Restaurante moderno con sillas slim, butacas y mesas de madera',
			},
			{
				src: 'https://i.postimg.cc/VkLZG5MC/SS_01.jpg',
				alt: 'Restaurante moderno con sillas slim, butacas y mesas de madera',
			},
			{
				src: 'https://i.postimg.cc/Xvt2Y8Pf/SS_03.jpg',
				alt: 'Restaurante moderno con sillas slim, butacas y mesas de madera',
			},
			{
				src: 'https://i.postimg.cc/Jz669mcd/SS_04.jpg',
				alt: 'Restaurante moderno con sillas slim, butacas y mesas de madera',
			},
		],
	},
	{
		id: 'oficina-call-center',
		type: types[1],
		categories: [categories[0], categories[2]],
		technologies: {
			model: [technologies[0]],
			render: [engines[0]],
		},
		tags: [
			'oficina',
			'oficinas',
			'silla',
			'sillas',
			'escritorio',
			'escritorios',
			'mesa',
			'mesas',
		],
		title: 'Oficina Call Center',
		subtitle: 'Proyecto de Líneas y Diseños',
		text: 'Funcional y elegante proyecto de oficinas para call center, con multiples escritorios y sillas ergonómicas en un espacio dinámico e interactivo. Su diseño en madera y colores oscuros crean un espacio cómodo y agradable a la vista',
		images: [
			{
				src: 'https://i.postimg.cc/NfppyfJ0/Isla-02.jpg',
				alt: 'Oficina call center con escritorios gris oscuro, sillas negras y muebles en madera',
			},
			{
				src: 'https://i.postimg.cc/XNK2bg9d/Isla-03.jpg',
				alt: 'Oficina call center con escritorios gris oscuro, sillas negras y muebles en madera',
			},
			{
				src: 'https://i.postimg.cc/ZKTwKyLg/Isla-05.jpg',
				alt: 'Oficina call center con escritorios gris oscuro, sillas negras y muebles en madera',
			},
			{
				src: 'https://i.postimg.cc/6qKYZ7x8/Isla-06.jpg',
				alt: 'Oficina call center con escritorios gris oscuro, sillas negras y muebles en madera',
			},
			{
				src: 'https://i.postimg.cc/wBsVb56t/jardinera-01-1.jpg',
				alt: 'jardinera biblioteca en madera con estructura metálica',
			},
			{
				src: 'https://i.postimg.cc/C1kcdGXy/Mito-01.jpg',
				alt: 'Espacio interactivo con sofas grises, mesa y tablero',
			},
			{
				src: 'https://i.postimg.cc/sxJK4V3w/Mito-02.jpg',
				alt: 'Espacio interactivo con sofas grises, mesa y tablero',
			},
		],
	},
	{
		id: 'silla-musa',
		type: types[1],
		categories: [categories[0], categories[2]],
		technologies: {
			model: [technologies[0]],
			render: [engines[0]],
		},
		tags: ['silla', 'sillas', 'poltrona', 'poltronas', 'sofa', 'sofas'],
		title: 'Silla Musa',
		subtitle: 'Proyecto de Líneas y Diseños',
		text: 'Cómoda y elegante poltrona, con diseño modero que se adapta muy bien a los espacios ejecutivos y salas hogareñas. Con sus colores claros y patas en madera hacen de este producto un esencial en las oficinas ejecutivas',
		images: [
			{
				src: 'https://i.postimg.cc/50mNSNx4/Musa_001.jpg',
				alt: 'Poltrona con asiento tapizado y patas en madera natural',
			},
			{
				src: 'https://i.postimg.cc/Y0q2nK91/Musa_002-1.jpg',
				alt: 'Poltrona con asiento tapizado y patas en madera natural',
			},
			{
				src: 'https://i.postimg.cc/QtDd7WZY/Musa_01.jpg',
				alt: 'Poltrona con asiento tapizado y patas en madera natural',
			},
			{
				src: 'https://i.postimg.cc/BvHvtBk1/Musa_02.jpg',
				alt: 'Poltrona con asiento tapizado y patas en madera natural',
			},
			{
				src: 'https://i.postimg.cc/t41JGjzk/Musa_03.jpg',
				alt: 'Poltrona con asiento tapizado y patas en madera natural',
			},
			{
				src: 'https://i.postimg.cc/44BxKdLw/Musa2_02.jpg',
				alt: 'Poltrona con asiento tapizado y patas en madera natural',
			},
			{
				src: 'https://i.postimg.cc/2SP6zKcD/Musa2_01.jpg',
				alt: 'Poltrona con asiento tapizado y patas en madera natural',
			},
			{
				src: 'https://i.postimg.cc/kXGXWmLC/Musa2_03.jpg',
				alt: 'Poltrona con asiento tapizado y patas en madera natural',
			},
			{
				src: 'https://i.postimg.cc/jd1qX1r7/Musa_Plywood_01.jpg',
				alt: 'Poltrona con asiento tapizado y patas en madera natural',
			},
		],
	},
	{
		id: 'artcero',
		type: types[1],
		categories: [categories[0], categories[2]],
		technologies: {
			model: [technologies[0]],
			render: [engines[0]],
		},
		tags: ['mesa', 'mesas', 'jardinera', 'jardineras', 'perchero', 'percheros'],
		title: 'Artcero',
		subtitle: 'Proyecto de Artcero',
		text: 'Elegantes y minimalistas diseños de mobiliario, con colores que resaltan y dan vida al espacio. Su diseño simple hace que se adapten muy fácilmente a cualquier espacio, ademas de su gran variedad de colores para combinar con cualquier otro tipo de mueble',
		images: [
			{
				src: 'https://i.postimg.cc/HsrDLvvN/Mesa_Auxiliar_01.jpg',
				alt: 'Mesa auxiliar metálica minimalista, con libros y planta',
			},
			{
				src: 'https://i.postimg.cc/BQRWP5dn/Mesa_Auxiliar_02.jpg',
				alt: 'Mesa auxiliar metálica minimalista, con libros y planta',
			},
			{
				src: 'https://i.postimg.cc/N07Zn3LK/Mesa_Auxiliar_03.jpg',
				alt: 'Mesa auxiliar metálica minimalista, con libros y planta junto a un sofa beige',
			},
			{
				src: 'https://i.postimg.cc/xCfBV6bt/Materas_02.jpg',
				alt: 'Jardinera alta metálica con plantas',
			},
			{
				src: 'https://i.postimg.cc/44LRsRPt/Materas_03.jpg',
				alt: 'Jardinera alta metálica con plantas',
			},
			{
				src: 'https://i.postimg.cc/ZRw2b68Z/Materas_04.jpg',
				alt: 'Jardinera alta metálica con plantas junto a un sofa blanco',
			},
			{
				src: 'https://i.postimg.cc/4xcD67gb/Mesa_de_Centro_01.jpg',
				alt: 'Mesa de centro metálica minimalista con libros y planta',
			},
			{
				src: 'https://i.postimg.cc/3NW6dW1G/Mesa_de_Centro_02.jpg',
				alt: 'Mesa de centro metálica minimalista con libros y planta',
			},
			{
				src: 'https://i.postimg.cc/pXh4vhpb/Mesa_de_Centro_03.jpg',
				alt: 'Mesa de centro metálica minimalista con libros y planta junto a un sofa blanco y otra planta',
			},
			{
				src: 'https://i.postimg.cc/Fzq6cmCB/Perchero_01.jpg',
				alt: 'Perchero minimalista metálico con un bolso y sombrilla',
			},
			{
				src: 'https://i.postimg.cc/tRmw8tRN/Perchero_02.jpg',
				alt: 'Perchero minimalista metálico con un bolso y sombrilla',
			},
			{
				src: 'https://i.postimg.cc/zXsMGzgL/Perchero_03.jpg',
				alt: 'Perchero minimalista metálico con un bolso y sombrilla en una pared blanca',
			},
		],
	},
	{
		id: 'cubos-artiscticos',
		type: types[2],
		categories: [categories[0], categories[2]],
		technologies: {
			model: [technologies[0]],
			render: [engines[0]],
		},
		tags: ['cubo', 'cubos', 'espejo', 'espejos', 'cortina', 'cortinas'],
		title: 'Cubos Artísticos',
		subtitle: 'Proyecto de Arte',
		text: 'Un proyecto artístico hecho para una universitaria de la facultad de artes, conlleva en un modelo 3D y render según un boceto dado por la artista en un dibujo a mano',
		images: [
			{
				src: 'https://i.postimg.cc/XqVbZnnj/CA01-1.jpg',
				alt: 'Espejos dorados en una habitación oscura con cortinas negras',
			},
			{
				src: 'https://i.postimg.cc/DzXFHCCT/CA01-3.jpg',
				alt: 'Espejos dorados en una habitación oscura con cortinas negras',
			},
			{
				src: 'https://i.postimg.cc/DZ3FTqDb/CA01-4.jpg',
				alt: 'Espejos dorados en una habitación oscura con cortinas negras y un maniquí',
			},
			{
				src: 'https://i.postimg.cc/26dY81R9/CA02-1.jpg',
				alt: 'Habitación oscura con raíces negras en las paredes y objetos en el centro',
			},
			{
				src: 'https://i.postimg.cc/m2LLkyrY/CA02-2.jpg',
				alt: 'Habitación oscura con raíces negras en las paredes y objetos en el centro',
			},
			{
				src: 'https://i.postimg.cc/fR3hS2Q9/CA02-4.jpg',
				alt: 'Habitación oscura con raíces negras en las paredes y objetos en el centro y un maniquí',
			},
			{
				src: 'https://i.postimg.cc/rwv211qY/CA03-1.jpg',
				alt: 'Habitación oscura inundada con un ataúd de cristal en el centro y tres pájaros rojos',
			},
			{
				src: 'https://i.postimg.cc/D0f9v5cm/CA03-3.jpg',
				alt: 'Habitación oscura inundada con un ataúd de cristal en el centro y tres pájaros rojos',
			},
			{
				src: 'https://i.postimg.cc/4d1CRjVr/CA03-4-1.jpg',
				alt: 'Habitación oscura inundada con un ataúd de cristal en el centro y tres pájaros rojos',
			},
		],
	},
];
