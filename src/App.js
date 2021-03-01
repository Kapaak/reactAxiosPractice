import logo from "./logo.svg";
import "./App.css";
import Text from "./components/Text";
import { Fetched } from "./components/Fetched";
function App() {
	return (
		<Fetched>
			<Text />
		</Fetched>
	);
}
export default App;
