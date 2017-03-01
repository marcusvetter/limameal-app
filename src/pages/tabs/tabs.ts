import {Component} from "@angular/core";
import {CartPage} from "../cart/cart";
import {BundlesPage} from "../bundles/bundles";
import {ArticlesPage} from "../articles/articles";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = ArticlesPage;
  tab2Root: any = BundlesPage;
  tab3Root: any = CartPage;

  constructor() {

  }
}
