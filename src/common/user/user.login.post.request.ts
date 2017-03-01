import {AbstractRequest} from "../http/abstract.request";
import {RequestMethod} from "@angular/http";
import {User} from "./user.model";

export class UserLoginPostRequest extends AbstractRequest {

  constructor(user: User) {
    super(RequestMethod.Post, "users/login", user);
  }

}
