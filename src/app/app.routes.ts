import {ArticlesComponent} from "./articles/articles.component";
import {BundlesComponent} from "./bundles/bundles.component";
import {CartComponent} from "./cart/cart.component";

export const APP_ROUTES = [
  { path: 'articles', component: ArticlesComponent},
  { path: 'bundles', component: BundlesComponent},
  { path: 'cart', component: CartComponent},
  { path: '',   redirectTo: '/articles', pathMatch: 'full' }
];
