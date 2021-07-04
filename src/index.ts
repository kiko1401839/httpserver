import * as http from "http";
import { type } from "os";

class Main {
  constructor() {
    const server: http.Server = http.createServer(
      (request: http.IncomingMessage, response: http.ServerResponse) => {
        request.setEncoding("utf-8");
        // GETリクエストに対するレスポンス
        if (request.method === "GET") {
          this.getRequestHandler(request, response);
        }

        // POSTリクエストに対するレスポンス
        if (request.method === "POST") {
          this.postRequestHandler(request, response);
        }
      }
    );

    //Listen on port 8080.
    server.listen("8080");
    console.log("Listening on port 8080...");
  }

  // GETリクエストに対するレスポンス
  private getRequestHandler(
    request: http.IncomingMessage,
    response: http.ServerResponse
  ): void {
    response.writeHead(200, { "Content-Type": "application/json" });
    response.write('{"answer":0}');
    response.end();
  }

  // POSTリクエストに対するレスポンス
  private postRequestHandler(
    request: http.IncomingMessage,
    response: http.ServerResponse
  ): void {
    response.writeHead(200, { "Content-Type": "application/json" });
    request.on("data", chunk => {
      const data = JSON.parse(chunk);
      response.end(String(data.A + data.B) + "\n");
    });
  }
}

new Main();
