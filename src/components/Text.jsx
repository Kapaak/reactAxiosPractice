import { useContext } from "react";
import { DataContext } from "./Fetched";
const Text = () => {
	const [data, setData, maxShowed, setMaxShowed] = useContext(DataContext);
	const showMoreHandler = () => {
		setMaxShowed(prev => prev + 15);
	};
	return (
		<>
			{data.map((el, index) => {
				if (index <= maxShowed) return <div key={index}>{el.title}</div>;
			})}
			<button onClick={showMoreHandler}>show more</button>
		</>
	);
};

export default Text;
