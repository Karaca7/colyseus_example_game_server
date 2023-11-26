const schema = require("@colyseus/schema");
const colyseus = require("colyseus");

class Player extends schema.Schema {
  constructor() {
    super();

    this.x=0;
    this.y=0;
    this.healt=0;
  }
}

schema.defineTypes(Player, {
  x: "number",
  y: "number",
  healt: "number",
  
});

class State extends schema.Schema {
  constructor() {
    super();
    this.players = new schema.MapSchema();
  }
}
schema.defineTypes(State, {
  players: { map: Player },
});

class tank {
  constructor() {
    (this.id = ""),

    (this.name = ""), (this.damge = ""), (this.team = ""), (this.player = "");
  }
}

class ship {
  constructor() {
    (this.id = ""),
      (this.name = ""),
      (this.damge = ""),
      (this.team = ""),
      (this.player = "");
  }
}

class teams {
  constructor() {
    (this.name = ""),
      (this.soliders = 1000),
      (this.healt = 100),
      (this.player_1 = []);
      (this.player_2 = []);

      
  }
}


module.exports = { State, Player };
