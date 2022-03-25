export default class LocalStorage {
  key = "";
  constructor(key) {
    this.key = key;
  }

  isNull() {
    return this.get() === null;
  }

  get() {
    return localStorage.getItem(this.key);
  }

  set(value) {
    localStorage.setItem(this.key, value);
  }

  add(array, value) {
    const newArray = [...array, value];
    this.set(newArray);
  }

  remove(array, value) {
    const newArray = array.filter((a) => a.toString() !== value.toString());
    this.set(newArray);
  }
}
