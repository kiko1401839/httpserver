import * as http from "http";

class Main {
  constructor() {
    const server: http.Server = http.createServer(
      (request: http.IncomingMessage, response: http.ServerResponse) =>
      this.requestHandler(request, response)
    );

    //Listen on port 8080.
    server.listen("8080");
    console.log("Listening on port 8080...");

  }

  private requestHandler(
    request: http.IncomingMessage,
    response: http.ServerResponse
  ): void {
    response.writeHead(200, { "Content-Type" : "application/json" });
    response.write('{"answer":0}');
    response.end();
  }
}

new Main();