import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './features/auth/login/login.component';
import { LogoutComponent } from './features/auth/logout/logout.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { CentersComponent } from './components/centers/centers.component';
import { CenterClientComponent } from './components/center-client/center-client.component';
import { AddCenterComponent } from './components/add-center/add-center.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CenterUiHomeComponent } from './components/center-ui-home/center-ui-home.component';
import { CenterUiNewTransComponent } from './components/center-ui-new-trans/center-ui-new-trans.component';
import { AuthService } from './features/auth/services/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogoutComponent,
    RegisterComponent,
    HomeComponent,
    CentersComponent,
    CenterClientComponent,
    AddCenterComponent,
    NavbarComponent,
    CenterUiHomeComponent,
    CenterUiNewTransComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
