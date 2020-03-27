import { ADD_REVIEW, DELETE_REVIEW, SET_ALL_REVIEWS, EDIT_REVIEW } from "../shared/consts"
import { Manager } from "../api/Manager";
import axios from 'axios';

// const _manager = new Manager();
const BASE_URL = 'http://10.0.2.2:3001/'

export const addReview = (review) => {
    return async (dispatch) => {
        try {
            axios.post(`${BASE_URL}reviews`, { review })
                .then(res => {
                    const { createdReview } = res.data
                    return dispatch({
                        type: ADD_REVIEW,
                        payload: createdReview
                    })
                })
                .catch(err => console.log(err))
        } catch (error) {
            alert(error);
        }
    }
}

export const deleteReview = (key) => {
    return async (dispatch) => {
        try {
            axios.delete(`${BASE_URL}reviews/${key}`)
                .then(res => {
                    dispatch({
                        type: DELETE_REVIEW,
                        payload: key
                    })
                })
                .catch(err => console.log(err))
        } catch (error) {
            alert(error)
        }
    }
}

export const setAllReviews = () => {
    return async (dispatch) => {
        try {
            axios.get(`${BASE_URL}reviews`)
                .then(res => {
                    const { reviews } = res.data
                    dispatch({
                        type: SET_ALL_REVIEWS,
                        payload: reviews.reverse()
                    })
                })
                .catch(err => console.log(err));
        } catch (error) {
            alert(error)
        }
    }
}

export const editReview = (review) => {
    return async (dispatch) => {
        try {
            axios.patch(`${BASE_URL}reviews/${review._id}`, { review })
            .then(result => {
                const { review } = result.data
                dispatch({
                    type: EDIT_REVIEW,
                    payload: review
                })
            })
            .catch(err => console.log(err))
        } catch (error) {
            alert(error)
        }
    }
}
