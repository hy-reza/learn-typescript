class Toko<T> {
  protected _object: T[] = [];
  add(inpt: T): void {
    this._object.push(inpt);
  }

  find(key: keyof T, value: unknown): T | undefined { //key of == property dari type
    return this._object.find((obj) => obj[key] === value);
  }
}
