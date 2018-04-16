import isInteger from 'lodash/isInteger';
import isArray from 'lodash/isArray';

export const values = function values(obj) {
    return Object.values(obj);
}

/**
 * @description 复制对象，将对象值添加/修改到复制的新对象中
 * @param {String} prop 属性名
 * @param {*} val 属性值
 * @param {Object} obj 对象
 */
export const assoc = (prop, val, obj) => {
    let result = Object.assign({}, obj);
    result[prop] = val;
    return result;
}

/**
 * 
 * @param {Array} path 属性路径 ['a','b','c']
 * @param {*} val 
 * @param {Object} obj 
 */
export const assocPath = (path, val, obj) => {
    if (path.length === 0) {
        return val;
    }
    let idx = path[0];
    if (path.length > 1) {
        val = assocPath(Array.prototype.slice.call(path, 1), val, obj[idx]);
    }
    if (isInteger(idx) && isArray(obj)) {
        let arr = [].concat(obj);
        arr[idx] = val;
        return arr;
    } else {
        return assoc(idx, val, obj);
    }
}