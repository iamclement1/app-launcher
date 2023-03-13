export const actionType = {
    SET_MODAL_SHOW : 'SET_MODAL_SHOW',
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case actionType.SET_MODAL_SHOW:
            return {
                ...state,
                modalShow: action.modalShow,
            };
        // case actionType.SET_MODAL:
        //     return {
        //         ...state,
        //         isOpenModal: false,
        //     };
        default:
            return state
    }
}
