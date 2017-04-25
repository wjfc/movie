import axios from 'axios';
import API_ROOT from './config';
// axios.defaults.withCredentials = true;

const instance = axios.create({
    baseURL: '/api',
    params: {
        "start": 0,
        "count": 10
    }
});
// instance.get('/movie/in_theaters').then(function (res) {
//     console.log(res) 
// }).catch(function(err) {
//  console.log(err)
// })
 // console.log('api') 
export const getIn_theaters = (params) => {
    return instance.get(API_ROOT.getIn_theaters, {
        params:params
    });
}
export const getComing_soon = () => {
    return instance.get(API_ROOT.getComing_soon);
}
export const getNew_movies = () => {
    return instance.get(API_ROOT.getNew_movies);
}
export const getTop250 = (params) => {
    return instance.get(API_ROOT.getITop250, {
         params:params
    });
}
export const getWeekly = () => {
    return instance.get(API_ROOT.getWeekly);
}
