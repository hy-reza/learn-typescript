class Game {
  private static _iddlePlayers: number = 0;

  login() {
    Game._iddlePlayers++;
  }

  logout() {
    Game._iddlePlayers--;
  }

  static get iddlePlayers() {
    return Game._iddlePlayers;
  }
}

let P1 = new Game();
P1.login();
let P2 = new Game();
P2.login();
let P3 = new Game();
P3.login();
console.info(Game.iddlePlayers);
