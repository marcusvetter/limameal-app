import {async, ComponentFixture, TestBed} from "@angular/core/testing";
import {ArticlesComponent} from "./articles.component";
import {Observable} from "rxjs";
import {Article} from "./article.model";
import {ArticlesService} from "./articles.service";

class ArticlesServiceMock {
  async getArticles(): Promise<Article[]> {
    let articles = [
      new Article('1', 'Banana'),
      new Article('2', 'Apple')
    ];
    return Observable.of(articles).toPromise()
  }
}

describe('ArticlesComponent', () => {
  let component: ArticlesComponent;
  let fixture: ComponentFixture<ArticlesComponent>;

  beforeEach(async(() => {
    TestBed
      .configureTestingModule({
        declarations: [ArticlesComponent],
        providers: [
          {provide: ArticlesService, useClass: ArticlesServiceMock}
        ]
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
