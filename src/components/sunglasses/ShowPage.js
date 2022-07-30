import { useState, useEffect } from 'react'
import { Card, Container, Button } from 'react-bootstrap'

import { Redirect, useParams } from 'react-router-dom'

import LoadingScreen from '../shared/LoadingScreen'
import { getOneSunglasses, deleteSunglasses } from '../../api/sunglasses'

const ShowPage = (props) => {
    const [sunglasses, setSunglasses] = useState(null)
    const [deleted, setDeleted] = useState(false)

    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        getOneSunglasses(id)
            .then(res => setSunglasses(res.data.sunglasses))
            .catch(err => console.log(err))
    },[])

    deleteSunglasses(id)
        .then(res => {
            setDeleted(true)
        })
        .catch(err => console.log(err))

    
    if (!sunglasses) {
        return <LoadingScreen/>
    }

    if (deleted) {
        return <Redirect to="/sunglasses"/>
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
                    onClick={deleteSunglasses}
                >Delete</Button>
            </Card>

        </Container>
    )
}

export default ShowPage