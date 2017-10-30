import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AppComponent} from "./app.component";
import {ArticlesComponent} from "./articles/articles.component";
import {RouterModule} from "@angular/router";
import {APP_ROUTES} from "./app.routes";
import {BundlesComponent} from "./bundles/bundles.component";
import {CartComponent} from "./cart/cart.component";
import {ArticlesService} from "./articles/articles.service";
import {HttpService} from "./common/http/http.service";
import {CartService} from "./cart/cart.service";
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatButtonModule, MatListModule} from "@angular/material";

@NgModule({
  declarations: [
    AppComponent,
    ArticlesComponent,
    BundlesComponent,
    CartComponent
  ],
  imports: [
    RouterModule.forRoot(APP_ROUTES),
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HttpModule,
    MatButtonModule,
    MatListModule
  ],
  providers: [
    HttpService,
    ArticlesService,
    CartService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
