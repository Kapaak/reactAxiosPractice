import React, { useState, createContext, useEffect } from "react";
import axios from "axios";
export const DataContext = createContext();

export const Fetched = ({ children }) => {
	const [data, setData] = useState([]);
	const [maxShowed, setMaxShowed] = useState(0);

	const api = axios({
		method: "get",
		url: "https://jsonplaceholder.typicode.com/posts",
		// params: {
		// 	_limit: 6,
		// },
	});
	useEffect(() => {
		setMaxShowed(15);
		api.catch(err => console.log(err)).then(resp => setData(resp.data));
	}, []);

	return (
		<DataContext.Provider value={[data, setData, maxShowed, setMaxShowed]}>
			{children}
		</DataContext.Provider>
	);
};
