import {Injectable} from "@angular/core";
import {Article} from "./article.model";
import {HttpService} from "../common/http/http.service";
import {ArticlesGetRequest} from "./articles.get.request";

@Injectable()
export class ArticlesService {

  constructor(private httpService: HttpService) {
  }

  public getArticles(): Promise<Article[]> {
    return this.httpService.executeRequest(new ArticlesGetRequest()).toPromise()
  }

}
