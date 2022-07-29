import { 
    useState,
    useEffect 
} from 'react'

import { getAllSunglasses } from '../../api/sunglasses';
import LoadingScreen from './../shared/LoadingScreen'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'

const cardContainerStyle = {
    display: 'flex',
    flexflow: 'row wrap',
    justifyContent: 'center', 
    margin: '10px'
}

// SunglassesIndex should make a request to the API
// To get all sunglasses
// Display them all 
const SunglassesIndex = () => {
    const [sunglasses, setSunglasses] = useState(null)

    useEffect(() => {
        console.log('Use effect')
        
        getAllSunglasses()
            .then(res => setSunglasses(res.data.sunglasses))
            .catch(err => console.log(err))
    },[])
    console.log('these are the sunglasses', sunglasses)

    if (!sunglasses) {
        return <LoadingScreen />
    } else if (sunglasses.length === 0) {
        return <p>No sunglasses yet. Better buy some!!!</p>
    }
    
    const sunglassesCards = sunglasses.map(item => (
        <Card 
            style={{width: '15%', margin: 10}} 
            key={sunglasses.id}
        >
            <Card.Body>
                <Card.Header>{item.brand}</Card.Header>
                <Link to={`/sunglasses/${item.id}`}> view {item.brand}</Link>
            </Card.Body>
        </Card>
    ))

    return (
        <>
            <h1>Your Sunglasses</h1>
            <div style={cardContainerStyle}>
            

                {sunglassesCards}
            </div>
        </>
    )
}

export default SunglassesIndex