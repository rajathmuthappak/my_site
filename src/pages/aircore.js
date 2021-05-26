import Intro from "../components/project/intro"
import Body from "../components/project/body"

function Aircore(props) {

	return (
		<>
			<Intro name={props.name} />
			<Body name={props.name} />
		</>
	);
}
export default Aircore;