import { useState } from 'react';

import s from '@/styles/components/Slider.module.css';

export const Slider = ({ slides }) => {
	const [currentSlide, setCurrentSlide] = useState(0);

	const nextSlide = () => {
		const newIndex = currentSlide + 1;
		if (newIndex === slides.length) {
			setCurrentSlide(0);
		} else {
			setCurrentSlide(newIndex);
		}
	};

	const prevSlide = () => {
		const newIndex = currentSlide - 1;
		if (newIndex < 0) {
			setCurrentSlide(slides.length - 1);
		} else {
			setCurrentSlide(newIndex);
		}
	};

	return (
		<div className={s.main}>
			<div className={s['main-cont']}>
				{slides.map((slide, index) => (
					<div
						key={index}
						className={
							index === currentSlide
								? `${s.main_slide} ${s['active-slide']}`
								: s.main_slide
						}
					>
						<div className={s.slide_text}>
							{slide.title ? slide.title : null}
							{slide.text ? slide.text : null}
						</div>
						<img src={slide.src} alt={slide.alt} />
					</div>
				))}
				{slides.length > 1 ? (
					<>
						<button className='main_btn-prev' onClick={prevSlide}>
							<MdArrowBackIos />
						</button>
						<button className='main_btn-next' onClick={nextSlide}>
							<MdArrowForwardIos />
						</button>
						<ul className='main_dots'>
							{slides.map((sld, index) => (
								<li
									key={index}
									className={index === currentSlide ? 'dot dot-active' : 'dot'}
									onClick={() => setCurrentSlide(index)}
								></li>
							))}
						</ul>
					</>
				) : null}
			</div>
		</div>
	);
};
