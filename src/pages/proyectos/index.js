import Head from 'next/head';
import { useState } from 'react';
import { useFetch } from '@/hooks/useFetch';
import { endpoints } from '@/services/api/endpoints';
import { MainBanner } from '@/components/MainBanner';
import { ProjectSlide } from '@/components/ProjectSlide';
import s from '@/styles/pages/Projects.module.css';

export default function Projects() {
	const [projects, setProjects] = useState([]);
	useFetch(endpoints.projects.getAllProjects, setProjects);
	return (
		<>
			<Head>
				<title>Proyectos</title>
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
							<select name='category' id='category'>
								<option value={'abc'}>abc</option>
							</select>
						</label>
						<label>
							<span>Tipo:</span>
							<select name='type' id='type'>
								<option value={'abc'}>abc</option>
							</select>
						</label>
					</form>
					<form id='find' className={s.filters_search}>
						<label>
							<input type={'search'} id='search' placeholder={'Buscar...'} />
						</label>
					</form>
				</section>
				<section className={s.main_projects}>
					{projects.length
						? projects?.map((project) => (
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
						: null}
				</section>
				<span className='separator'></span>
			</main>
		</>
	);
}
