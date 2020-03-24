import { ADD_REVIEW, DELETE_REVIEW } from "../shared/consts"

export const addReview = (review) => {
    return {
        type: ADD_REVIEW,
        payload: review
    }
}

export const deleteReview = (key) => {
    console.log(key);
    return {
        type: DELETE_REVIEW,
        payload: key
    }
}

