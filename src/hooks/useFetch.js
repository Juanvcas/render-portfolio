import { useEffect } from 'react';

export const useFetch = (API, setState, render, setBack) => {
	useEffect(() => {
		const fetchData = async () => {
			const res = await fetch(API);
			const data = await res.json();
			if (setState) {
				setState(data);
			} else {
				return data;
			}

			if (setBack) {
				setBack(data);
			}
		};
		fetchData();
	}, [API, render]);
};
