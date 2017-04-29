import Vue from 'vue';
import {
    TOP250_SUCCESS,
    TOP250_FAIL
} from '../type';
import { getTop250 } from '../../api'

const state = {
    top250List: null
}
const mutations = {
    [TOP250_SUCCESS](state, data) {
     Vue.set(state, 'top250List', data);
    }
};

const actions = {
    getTop250({ commit },params) {
        getTop250(params).then(response => {
            commit(TOP250_SUCCESS, response.data)
        })
    }
}
export default {
    state,
    mutations,
    actions
}