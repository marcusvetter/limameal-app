import {AbstractRequest} from "../common/http/abstract.request";
import {RequestMethod} from "@angular/http";

export class ArticlesGetRequest extends AbstractRequest {

  constructor() {
    super("GET", '/articles')
  }

}
