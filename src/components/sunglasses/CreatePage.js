import SunglassesForm from '../shared/SunglassesForm'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { createSunglasses } from '../../api/sunglasses';

const CreatePage = (props) => {
    const { msgAlert } = props
    const navigate = useNavigate()

    const [sunglasses, setSunglasses] = useState({
        brand: '',
        frameColor:'',
        isPolarized: false
    })

    const handleChange = (e) => {
        setSunglasses(prevValue => {
            let updatedValue = e.target.value
            const updatedName = e.target.name
            
            if (e.target.type === 'number') {
                updatedValue = parseInt(e.target.value)
            }

            // this handles the checkbox, changing on to true etc
            if (updatedName === "isPolarized" && e.target.checked) {
                updatedValue = true
            } else if (updatedName === "isPolarized" && !e.target.checked) {
                updatedValue = false
            }
            
            const updatedSunglasses = {
                [updatedName]: updatedValue
            }
            return {
                ...prevValue,
                ...updatedSunglasses
            }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
            createSunglasses(sunglasses)
            .then(res => { navigate(`/sunglasses/${res.data.sunglasses._id}`)})
            .then(() => {
                msgAlert({
                    heading: 'Oh Yeah!',
                    message: 'Sunglasses created succesfuly',
                    variant: 'success'
                })
            })
            .catch(() => {
                msgAlert({
                    heading: 'Oh No!',
                    message: 'Hmm... Something went wrong...',
                    variant: 'danger'
                })
            })
    }

    return (
        
        <SunglassesForm 
            sunglasses={sunglasses} 
            handleChange={handleChange} 
            handleSubmit={handleSubmit}
            heading="Add new Sunglasses"
        />
    )
}

export default CreatePage
