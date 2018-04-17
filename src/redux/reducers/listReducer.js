import types from '../constants/listConstants';
import { assocPath, without, map } from '../../util/assist';

const initialState = {
    list: {
    },
    filter: 0
};

export default (state = initialState, action) => {
    switch (action.type) {
        case types.GET_LIST_START:
            return {
                ...state,
                loading: false
            }
        case types.GET_LIST_SUCCESS:
            return {
                ...state,
                list: action.list,
                loading: true
            }
        case types.GET_LIST_ERROR:
            return {
                ...state,
                loading: false
            }
        case types.COMPLETE_ITEM:
            return {
                ...state,
                list: assocPath([action.id, 'status'], action.status, state.list)
            }
        case types.SELECT_FOOTER_BTN:
            return {
                ...state,
                filter: action.filter
            }
        case types.DELETE_ITEM:
            return {
                ...state,
                list: without(action.id, state.list)
            }
        case types.ADD_ITEM:
            return {
                ...state,
                list: assocPath([action.item.id], action.item, state.list)
            }
        case types.UPDATE_ALL:
            return {
                ...state,
                list: map(state.list, (item) => {
                    item.status = action.status;
                    return item;
                }),
                isAllSelect: action.status
            }
        case types.UPDATE_ITEM:
            return {
                ...state,
                list: assocPath([action.id, 'text'], action.value, state.list)
            }
        default:
            return state;
    }
}