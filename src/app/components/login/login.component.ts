import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  form = new FormGroup({
    account: new FormGroup({
      login: new FormControl('', [
          Validators.required,
        ]
      ),
      password: new FormControl('', Validators.required)
    })
  });

  public logged?: boolean;
  public logout?: boolean;

  constructor(public authService: AuthService,
              private router: Router) {
  }


  get login() {
    return this.form.get('account.login');
  }

  get password() {
    return this.form.get('account.password');
  }

  get account(){
    return this.form.get('account');
  }

  signIn() {
    return this.authService.authenticate(this.account?.value).subscribe((result) => {
      if (!result) {
        this.logged = false;
      } else {
        this.logout = false;
        this.router.navigate(['/']);
      }
    });
  }

}
