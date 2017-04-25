import Vue from 'vue';
import {
    IN_THEATERS_SUCCESS,
    IN_THEATERS_FAIL
} from '../type';
import { getIn_theaters } from '../../api'
// getIn_theaters().then(response => {
//     console.log(response.data)
// }).catch( error => {
//     console.log(error.message)
// })
const state = {
    in_theatersList: null
}
const mutations = {
    [IN_THEATERS_SUCCESS](state, data) {
     Vue.set(state, 'in_theatersList', data);
    }
};
const actions = {
    getIn_theaters({ commit },params) {
        getIn_theaters(params).then(response => {
            commit(IN_THEATERS_SUCCESS, response.data)
        })
    }
}
export default {
    state,
    mutations,
    actions
}