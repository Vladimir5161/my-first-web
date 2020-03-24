import * as axios from "axios"
import { downloadContent } from "../../store/DataReducer"

const instance = axios.create({
    withCreadentials : true,
    baseURL: "https://my-vikings.firebaseio.com",
    headers : {
        'key': 'AAAAQ5c-zgE:APA91bEQI6ow3Ct7QpLbwY6Na91ResJX7WCC0mr_6IY0WZIpWoM7GJY78kvriBWkIkOheRLwUUa-D_cocGtW89I5NmdnX6Qc29DHg5VG3Fq464E0qGtB3Za_ZyWzRVm-UK26jY5_zbI3'
    }
}) 

export const webAPI = {
    getContent() {
         return instance.get('/content.json').then(res => {return res.data})
    },
    addContent(content) {
        return instance.post('/content.json', content).then(res => {return res.data})
    },
    deleteContent(key) {
        return instance.delete(`/content/${key}.json`)
    }
}