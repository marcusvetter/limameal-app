import { Component, OnInit } from '@angular/core';
import {ArticlesService} from "./articles.service";
import {Article} from "./article.model";
import {HttpService} from "../common/http/http.service";

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css'],
  providers: [ArticlesService, HttpService]
})
export class ArticlesComponent implements OnInit {

  articles: Article[];

  constructor(private articlesService: ArticlesService) { }

  ngOnInit() {
    this.articlesService.getArticles().then((articles: Article[]) => {
      this.articles = articles;
    });
  }

}
