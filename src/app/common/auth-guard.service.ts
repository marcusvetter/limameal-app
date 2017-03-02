// import {Injectable} from "@angular/core";
// import {Router, CanActivate} from "@angular/router";
// import {Session} from "./session";
//
// @Injectable()
// export class AuthGuardService implements CanActivate {
//   constructor(private router: Router) {
//   }
//
//   canActivate() {
//     console.log("###### Session.isTokenAvailable() " + Session.isTokenAvailable());
//     if (Session.isTokenAvailable()) {
//       return true;
//     } else {
//       this.router.navigate(["/login"]);
//       return false;
//     }
//   }
// }
