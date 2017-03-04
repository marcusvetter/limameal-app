import {Component} from "@angular/core";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  menuItems = [{
    title: 'Articles',
    route: '/articles'
  }, {
    title: 'Bundles',
    route: '/bundles'
  }, {
    title: 'Cart',
    route: '/cart'
  }];

  constructor(private router: Router) {
  }

  navigateTo(route: string): void {
    this.router.navigate([route]);
  }
}
