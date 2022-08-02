import apiUrl from '../apiConfig'
import axios from 'axios'

export const getAllSunglasses = () => {
    return axios(`${apiUrl}/sunglasses`) 
}

export const getOneSunglasses = (id) => {
    return axios(`${apiUrl}/sunglasses/${id}`)
}

//CREATE
export const createSunglasses = (newShades) => {
	return axios({
		url: apiUrl + '/sunglasses',
		method: 'POST',
		// headers: {
		// 	Authorization: `Token token=${user.token}`,
		// },
		data: { sunglasses: newShades },
	})
}

//UPDATE
export const updateSunglasses = (updatedShades) => {
	return axios({
		url: `${apiUrl}/sunglasses/${updatedShades._id}`,
		method: 'PATCH',
		// headers: {
		// 	Authorization: `Token token=${user.token}`,
		// },
		data: { sunglasses: updatedShades },
	})
}

//DELETE
export const removeSunglasses = (shadesId) => {
	return axios({
		url: `${apiUrl}/sunglasses/${shadesId}`,
		method: 'DELETE',
		// headers: {
		// 	Authorization: `Token token=${user.token}`,
		// }
	})
}