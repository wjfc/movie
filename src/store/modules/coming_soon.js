import Vue from 'vue';
import {
    COMING_SOON_SUCCESS,
    COMING_SOON_FAIL
} from '../type';
import { getComing_soon } from '../../api';

const state = {
    coming_soonList: null
}
const mutations = {
    [COMING_SOON_SUCCESS](state, data) {
     Vue.set(state, 'coming_soonList', data);
    }
};

const actions = {
    getComing_soon({ commit },params) {
        getComing_soon(params).then(response => {
            commit(COMING_SOON_SUCCESS, response.data)
        }).catch( err => {
            console.log(err.message)
        })
    }
}
export default {
    state,
    mutations,
    actions
}