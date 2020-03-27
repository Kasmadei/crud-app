import { ADD_REVIEW, DELETE_REVIEW, SET_ALL_REVIEWS, EDIT_REVIEW } from "../shared/consts"

const initState = []

export default function reducer(state = initState, action) {
    let copy = [...state]
    switch (action.type) {
        case SET_ALL_REVIEWS: 
            return action.payload
        case ADD_REVIEW:
            return [action.payload, ...state]
        case DELETE_REVIEW:
            const idToDelete = action.payload
            const res = copy.filter(item => item._id !== idToDelete);
            return res
        case EDIT_REVIEW:
            const updatedReview = action.payload
            const changed = copy.map(r => {
                if (r._id === updatedReview._id) {
                    return updatedReview
                }
                return r
            })
            return changed
        default:
            return state
    }
}