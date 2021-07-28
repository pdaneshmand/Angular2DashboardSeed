import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NavComponent } from "./nav/nav.component";
import { appRoutes } from "../routes";
import { RouterModule } from "@angular/router";
import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { FormsModule } from "@angular/forms";
import { AuthenticationService } from "../_services/authentication.service";
import { UserService } from "../_services/user.service";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes),
    BsDropdownModule.forRoot(),
    FormsModule,
  ],
  declarations: [NavComponent],
  exports: [NavComponent, RouterModule],
  providers: [AuthenticationService, UserService],
})
export class CoreModule {}
