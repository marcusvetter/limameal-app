import {getString, setString, remove} from "application-settings";
import {Injectable} from "@angular/core";
import {Storage} from "@ionic/storage";

@Injectable()
export class Session {

  constructor(private storage: Storage) {
  }

  private static APPLICATION_KEY_TOKEN = 'token';

  public getToken(): Promise<string> {
    return this.storage.get(Session.APPLICATION_KEY_TOKEN);
  }

  public setToken(token: string): Promise<string> {
    return this.storage.set(Session.APPLICATION_KEY_TOKEN, token);
  }

  public clearToken(): Promise<any> {
    return this.storage.remove(Session.APPLICATION_KEY_TOKEN);
  }

}
