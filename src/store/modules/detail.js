import Vue from 'vue';
import {
    DETAIL_SUCCESS,
    DETAIL_FAIL
} from '../type';
import { getDetail } from '../../api'
// getIn_theaters().then(response => {
//     console.log(response.data)
// }).catch( error => {
//     console.log(error.message)
// })
const state = {
    detailList: null
}
const mutations = {
    [DETAIL_SUCCESS](state, data) {
     Vue.set(state, 'detailList', data);
    }
};
const actions = {
    getDetail({ commit },params) {
        getDetail(params).then(response => {
            commit(DETAIL_SUCCESS, response.data)
        })
    }
}
export default {
    state,
    mutations,
    actions
}