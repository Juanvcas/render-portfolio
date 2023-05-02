import { useEffect } from 'react';

export const useSearch = (API, setState, query) => {
	useEffect(() => {
		if (query) {
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
		}
	}, [query]);
};
