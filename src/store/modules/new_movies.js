import Vue from 'vue';
import {
    NEW_MOVIES_SUCCESS,
    NEW_MOVIES_SOON_FAIL
} from '../type';
import { getNew_movies } from '../../api';

const state = {
    new_moviesList: null
}
const mutations = {
    [NEW_MOVIES_SUCCESS](state, data) {
     Vue.set(state, 'new_moviesList', data);
    }
};

const actions = {
    getNew_movies({ commit },params) {
        getNew_movies(params).then(response => {
            commit(NEW_MOVIES_SUCCESS, response.data)
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