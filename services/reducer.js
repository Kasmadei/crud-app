import { ADD_REVIEW, DELETE_REVIEW } from "../shared/consts"

const initState = [
    { title: 'Zelda, Breath of Fresh Air', rating: 5, body: 'lorem ipsum', key: '1' },
    { title: 'Gotta Catch Them All (again)', rating: 4, body: 'lorem ipsum', key: '2' },
    { title: 'Not So "Final" Fantasy', rating: 3, body: 'lorem ipsum', key: '3' },
]

export default function reducer(state = initState, action) {
    switch (action.type) {
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