import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './features/auth/login/login.component';
import { TransactionComponent } from './components/transaction/transaction.component';
import { LogoutComponent } from './features/auth/logout/logout.component';
import { HomeComponent } from './components/home/home.component';
import { CentersComponent } from './components/centers/centers.component';
import { CenterClientComponent } from './components/center-client/center-client.component';
import { AddCenterComponent } from './components/add-center/add-center.component';
import { CenterUiHomeComponent } from './components/center-ui-home/center-ui-home.component';
import { CenterUiNewTransComponent } from './components/center-ui-new-trans/center-ui-new-trans.component';

const routes: Routes = [
  
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  
  { path: 'centers', component: CentersComponent },
  { path: 'centcli', component: CenterClientComponent },
  { path: 'addCenter', component: AddCenterComponent },
  { path: 'home', component: HomeComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'nt', component: TransactionComponent },
  { path: 'unewtrans', component: CenterUiNewTransComponent},
  { path: 'uhome', component: CenterUiHomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
