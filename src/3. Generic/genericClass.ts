class Pair<K, V> {
  //<T> Generic Template
  constructor(public key: K, public value: V) {}
}

const stringKeyValue = new Pair<string, number>("one", 1);
const numberKeyValue = new Pair(1, 1); //auto
