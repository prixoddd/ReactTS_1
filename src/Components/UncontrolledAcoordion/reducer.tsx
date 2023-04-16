type ActionType = {
    type: string
}

export type StateType = {
    collapsed: boolean
}

export const reducer = (state: StateType, action: ActionType) => {
    // if(action.type === 'TOGGLE-COLLAPSED') {
    //     return !state
    // }
    switch (action.type) {
        case 'TOGGLE-COLLAPSED':
            const stateCopy = {
                ...state,
            collapsed: !state.collapsed
            }
            // stateCopy.collapsed = !state.collapsed
            // console.log('sestry')
            // debugger
            return stateCopy


        default:
            throw new Error('baaaad')
    }


}