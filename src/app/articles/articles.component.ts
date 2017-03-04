import {OnInit, Component} from "@angular/core";
import {ArticlesService} from "./articles.service";
import {Article} from "./article.model";

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  articles: Article[];

  constructor(private articlesService: ArticlesService) {
  }

  async ngOnInit() {
    this.articles = await this.articlesService.getArticles()
  }

}
