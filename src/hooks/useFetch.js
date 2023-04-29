import { useEffect } from 'react';

export const useFetch = (API, setState, render = null) => {
	useEffect(() => {
		const fetchData = async () => {
			const res = await fetch(API);
			const data = await res.json();
			if (setState) {
				setState(data);
			} else {
				return data;
			}
		};
		fetchData();
	}, [API, render]);
};
