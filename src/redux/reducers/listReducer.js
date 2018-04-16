import types from '../constants/listConstants';
import { assocPath} from '../../util/assist';

const initialState = {
    list:{
        '0':{
            id:0,
            text:'sfcfe3',
            status:0
        },
        '1': {
            id: 1,
            text: 'dvfer',
            status: 1
        },
        '2': {
            id: 2,
            text: 'evce',
            status: 0
        }
    }
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
        default:
            return state;
    }
}