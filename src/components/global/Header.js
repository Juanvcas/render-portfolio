import Link from 'next/link';
import { FiAlignJustify, FiChevronDown } from 'react-icons/fi';
import s from '@/styles/components/global/Header.module.css';
import { useEffect, useState } from 'react';

export const Header = () => {
	const [menu, setMenu] = useState(false);
	const [submenu, setSubmenu] = useState(false);

	useEffect(() => {
		const header = document.querySelector('header');

		const style = () => {
			if (window.scrollY !== 0) {
				header.classList.add('header-back');
			} else {
				header.classList.remove('header-back');
			}
		};

		window.addEventListener('scroll', style);

		return () => window.removeEventListener('scroll', style);
	}, []);

	useEffect(() => {
		const setMenus = () => {
			setMenu(false);
			setSubmenu(false);
		};

		document.body.addEventListener('click', setMenus);

		return () => document.body.removeEventListener('click', setMenus);
	}, []);

	return (
		<header
			className={s.main}
			style={{ backgroundColor: menu ? 'var(--background)' : null }}
			onClick={(e) => e.stopPropagation()}
		>
			<div className={s['main-cont']}>
				<section className={s.main_logo}>
					<Link href={'/'}>JV</Link>
				</section>
				<menu className={s.main_menu}>
					{menu ? (
						<ul className={s.menu_links}>
							<li>
								<div
									className={s['menu_links-button']}
									onClick={() => setSubmenu(!submenu)}
								>
									<p>Soluciones</p>
									<span>
										<FiChevronDown />
									</span>
								</div>
								{submenu ? (
									<ul className={s['menu_links-submenu']}>
										<li>
											<Link href={'/renderizacion'}>Renderización</Link>
										</li>
										<li>
											<Link href={'/recorridos'}>Recorridos</Link>
										</li>
										<li>
											<Link href={'/modelado'}>Modelado 3D</Link>
										</li>
									</ul>
								) : null}
							</li>
							<li>
								<Link href={'/'}>Proyectos</Link>
							</li>
							<li>
								<Link href={'/'}>Contacto</Link>
							</li>
						</ul>
					) : null}
					<span className={s.menu_logo} onClick={() => setMenu(!menu)}>
						<FiAlignJustify />
					</span>
				</menu>
			</div>
		</header>
	);
};
