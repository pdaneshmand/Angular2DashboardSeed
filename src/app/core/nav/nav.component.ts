import { Component, OnInit } from "@angular/core";
import { AuthenticationService } from "../../_services/authentication.service";

@Component({
  selector: "cr-nav",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.css"],
})
export class NavComponent implements OnInit {
  isIn = false;
  loading = false;
  error = "";
  username!: string;
  password!: string;
  toggleState() {
    this.isIn = !this.isIn;
  }

  constructor(public auth: AuthenticationService) {}

  ngOnInit() {
    console.log("Login");
  }

  login(formvalues: any) {
    this.auth
      .login(formvalues.username, formvalues.password)
      .subscribe((result) => {
        if (result === true) {
          // login successful
          this.auth.isAuthenticated = true;
        } else {
          // login failed
          this.auth.isAuthenticated = false;
        }
      });
  }

  logout() {
    this.auth.logout();
  }
}
