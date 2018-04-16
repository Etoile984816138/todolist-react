import fetch from 'COMMON/util/fetch';

export default {
    getInfo: (page) => fetch('https://randomuser.me/api', {
        // methods: 'GET',
        data: {
            results: 10,
            page
        }
    })
}

// 获取待审核直播列表
export const getUncheckedList = data => fetch(
    '/api/backend/livestream/homepage/pull', {
        methods: 'GET',
        data
    });

//  直播间列表
export const getLiveList = data => fetch(
    '/api/backend/livestream/homepage/live/list', {
        methods: 'GET',
        data
    });

// 删除回放
export const deletePlayback = data => fetch(
    '/api/backend/livestream/playback/delete', {
        methods: 'POST',
        data
    });

// 首页推荐位下沉
export const downPosition = data => fetch(
    '/api/backend/livestream/homepage/position/down', {
        methods: 'POST',
        data
    });

// 首页推荐位固定
export const setPosition = data => fetch(
    '/api/backend/livestream/homepage/position/set', {
        methods: 'POST',
        data
    });

// 上首页  
export const pushHomepage = data => fetch(
    '/api/backend/livestream/homepage/push', {
        methods: 'POST',
        data
    });

// 下首页
export const pullHomePage = data => fetch(
    '/api/backend/livestream/homepage/pull', {
        methods: 'POST',
        data
    });

// 发起直播审核  
export const applyCheck = data => fetch(
    '/api/backend/livestream/check/apply', {
        methods: 'POST',
        data
    });

// 修改主播信息 
export const updateAnchor = data => fetch(
    '/api/backend/livestream/anchor/info/update', {
        methods: 'POST',
        data
    });

// 后台搜索
export const searchLive = data => fetch(
    '/api/backend/livestream/live/search', {
        methods: 'POST',
        data
    });

// 发送直播间消息 
export const sendRoomMessage = data => fetch(
    '/api/backend/livestream/room/message/send', {
        methods: 'POST',
        data
    });

// 封禁主播账号 
export const banAccount = data => fetch(
    '/api/backend/livestream/account/ban', {
        methods: 'POST',
        data
    });

// 封禁主播开播权限 
export const banLive = data => fetch(
    '/api/backend/livestream/live/ban', {
        methods: 'POST',
        data
    });

// 断播 
export const stopLiving = data => fetch(
    '/api/backend/livestream/living/stop', {
        methods: 'POST',
        data
    });
