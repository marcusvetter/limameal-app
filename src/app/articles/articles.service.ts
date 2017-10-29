import {Injectable} from "@angular/core";
import {Article} from "./article.model";
import {HttpService} from "../common/http/http.service";
import {ArticlesGetRequest} from "./articles.get.request";
import {validate} from "jsonschema";
import * as articlesResponseSchema from "./articles.response.schema.json";

@Injectable()
export class ArticlesService {

  constructor(private httpService: HttpService) {
  }

  async getArticles(): Promise<Article[]> {
    const articles: Article[] = await this.httpService.executeRequest<Article[]>(new ArticlesGetRequest());

    const responseValidation = validate(articles,articlesResponseSchema);
    if (!responseValidation.valid) {
      throw "Article response not valid (schema validation): " + responseValidation.errors;
    }

    return articles;
  }

}
