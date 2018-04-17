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

export const selectFooterBtn = (filter) => ({
    type: types.SELECT_FOOTER_BTN,
    filter
});

export const deleteItem = (id) => ({
    type:types.DELETE_ITEM,
    id
});
export const addItem = (item) => ({
    type: types.ADD_ITEM,
    item
});
export const updateAll = (status) => ({
    type:types.UPDATE_ALL,
    status
});
export const editItem = (id,value)=>({
    type:types.UPDATE_ITEM,
    id,
    value
})