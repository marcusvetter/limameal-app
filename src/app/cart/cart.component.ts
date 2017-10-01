import {Component, OnInit} from "@angular/core";
import {Article} from "../articles/article.model";
import {CartService} from "./cart.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  articles: Article[];

  constructor(private cartService: CartService) {
  }

  async ngOnInit() {
    this.articles = await this.cartService.getArticles()
  }

}
