export const Video = ({ url }) => {
	return (
		<iframe
			width='100%'
			height='auto'
			src={url}
			title='YouTube video player'
			frameborder='0'
			allow='accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
			allowfullscreen
		></iframe>
	);
};
