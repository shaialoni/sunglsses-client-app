import SunglassesForm from '../shared/SunglassesForm'
import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import axios from 'axios';
import apiUrl from '../../apiConfig';

const CreatePage = (props) => {
    const [sunglasses, setSunglasses] = useState({
        brand: '',
        frameColor:'',
        isPolarized: false
    })
    const [updated, setUpdated] = useState(false)
    const [createdId, setCreatedId] = useState(false)

    const handleChange = (e) => {
        e.persist()
        setSunglasses(prevValue => {
            const updatedValue = e.target.value
            const updatedName = e.target.name
            const updatedSunglasses = {
                [updatedName]: updatedValue
            }
            return {
                ...prevValue,
                ...updatedSunglasses
            }
        })
    }

    const handleSubmitUpdate = (e) => {
        e.preventDefault()
        axios({
            method: 'PATCH',
            url: `${apiUrl}/sunglasses/${props.match.params._id}`,
            data: {sunglasses: sunglasses}
        })
            .then(() => {
                setUpdated(true)
            })
            .catch(console.error)
    }

    if (updated) {
        return <Navigate to={`/sunglasses/${props.match.params._id}`}/>
    }

    if (createdId) {
        return <Navigate to={`/sunglasses/${createdId}`} />
      }
    return (
        
        <SunglassesForm 
            sunglasses={sunglasses} 
            handleChange={handleChange} 
            handleSubmit={handleSubmitUpdate}
            heading="Add new Sunglasses"
        />
    )
}

export default CreatePage
