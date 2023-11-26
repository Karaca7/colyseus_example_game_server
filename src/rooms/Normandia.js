const colyseus = require("colyseus");

const { State, Player } = require("./schema/NormandiaState");

exports.Normandia = class extends colyseus.Room {
  onCreate(options) {
    this.setState(new State());

    this.onMessage("move", (client, message) => {
      // handle "move" message

      let { x, y, quantity } = message;
      console.log(message, "data");
      // console.log(message,"message");
    });
  }

  onJoin(client, options) {
    // client takım bilgisini yollayacak
    this.state.players.set(client.sessionId, new Player());
  }

  onMessage(client, message) {
    if (message.type === "take_army") {
      const {} = message.request;
    }
  }
};
