import Head from 'next/head';
import { useRef, useState } from 'react';
import { useFetch } from '@/hooks/useFetch';
import { useSearch } from '@/hooks/useSearch';
import { useFilter } from '@/hooks/useFilter';
import { endpoints } from '@/services/api/endpoints';
import { MainBanner } from '@/components/MainBanner';
import { ProjectSlide } from '@/components/ProjectSlide';
import s from '@/styles/pages/Projects.module.css';

export default function Projects() {
	const [projects, setProjects] = useState([]);
	const [back, setBack] = useState();

	const [categories, setCategories] = useState([]);
	const [types, setTypes] = useState([]);

	useFetch(endpoints.projects.getAllProjects, setProjects, null, setBack);
	useFetch(endpoints.categories.getAllCategories, setCategories);
	useFetch(endpoints.types.getAllTypes, setTypes);

	const [category, setCategory] = useState();
	const [type, setType] = useState();
	const categoryInput = useRef();
	const typeInput = useRef();

	useFilter(
		endpoints.projects.filterProject(JSON.stringify({ category, type })),
		setProjects,
		category,
		type,
		back
	);

	const filter = () => {
		setCategory(categoryInput.current.value);
		setType(typeInput.current.value);
	};

	const [query, setQuery] = useState();
	const queryInput = useRef();

	useSearch(endpoints.projects.searchProject(query), setProjects, query);

	const search = () => {
		setQuery(queryInput.current.value);
	};

	const clear = () => {
		categoryInput.current.value = 'false';
		typeInput.current.value = 'false';
		queryInput.current.value = '';
		setProjects(back);
	};

	return (
		<>
			<Head>
				<title>Proyectos</title>
				<meta name={'title'} content={'Proyectos'} />
				<meta
					name={'description'}
					content={
						'Proyectos de arquitectura, mobiliario y arte completados que satisficieron al cliente. Imágenes, videos, recorridos 360 y modelado 3D.'
					}
				/>
				<meta
					name={'keywords'}
					content={
						'soluciones, render, renderización, modelado 3d, arquitectura, mobiliario, arte, proyectos'
					}
				/>
			</Head>
			<main className={s.main}>
				<section className={s.main_banner}>
					<MainBanner
						title={'PROYECTOS'}
						subtitle={'Todos los proyectos completados y entregados'}
						image={{
							src: 'https://i.postimg.cc/Qx2fS0W5/RC6_02.jpg',
							alt: 'Vista desde el segundo piso de una cabaña de madera',
						}}
					/>
				</section>
				<section className={s.main_filters}>
					<form id='filters' className={s.filters_select}>
						<label>
							<span>Categoría:</span>
							<select
								ref={categoryInput}
								name='categoryInput'
								id='categoryInput'
								onChange={filter}
							>
								<option value={false}>Categoría...</option>
								{categories.length
									? categories.map((cat) => (
											<option key={cat.id} value={cat.title}>
												{cat.title}
											</option>
									  ))
									: null}
							</select>
						</label>
						<label>
							<span>Tipo:</span>
							<select
								ref={typeInput}
								name='typeInput'
								id='typeInput'
								onChange={filter}
							>
								<option value={false}>Tipo...</option>
								{types.length
									? types.map((tp) => (
											<option key={tp.id} value={tp.title}>
												{tp.title}
											</option>
									  ))
									: null}
							</select>
						</label>
					</form>
					<form id='find' className={s.filters_search}>
						<label>
							<input
								ref={queryInput}
								type={'search'}
								id='search'
								placeholder={'Buscar...'}
								onChange={search}
							/>
						</label>
					</form>
					<button className={s.filters_clear} onClick={clear}>
						Limpiar
					</button>
				</section>
				<section className={s.main_projects}>
					{projects.length ? (
						projects?.map((project) => (
							<ProjectSlide
								key={project.id}
								link={`/proyectos/${project.id}`}
								title={project.title}
								image={{
									src: project.images[0].src,
									alt: project.images[0].alt,
								}}
							/>
						))
					) : (
						<p>Mmm... Al parecer no hay elementos que mostrar</p>
					)}
				</section>
				<span className='separator'></span>
			</main>
		</>
	);
}
