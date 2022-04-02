import {ADD_POSITIONS} from './position-actions'

export const positionReducer = (state =  [], actions) => {
    switch(actions.type) {
        case ADD_POSITIONS: {
            return  actions.positions
        }
        default: {
            return state
        }
    }
}