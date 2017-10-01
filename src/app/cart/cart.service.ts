import {Article} from "../articles/article.model";
import {Observable} from "rxjs";
export class CartService {

  articles: Article[] = [];

  add(article) {
    this.articles.push(article);
  }

  getArticles(): Promise<Article[]> {
    return Observable.of(this.articles).toPromise();
  }
}
