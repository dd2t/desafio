import { createStore } from 'redux'

const initialState = {
    toEdit: {},
    cellphoneArray: []
}

function reducer(state = initialState, action) {
    if (action.type === 'SET_TO_EDIT') {
        return { ...state, toEdit: action.toEdit }
    }
    if (action.type === 'SET_CELLPHONE_ARRAY') {
        return { ...state, cellphoneArray: action.cellphoneArray }
    }
    return state
}
    

const store = createStore(reducer)

export const testState = () =>{
    console.log('From store', store.getState())
}

export default store