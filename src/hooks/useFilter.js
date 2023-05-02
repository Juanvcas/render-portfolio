import { useEffect } from 'react';

export const useFilter = (API, setState, category, type, back) => {
	useEffect(() => {
		if (category || type) {
			const fetchData = async () => {
				const res = await fetch(API);
				const data = await res.json();
				if (data) {
					setState(data);
					if (category == 'false' && type == 'false') {
						setState(back);
					}
				}
			};
			fetchData();
		}
	}, [category, type]);
};
