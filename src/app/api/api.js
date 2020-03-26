import * as axios from "axios"


const instance = axios.create({
    withCreadentials : true,
    baseURL: "https://my-vikings.firebaseio.com",
    headers : {
        'key': 'AAAAQ5c-zgE:APA91bEQI6ow3Ct7QpLbwY6Na91ResJX7WCC0mr_6IY0WZIpWoM7GJY78kvriBWkIkOheRLwUUa-D_cocGtW89I5NmdnX6Qc29DHg5VG3Fq464E0qGtB3Za_ZyWzRVm-UK26jY5_zbI3'
    }
}) 

export const webAPI = {
    getContent(contentType) {
         return instance.get(`/content/${contentType}.json`).then(res => {return res.data})
    },
    addContent(content, contentType) {
        return instance.post(`/content/${contentType}.json`, content).then(res => {return res.data})
    },
    deleteContent(keyFirebase, contentType) {
        return instance.delete(`/content/${contentType}/${keyFirebase}.json`)
    },
    getSlides() {
        return instance.get(`/content/slides.json`).then(resp => { return resp.data})
    },
    getNews() {
        return instance.get(`/content/news.json`).then(resp => { return resp.data})
    } 
}