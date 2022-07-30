import SunglassesIndex from "./sunglasses/SunglassesIndex"

const Home = (props) => {
	// const { msgAlert, user } = props
	console.log('props in home', props)

	return (
		<>
			<h1>Your Sunglasses</h1>
			<SunglassesIndex/>
		</>
	)
}

export default Home
