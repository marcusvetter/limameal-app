import {Config} from "../config";
import {HttpHeaders, HttpRequest} from "@angular/common/http";

export abstract class AbstractRequest {

  constructor(private requestMethod: "GET" | "POST" | "PUT",
              private relativePath: string,
              private body?: any) {
  }

  public getRequest(): HttpRequest<any> {
    return new HttpRequest<any>(
      this.requestMethod,
      Config.BASE_URL + this.relativePath,
      this.body,
      {
        headers: new HttpHeaders({"Content-Type": "application/json"}),
        responseType: "json"
      }
    );
  }

}
