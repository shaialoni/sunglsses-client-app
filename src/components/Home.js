import SunglassesIndex from "./sunglasses/SunglassesIndex"

const Home = (props) => {
	const { msgAlert } = props

	return (
		<>
			<h1>Your Sunglasses</h1>
			<SunglassesIndex msgAlert={msgAlert} />
		</>
	)
}

export default Home
