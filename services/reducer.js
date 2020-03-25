import { ADD_REVIEW, DELETE_REVIEW, SET_ALL_REVIEWS } from "../shared/consts"

const initState = []

export default function reducer(state = initState, action) {
    switch (action.type) {
        case SET_ALL_REVIEWS: 
            return action.payload
        case ADD_REVIEW:
            return [action.payload, ...state]
        case DELETE_REVIEW:
            const copy = [...state]
            const idToDelete = action.payload
            const res = copy.filter(item => item.key !== idToDelete);
            return res
        default:
            return state
    }
}