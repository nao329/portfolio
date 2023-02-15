import { Server } from "https://code4sabae.github.io/js/Server.js";

class MyServer extends Server {
  api(path, req) {
    const time = new Date();
    return { path, req,  time };
  }
}
new MyServer(8881);