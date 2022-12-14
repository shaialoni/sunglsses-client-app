import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'
import SunglassesForm from '../shared/SunglassesForm'

const EditSunglassesModal = (props) => {
    const { 
        show, handleClose, updateSunglasses, msgAlert, triggerRefresh } = props

    const [sunglasses, setSunglasses] = useState(props.sunglasses)

    const handleChange = (e) => {
        setSunglasses(prevShades => {
            let updatedValue = e.target.value
            const updatedName = e.target.name

            if (e.target.type === 'number') {
                updatedValue = parseInt(e.target.value)
            }
            if (updatedName === "isPolarized" && e.target.checked) {
                updatedValue = true
            } else if (updatedName === "isPolarized" && !e.target.checked) {
                updatedValue = false
            }

            const updatedSunglasses = {
                [updatedName]: updatedValue
            }
            return {
                ...prevShades,
                ...updatedSunglasses
            }
        })
    }

    const handleSubmit = (e) => {
        //e.preventDefault() <------------------- Does this need to be commented out to properly work?
        updateSunglasses(sunglasses)
            .then(() => handleClose())
            .then(() => {
                msgAlert({
                    heading: 'Oh Yeah!',
                    message: 'Sunglasses updated successfully!',
                    variant: 'success'
                })
            })
            .then(() => triggerRefresh())
            .catch(() => 
                msgAlert({
                    heading: 'Oh No!',
                    message: 'Hmm... Something went wrong...',
                    variant: 'danger'
                })
            )
    }

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton />
            <Modal.Body>
                <SunglassesForm 
                    sunglasses={sunglasses}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    heading="Update Sunglasses"
                />
            </Modal.Body>
        </Modal>
    )
}

export default EditSunglassesModal