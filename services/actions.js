import { ADD_REVIEW, DELETE_REVIEW, SET_ALL_REVIEWS } from "../shared/consts"
import { Manager } from "../api/Manager";

const _manager = new Manager();

export const addReview = (review, manager = _manager) => {
    return async (dispatch) => {
        try {
            let res = await manager.createReviewAsync(review)
            if (res === true) {
                return dispatch({
                    type: ADD_REVIEW,
                    payload: review
                })
            }
        } catch (error) {
            alert(error);
        }
    }
}

export const deleteReview = (key, manager = _manager) => {
   return async (dispatch) => {
       try {
           const res = await manager.deleteReviewAsync(key);
           if(res === true) {
                dispatch({
                    type: DELETE_REVIEW,
                    payload: key
                })
           }
       } catch (error) {
           alert(error)
       }
   }
}

export const setAllReviews = (manager = _manager) => {
    return async (dispatch) => {
        try {
            const res = await manager.getAllReviewsAsync()
            dispatch({
                type: SET_ALL_REVIEWS,
                payload: res
            })
        } catch (error) {
            alert(error)
        }
    }
}
