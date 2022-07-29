import apiUrl from '../apiConfig'
import axios from 'axios'

export const getAllSunglasses = () => {
    return axios(`${apiUrl}/sunglasses`)
        
}

export const getOneSunglasses = (id) => {
    return axios(`${apiUrl}/sunglasses/${id}`)
}