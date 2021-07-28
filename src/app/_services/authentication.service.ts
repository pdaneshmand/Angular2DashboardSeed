import { Injectable } from "@angular/core";
import { HttpClient, HttpResponse } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable()
export class AuthenticationService {
  public token: string;
  public isAuthenticated: boolean = false;
  private currentUser: any;
  constructor(private http: HttpClient) {
    this.currentUser = JSON.parse(
      localStorage.getItem("currentUser") || "null"
    );
    this.token = this.currentUser && this.currentUser.token;
  }

  login(username: string, password: string): Observable<boolean> {
    return this.http
      .post(
        "/api/authenticate",
        JSON.stringify({ username: username, password: password })
      )
      .pipe(
        map((response: any) => {
          // login successful if there is a jwt token in the response
          let token = response.json() && response.json().token;
          if (token) {
            //set token property
            this.token = token;

            // store username and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem(
              "currentUser",
              JSON.stringify({ username: username, token: token })
            );

            //return true to indicate successful login
            return true;
          } else {
            return false;
          }
        })
      );
  }

  logout(): void {
    // clear token to remove user from local storage to log out
    this.token = "";
    this.isAuthenticated = false;
    localStorage.removeItem("currentUser");
  }
}
