import {Injectable} from "@angular/core";
import {Http, Response, RequestMethod} from "@angular/http";
import {Observable} from "rxjs";
import {AbstractRequest} from "./abstract.request";

@Injectable()
export class HttpService {

  constructor(private http: Http) {
  }

  public executeRequest<T>(request: AbstractRequest): Observable<T> {
    this.logRequest(request);
    return this.http.request(request.getRequest())
      .map((response: Response) => response.json())
      .do((responseJson) => console.info(`Response: ${JSON.stringify(responseJson)}`))
      .catch((error: any) => {
        console.error(error);
        return Observable.throw(error.json())
      });
  }

  private logRequest(request: AbstractRequest) {
    let method = '';

    switch (request.getRequest().method) {
      case RequestMethod.Get: {
        method = 'GET';
        break;
      }
      case RequestMethod.Post: {
        method = 'POST';
        break;
      }
      case RequestMethod.Put: {
        method = 'PUT';
        break;
      }
      case RequestMethod.Delete: {
        method = 'DELETE';
        break;
      }
      default: {
        method = request.getRequest().method.toString();
      }
    }

    console.log(`${method} | ${request.getRequest().url} | ${request.getRequest().getBody()}`);
  }

}
