import { Injectable } from '@angular/core';
import { UserData } from '../dummyData/user';
import { settings } from '../settings/settings';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class AuthService {

  public user: any;

  private userData: UserData = new UserData();

  constructor(private http: HttpClient) { }

  login(user: any): Observable<any> {
    var input = "grant_type=password&username=" + user.email + ';' + user.password + "&password=" + user.password;

    this.user = this.userData.user;

    return this.http.post(settings.chefService + "/token", input,
      { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } })
      .map((response) => {
        return { response };
      })
      .catch((e: any) => {        
        return Observable.throw({ "Errors": e });
      });
  }

  getUser(userId: string, role: string) {
    var url = "";
    if (role == "Chef")
      url = settings.chefService + "/api/chefs/" + userId + "/account";
    else if (role == "Customer")
      url = settings.chefService + "/api/customer/" + userId + "/account";

    return this.http.get(url)
      .map((response) => {
        return { response };
      })
      .catch((e: any) => {        
        return Observable.throw({ "Errors": e });
      });
  }
}
