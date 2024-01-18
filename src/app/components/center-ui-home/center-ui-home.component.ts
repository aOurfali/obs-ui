import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-center-ui-home',
  templateUrl: './center-ui-home.component.html',
  styleUrls: ['./center-ui-home.component.css']
})
export class CenterUiHomeComponent {

  constructor (private router: Router,) {}
  
  navigateTo(value: any) {
    this.router.navigate(['../', value]);
  }
}
