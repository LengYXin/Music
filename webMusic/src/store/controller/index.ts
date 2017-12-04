import Rx from "rxjs";

// 中控
export default class Observer {
    constructor() {
       
    }
    subject = new Rx.Subject<controllerObserver>();
}
// export const controller = new Observer();