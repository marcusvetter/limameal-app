import {NgModule, ErrorHandler} from "@angular/core";
import {IonicApp, IonicModule, IonicErrorHandler} from "ionic-angular";
import {LimamealApp} from "./app.component";
import {BundlesPage} from "../pages/bundles/bundles";
import {CartPage} from "../pages/cart/cart";
import {TabsPage} from "../pages/tabs/tabs";
import {ArticlesPage} from "../pages/articles/articles";
import {Storage} from "@ionic/storage";

@NgModule({
  declarations: [
    LimamealApp,
    ArticlesPage,
    BundlesPage,
    CartPage,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(LimamealApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    LimamealApp,
    ArticlesPage,
    BundlesPage,
    CartPage,
    TabsPage
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Storage
  ]
})
export class AppModule {
}
