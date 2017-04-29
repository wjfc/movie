import axios from 'axios';
import API_ROOT from './config';
// axios.defaults.withCredentials = true;

const instance = axios.create({
    baseURL: '/api',
    params: {
      
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
export const getComing_soon = (params) => {
    return instance.get(API_ROOT.getComing_soon, {
        params:params
    });
}
export const getNew_movies = (params) => {
    return instance.get(API_ROOT.getNew_movies, {
         params:params
    });
}
export const getTop250 = (params) => {
    return instance.get(API_ROOT.getITop250, {
         params:params
    });
}
export const getWeekly = (params) => {
    return instance.get(API_ROOT.getWeekly, {
         params:params
    });
}
export const getDetail = (params) => {
    var url = API_ROOT.getDetail+ '/'+ params;
    return instance.get(url)
}