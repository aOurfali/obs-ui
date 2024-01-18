import { Component, OnDestroy, OnInit } from '@angular/core';
import { LoginComponent } from './features/auth/login/login.component';
import { ToastaService, ToastaConfig, ToastOptions, ToastData } from 'ngx-toasta';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { Permission } from './models/permission';
import { Alertify } from './models/alertify';
import { AppModule } from './app.module';

declare let alertify: Alertify;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  appTitle = 'obs-ui';

  constructor (private router: Router) {}

  navigateTo(value: any) {
    this.router.navigate(['../', value]);
  }
}
