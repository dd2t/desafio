import { createStore } from 'redux'

const initialState = {
    toEdit: {},
    cellphoneArray: []
}

function reducer(state = initialState, action) {
    if (action.type === 'SET_TO_EDIT') {
        console.log('action toEdit', action.toEdit)
        return { ...state, toEdit: action.toEdit }
    }
    if (action.type === 'SET_CELLPHONE_ARRAY') {
        return { ...state, cellphoneArray: action.cellphoneArray }
    }
    return state
}
    

const store = createStore(reducer)

export const setToEdit = (element) =>{
    store.dispatch({type: 'SET_TO_EDIT', toEdit: element})
    console.log(store.getState().toEdit)
}

export default store