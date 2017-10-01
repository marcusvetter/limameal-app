import {OnInit, Component} from "@angular/core";
import {ArticlesService} from "./articles.service";
import {Article} from "./article.model";
import {CartService} from "../cart/cart.service";

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  articles: Article[];

  constructor(private articlesService: ArticlesService,
              private cartService: CartService) {
  }

  async ngOnInit() {
    this.articles = await this.articlesService.getArticles();
    console.log(this.articles);
  }

  addToCart(article: Article) {
    this.cartService.add(article);
  }

}
