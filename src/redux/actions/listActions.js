import types from '../constants/listConstants';

/**
 * 切换item的完成状态
 * @param {String} id 
 * @param {Boolean} status
 */
export const updateItem = (id, status) => ({
    type:types.COMPLETE_ITEM,
    id,
    status
});
// export const getLiveroomList = (param) => dispatch => {
//     dispatch({
//         type: types.GET_LIVEROOM_LIST_START
//     });
//     getLiveList(param).then(resp => {
//         dispatch({
//             type: types.GET_LIVEROOM_LIST_SUCCESS,
//             data: resp.data
//         })
//     }).catch(err => {
//         dispatch({
//             type: types.GET_LIVEROOM_LIST_ERROR,
//             error: err.msg
//         })
//     })
// };
