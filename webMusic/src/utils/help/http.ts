import Rx from "rxjs";

// import axios, { AxiosRequestConfig } from "axios";
// import Rx from "rxjs"
// const address = "/api/"
export default class Http {
    constructor() {
        if (window.location.port == "3002") {
            this.address = "/api/"
        }
    }
    address = "/"
    post(url: string) {
        return Rx.Observable.ajax.post(`${this.address}${url}`).map(this.map);
    }
    get(url: string) {
        return Rx.Observable.ajax.get(`${this.address}${url}`).map(this.map);
    }
    map(x) {
        if (x.status == 200) {
            return x.response;
        }
        throw x;
    }
}