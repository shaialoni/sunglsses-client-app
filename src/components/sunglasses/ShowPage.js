import { useState, useEffect } from 'react'
import { Card, Container, Button } from 'react-bootstrap'

import { useNavigate, useParams } from 'react-router-dom'

import LoadingScreen from '../shared/LoadingScreen'
import { getOneSunglasses, removeSunglasses } from '../../api/sunglasses'


const ShowPage = (props) => {
    const [sunglasses, setSunglasses] = useState(null)
    const { msgAlert } = props


    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        getOneSunglasses(id)
            .then(res => setSunglasses(res.data.sunglasses))
            .catch(err => {
                msgAlert({
                    heading: 'Error getting sunglasses',
                    message: 'Hmmm... Something went wrong...',
                    variant: 'danger'
                })
                navigate('/')
            })
    },[])

    console.log('this is the sunglasses', sunglasses)
  
    const destroySunglasses = () => {
        removeSunglasses(sunglasses._id)
        .then(() => {
            msgAlert({
                heading: 'Success',
                message: 'Glsasses succesfully removed',
                variant: 'success'
            })
        })
        // then navigate to index
        .then(() => {navigate('/')})
        // on failure send a failure message
        .catch(err => {                   
            msgAlert({
                heading: 'Error removing sunglasses',
                message: 'Hmmm... Something went wrong...',
                variant: 'danger'
            })
        })

    }
    
    
    if (!sunglasses) {
        return <LoadingScreen/>
    }

    return (
        <Container className='fluid' style={{width: '20%'}}>
            <Card>
                <Card.Header>{sunglasses.brand}</Card.Header>
                <Card.Body>
                    <Card.Text>
                        <div><small>Frame Color: {sunglasses.frameColor}</small></div>
                        <div><small>Polarized: {sunglasses.isPolarized ? 'yes' : 'no'}</small></div>
                    </Card.Text>
                </Card.Body>
                <Button 
                    variant="outline-danger"
                    onClick={() => destroySunglasses()}
                >Delete {sunglasses.brand}</Button>
            </Card>

        </Container>
    )
}

export default ShowPage