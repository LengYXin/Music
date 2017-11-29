/**
 * 窗口程序
 */
import { observable, computed, autorun } from "mobx"

class ObservableStore {
  electron = null;
  constructor() {
    if (window["require"]) {
      this.electron = window["require"]("electron");
    }
  }
}
const Store = new ObservableStore();
console.log("Store----Windows", Store);
export default Store;



