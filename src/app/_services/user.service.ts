import { Injectable } from "@angular/core";
import { HttpClient, HttpResponse, HttpHeaders } from "@angular/common/http";
import { AuthenticationService } from "./authentication.service";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { User } from "../_models/user";

@Injectable()
export class UserService {
  constructor(private http: HttpClient, private auth: AuthenticationService) {}

  getUsers(): Observable<User[]> {
    // add auth header with jwt token
    let headers = new HttpHeaders({
      Authorization: "Bearer " + this.auth.token,
    });
    let options = {
      headers: headers,
    };

    // get users from api
    return this.http
      .get<HttpResponse<User>[]>("/api/users", options)
      .pipe(map((response: any) => response));
  }
}
