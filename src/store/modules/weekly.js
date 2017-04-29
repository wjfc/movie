import Vue from 'vue';
import {
    WEEKLY_SUCCESS,
    WEEKLY_FAIL
} from '../type';
import { getWeekly } from '../../api';

const state = {
    weeklyList: null
}
const mutations = {
    [WEEKLY_SUCCESS](state, data) {
     Vue.set(state, 'weeklyList', data);
    }
};

const actions = {
    getWeekly({ commit },params) {
        getWeekly(params).then(response => {
            commit(WEEKLY_SUCCESS, response.data)
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