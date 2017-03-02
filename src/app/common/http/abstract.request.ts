import {Headers, RequestMethod, Request, ResponseContentType} from "@angular/http";
import {Config} from "../config";

export abstract class AbstractRequest {

  constructor(private requestMethod: RequestMethod,
              private relativePath: string,
              private body?: any,
              private headers: Headers = new Headers()) {
    this.addDefaultHeaders();
  }

  public getRequest(): Request {
    return new Request({
      method: this.requestMethod,
      headers: this.headers,
      url: Config.BASE_URL + this.relativePath,
      responseType: ResponseContentType.Json,
      body: this.body
    });
  }

  private addDefaultHeaders() {
    if (this.body) {
      this.headers.append("Content-Type", "application/json");
    }

    // if (Session.isTokenAvailable()) {
    //   this.headers.append('Authorization', Session.getToken());
    // }
  }

}
