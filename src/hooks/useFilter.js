import { useEffect } from 'react';

export const useFilter = (API, setState, category, type, back) => {
	useEffect(() => {
		if (category || type) {
			const fetchData = async () => {
				const res = await fetch(API);
				const data = await res.json();
				if (data) {
					if (category == 'false' && type == 'false') {
						setState(back);
					} else {
						setState(data);
					}
				}
			};
			fetchData();
		}
	}, [category, type]);
};
