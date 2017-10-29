import {Injectable} from "@angular/core";
import {Http, Response, RequestMethod} from "@angular/http";
import {Observable} from "rxjs";
import {AbstractRequest} from "./abstract.request";
import {HttpClient, HttpEvent, HttpResponse} from "@angular/common/http";

@Injectable()
export class HttpService {

  constructor(private httpClient: HttpClient) {
  }

  public async executeRequest<T>(request: AbstractRequest): Promise<T> {
    return (<HttpResponse<T>> await this.httpClient.request<T>(request.getRequest()).toPromise()).body
  }

}
