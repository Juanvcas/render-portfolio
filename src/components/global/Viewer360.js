import { useEffect } from 'react';

export const Viewer360 = ({ images }) => {
	const viewer = () => {
		const data = {
			default: {
				firstScene: images[0].title,
				author: 'Juan Vasquez',
				sceneFadeDuration: 1000,
				autoLoad: true,
			},
			scenes: {},
		};

		images.map((img) => {
			data.scenes[img.title] = {
				title: img.title,
				type: 'equirectangular',
				panorama: img.src,
				pitch: img?.pitch,
				yaw: img?.yaw,
				hotSpots: [],
			};

			if (img.scenes) {
				img.scenes.map((scene) => {
					data.scenes[img.title].hotSpots.push({
						pitch: scene.pitch,
						yaw: scene.yaw,
						type: scene.type,
						text: scene.text,
						sceneId: scene.sceneId,
					});
				});
			}
		});

		pannellum.viewer('panorama', data);
	};

	useEffect(() => {
		const script = document.createElement('script');
		script.src =
			'https://cdn.jsdelivr.net/npm/pannellum@2.5.6/build/pannellum.js';
		script.async = true;
		document.body.appendChild(script);

		const link = document.createElement('link');
		link.href =
			'https://cdn.jsdelivr.net/npm/pannellum@2.5.6/build/pannellum.css';
		link.rel = 'stylesheet';
		document.head.appendChild(link);

		script.onload = () => {
			viewer();
		};

		return () => {
			document.body.removeChild(script);
			document.head.removeChild(link);
		};
	}, []);

	return <div id='panorama'></div>;
};
