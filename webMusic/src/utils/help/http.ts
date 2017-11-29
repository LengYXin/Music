import axios, { AxiosRequestConfig } from "axios"
// const address = "/api/"
export default class Http {
    constructor() {
        if (window.location.port == "3002") {
            this.address = "/api/"
        }
    }
    axios = axios;
    address = "/"
    post(url: string, data?: any, config?: AxiosRequestConfig) {
        return new Promise<any>((resolve, reject) => {
            axios.post(`${this.address}${url}`, data, config).then(x => {
                // console.log(x);
                if (x.status == 200) {
                    resolve(x.data.data)
                } else {
                    reject(x.data);
                }
            }).catch(e => {
                reject(e);
            })
        })
    }
    get(url: string, config?: AxiosRequestConfig) {
        return new Promise<any>((resolve, reject) => {
            axios.get(`${this.address}${url}`, config).then(x => {
                // console.log(x);
                if (x.status == 200 && x.data.code == 200) {
                    resolve(x.data)
                } else {
                    reject(x.data);
                }
            }).catch(e => {
                reject(e);
            })
        })
    }
}