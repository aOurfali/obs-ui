import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/features/auth/services/auth.service';
import { AuthUser } from 'src/app/features/models/user-auth.model';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  appTitle = 'obs-ui';
  authenticated: boolean = true;
  user?: AuthUser;

  constructor (private router: Router, private authService: AuthService) {
    //this.authService.subscribe(x => this.currentUser = x);
  }

  ngOnInit(): void {
    this.authService.user().subscribe(
      {
        next: (response) => {
          this.user = response;
        }
      }
    )
  }

  navigateTo(value: any) {
    this.router.navigate(['../', value]);
  }

  logout() {
   
    this.router.navigate(['/login']);
  }
}
