import * as axios from "axios";

const instance = axios.create({
    withCreadentials: true,
    baseURL: "https://my-vikings.firebaseio.com",
    headers: {
        key:
            "AAAAQ5c-zgE:APA91bEQI6ow3Ct7QpLbwY6Na91ResJX7WCC0mr_6IY0WZIpWoM7GJY78kvriBWkIkOheRLwUUa-D_cocGtW89I5NmdnX6Qc29DHg5VG3Fq464E0qGtB3Za_ZyWzRVm-UK26jY5_zbI3",
    },
});

export const webAPI = {
    getContent(contentType) {
        return instance.get(`/content/${contentType}.json`).then((res) => {
            return res.data;
        });
    },
    addContent(content, contentType) {
        return instance
            .post(`/content/${contentType}.json`, content)
            .then((res) => {
                return res.data;
            });
    },
    deleteContent(keyFirebase, contentType) {
        return instance.delete(`/content/${contentType}/${keyFirebase}.json`);
    },
    getSlides() {
        return instance.get(`/content/slides.json`).then((resp) => {
            return resp.data;
        });
    },
    getNews() {
        return instance.get(`/content/news.json`).then((resp) => {
            return resp.data;
        });
    },
    addNews(news) {
        return instance.post(`/content/news.json`, news).then((resp) => {
            return resp.data;
        });
    },
    deleteNews(keyFirebase) {
        return instance.delete(`/content/news/${keyFirebase}.json`);
    },
    updateContent(content, contentType, keyFirebase) {
        return instance.put(
            `/content/${contentType}/${keyFirebase}.json`,
            content
        );
    },
    updateNews(news, keyFirebase) {
        return instance.put(`/content/news/${keyFirebase}.json`, news);
    },
    likeContent(keyFirebase) {
        return instance
            .post(`/content/likedContent.json`, keyFirebase)
            .then((reps) => {
                return reps.data;
            });
    },
    dislikeContent(keyFirebase) {
        return instance
            .delete(`/content/likedContent/${keyFirebase}.json`)
            .then((reps) => {
                return reps.data;
            });
    },
    dislikeAllContent() {
        return instance.delete(`content/likedContent.json`);
    },
    getLikedContent() {
        return instance.get(`content/likedContent.json`).then((reps) => {
            return reps.data;
        });
    },
};

export const authAPI = {
    createAccount(accountData) {
        return instance.post(`/accounts.json`, accountData).then((resp) => {
            return resp.data;
        });
    },
    getAccounts() {
        return instance.get(`/accounts.json`).then((resp) => {
            return resp.data;
        });
    },
    isLogged() {
        return instance.get(`/account.json`).then((resp) => {
            return resp.data;
        });
    },
    loginIn(account) {
        return instance.post(`/account.json`, account).then((resp) => {
            return resp.data;
        });
    },
    logOut(keyFirebase) {
        return instance.delete(`/account/${keyFirebase}.json`);
    },
};
