import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { LoginRequest } from 'src/app/features/models/login-request.model';
import { AuthService } from '../services/auth.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {

  model: LoginRequest;

  constructor(private router: Router, private authService: AuthService, private cookieService: CookieService) {
    this.model = {
      username: '',
      password: ''
    }
  }

  onFormSubmit(): void {
    this.authService.login(this.model).subscribe({
      next: (response) => {
        this.cookieService.set('Authorization', `Bearer ${response.token}`,
        undefined, '/', undefined, true, 'Strict');
        // Set the user
        this.authService.setUser(
          {
            username: response.username,
            roles: response.roles
          }
        )
        this.router.navigateByUrl('/home');
      }
    });
  }
 /*  userLogin = new UserLogin();
  isLoading = false;
  formResetToggle = true;
  modalClosedCallback: { (): void } | undefined;
  loginStatusSubscription: Subscription | undefined;

  @Input()
  isModal = false;


  

  ngOnInit() {
    this.userLogin.rememberMe = this.authService.rememberMe;

    if (this.getShouldRedirect()) {
      this.authService.redirectLoginUser();
    } else {
      this.loginStatusSubscription = this.authService.getLoginStatusEvent().subscribe(() => {
        if (this.getShouldRedirect()) {
          this.authService.redirectLoginUser();
        }
      });
    }
  }

  ngOnDestroy() {
    this.loginStatusSubscription?.unsubscribe();
  }

  getShouldRedirect() {
    return !this.isModal && this.authService.isLoggedIn && !this.authService.isSessionExpired;
  }

  showErrorAlert(caption: string, message: string) {
    this.alertService.showMessage(caption, message, MessageSeverity.error);
  }

  closeModal() {
    if (this.modalClosedCallback) {
      this.modalClosedCallback();
    }
  }

  login() {
    this.isLoading = true;
    this.alertService.startLoadingMessage('', 'Attempting login...');

    this.authService.loginWithPassword(this.userLogin.userName, this.userLogin.password, this.userLogin.rememberMe)
      .subscribe({
        next: (user: { userName: any; }) => {
          setTimeout(() => {
            this.alertService.stopLoadingMessage();
            this.isLoading = false;
            this.reset();

            if (!this.isModal) {
              this.alertService.showMessage('Login', `Welcome ${user.userName}!`, MessageSeverity.success);
            } else {
              this.alertService.showMessage('Login', `Session for ${user.userName} restored!`, MessageSeverity.success);
              setTimeout(() => {
                this.alertService.showStickyMessage('Session Restored', 'Please try your last operation again', MessageSeverity.default);
              }, 500);

              this.closeModal();
            }
          }, 500);
        },
        error: (error: any) => {
          this.alertService.stopLoadingMessage();

          if (Utilities.checkNoNetwork(error)) {
            this.alertService.showStickyMessage(Utilities.noNetworkMessageCaption, Utilities.noNetworkMessageDetail, MessageSeverity.error, error);
            this.offerAlternateHost();
          } else {
            const errorMessage = Utilities.getHttpResponseMessage(error);

            if (errorMessage) {
              this.alertService.showStickyMessage('Unable to login', this.mapLoginErrorMessage(errorMessage), MessageSeverity.error, error);
            } else {
              this.alertService.showStickyMessage('Unable to login',
                'An error occurred whilst logging in, please try again later.\nError: ' + Utilities.stringify(error), MessageSeverity.error, error);
            }
          }

          setTimeout(() => {
            this.isLoading = false;
          }, 500);
        }
      });
  }

  offerAlternateHost() {
    if (Utilities.checkIsLocalHost(location.origin) && Utilities.checkIsLocalHost(this.configurations.baseUrl)) {
      this.alertService.showDialog('Dear Developer!\nIt appears your backend Web API service is not running...\n' +
        'Would you want to temporarily switch to the online Demo API below?(Or specify another)', DialogType.prompt, value => {
          this.configurations.baseUrl = value as string;
          this.alertService.showStickyMessage('API Changed!', 'The target Web API has been changed to: ' + value, MessageSeverity.warn);
        },
        null,
        null,
        null,
        this.configurations.fallbackBaseUrl);
    }
  }

  mapLoginErrorMessage(error: string) {
    if (error === 'invalid_username_or_password') {
      return 'Invalid username or password';
    }

    if (error === 'invalid_grant') {
      return 'Invalid login details or state';
    }

    return error;
  }

  reset() {
    this.formResetToggle = false;

    setTimeout(() => {
      this.formResetToggle = true;
    });
  } */

}
