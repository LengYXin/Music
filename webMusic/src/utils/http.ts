import axios, { AxiosRequestConfig } from "axios"
// const address = "/api/"
class Http {
    constructor() {
    }
    axios = axios;
    address = "/api/"
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
export default new Http();