import { observable, computed, autorun } from "mobx"
import * as Http from "../../utils/http"
class ObservableStore {
    @observable Store = {};
    constructor() {
    }
}

export const Store = new ObservableStore();
console.log(Store);



