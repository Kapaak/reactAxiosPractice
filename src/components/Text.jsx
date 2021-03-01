import { useContext } from "react";
import { DataContext } from "./Fetched";
import styled from "styled-components";

const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;

	div {
		position: relative;
		max-width: 30rem;
		width: 80%;
		transition: all 0.5s ease;

		&:hover {
			transition: all 0.5s ease;
			margin-left: 3rem;
			cursor: pointer;

			&::before {
				transform: translate(0, -50%) rotate(360deg);
				background-color: #8d0801;
			}
		}

		&::before {
			content: "";
			width: 0.8rem;
			height: 0.8rem;
			top: 50%;
			transform: translate(0, -50%) rotate(0);
			border-radius: 50%;
			pointer-events: none;
			background-color: #f4d58d;
			position: absolute;
			left: -1.5rem;
			margin-right: 1rem;
			transition: all 0.5s ease;
		}
	}

	button {
		margin: 1rem;
		background-color: #d8d8d8;
		padding: 0.7rem 1.2rem;
		border: none;
		border-radius: 0.3rem;
		cursor: pointer;

		&:hover {
			background-color: #8d0801;
			color: #d8d8d8;
			transition: all 0.5s ease;
		}
	}
`;
const Text = () => {
	const [data, setData, maxShowed, setMaxShowed] = useContext(DataContext);
	const showMoreHandler = () => {
		setMaxShowed(prev => prev + 15);
	};
	return (
		<Wrapper>
			{data.map((el, index) => {
				if (index <= maxShowed) return <div key={index}>{el.title}</div>;
			})}
			<button onClick={showMoreHandler}>show more</button>
		</Wrapper>
	);
};

export default Text;
