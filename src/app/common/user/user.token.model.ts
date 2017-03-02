export class UserToken {

  constructor(public id: string,
              public ttl: number,
              public created: string,
              public userId: number) {

  }

}
