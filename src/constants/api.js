/**
 * @name api.js
 * @author Barret.Zhi
 * @date 2017-12-23
 */
import qs from 'qs';
import axios from 'axios';

/**
 * CONST
 * @type {String}
 */
const BASE_URL = 'https://www.huangdouzai.com';
const RES_URL = 'http://oymddotzr.bkt.clouddn.com';


/**
 * setting
 */
axios.defaults.baseURL = BASE_URL;
axios.interceptors.request.use((config) => {
    // NProgress.start();
    // config.headers['Authorization'] = "Bearer " + (store.state.user.token || '');
    return config;
}, function(error) {
    return Promise.reject(error);
});

axios.interceptors.response.use((response) => {
    if (response.data.code !== 0) {
        // Notification({
        //     title: '错误信息',
        //     message: response.data.msg,
        //     type: 'error'
        // });
    } else if (response.data.code === -1) {
        // const refresh = mapActions(['refresh']);
        // Notification({
        //     title: '登录异常',
        //     message: "正在为您重新登录...",
        //     type: 'error'
        // });
        // refresh();
    }
    // NProgress.done();
    return response.data;
}, (error) => {
    let response = error.response;

    // NProgress.remove();
    // Notification({
    //     title: '请求失败 ' + response.status + ' ' + response.statusText,
    //     message: response.config.url,
    //     type: 'error'
    // });
    return Promise.reject(error);
});

// export
export default {
    baseURL: BASE_URL,
    resURL: RES_URL,
    get(url, params = {}, options = {}) {
        const temp = Object.assign({}, { params: params }, options);
        return axios.get(url, temp);
    },
    delete(url, params = {}, options = {}) {
        const temp = Object.assign({}, { params: params }, options);
        return axios.delete(url, temp);
    },
    post(url, data = {}, options = {}) {
        return axios.post(url, qs.stringify(data), Object.assign({}, {
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }, options || {}));
    },
    put(url, data = {}, options = {}) {
        return axios.put(url, data, options);
    },
    patch(url, data = {}, options = {}) {
        return axios.patch(url, data, options);
    },
    axios(data = {}) {
        return axios(data);
    }
};