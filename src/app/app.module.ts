import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { ReportsComponent } from "./reports/reports.component";
import { LoginComponent } from "./core/accounts/login/login.component";

import { CoreModule } from "./core/core.module";
import { TableComponent } from "./table/table.component";
import { SharedModule } from "./shared/shared.module";
import { SecureComponent } from "./secure/secure.component";
import { AuthGuard } from "./_guards/auth.guard";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ReportsComponent,
    TableComponent,
    SecureComponent,
  ],
  imports: [
    CoreModule,
    SharedModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
