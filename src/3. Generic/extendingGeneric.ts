interface Product {
  name: string;
  price: number;
}

class Store<T> {
  protected _objects: T[] = [];

  add(object: T): void {
    this._objects.push(object);
  }
}

class CompressStore<T> extends Store<T> {
  compress(): void {}
}

class SearchStore<T extends { name: string }> extends Store<T> {
  find(object: T): T[] {
    return [...this._objects.filter((p) => p.name === object.name)];
  }
}

class ProductStore extends Store<Product> {
  filterProduct(): Product[] {
    return [];
  }
}
