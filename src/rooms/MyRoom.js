const colyseus = require('colyseus');
const { MyRoomState } = require('./schema/MyRoomState');

exports.MyRoom = class extends colyseus.Room {
  maxClients = 1000;

  onCreate (options) {
    // this.setState(new MyRoomState());

    this.onMessage("type", (client, message) => {
      console.log("l",client,message);
      //
      // handle "type" message.
      //
    });

  }

  onJoin (client, options) {
    
    console.log(client.sessionId, "joined!");
  }

  onLeave (client, consented) {
    console.log(client.sessionId, "left!");
  }

  onDispose() {
    console.log("room", this.roomId, "disposing...");
  }

}
