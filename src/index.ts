import * as http from "http";

class Main {
  constructor() {
    const server: http.Server = http.createServer(
      (request: http.IncomingMessage, response: http.ServerResponse) =>
      this.requestHandler(request, response)
    );

    //Listen on port 8080.
    server.listen("8080");

    console.log("http://localhost:8080にアクセスしてください");

  }

  private requestHandler(
    request: http.IncomingMessage,
    response: http.ServerResponse
  ): void {
    response.end("Hello!");
  }
}

new Main();