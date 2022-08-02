import { useState, useEffect } from 'react'
import { getAllSunglasses } from '../../api/sunglasses';
import LoadingScreen from './../shared/LoadingScreen'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const cardContainerStyle = {
    display: 'flex',
    flexflow: 'row wrap',
    justifyContent: 'center', 
    margin: '10px'
}

const SunglassesIndex = () => {
    const [sunglasses, setSunglasses] = useState(null)
    
    useEffect(() => {
        getAllSunglasses()
            .then(res => setSunglasses(res.data.sunglasses))
            .catch(err => console.log(err))
    },[])

    if (!sunglasses) {
        return <LoadingScreen />
    } else if (sunglasses.length === 0) {
        return <p>No sunglasses yet. Better buy some!!!</p>
    }
    
    const sunglassesCards = sunglasses.map((item, i) => (
        <Card 
            style={{width: '15%', margin: 10}} 
            key={i}
        >
            <Card.Body>
                <Card.Header>{item.brand}</Card.Header>
                <Link to={`/sunglasses/${item._id}`}>view {item.brand}</Link>
            </Card.Body>
        </Card>
    ))
    
    return (
        <div style={cardContainerStyle}>
            {sunglassesCards}
        </div>
    )
}

export default SunglassesIndex
