import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  form = new FormGroup({
    account: new FormGroup({
      name: new FormControl('', [
          Validators.required
        ]
      ),
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),

    }),
    rePassword: new FormControl('', Validators.required)
  });

  constructor(private authService: AuthService, public router: Router) {
  }


  get name() {
    return this.form.get('account.name')
  }

  get password() {
    return this.form.get('account.password')
  }

  get email() {
    return this.form.get('account.email')
  }

  get account() {
    return this.form.get('account')
  }

  get rePassword() {
    return this.form.get('rePassword');
  }


  signUp() {
    this.authService.createOrUpdate(this.account?.value).subscribe((result) => {
      return result;
    });
    this.router.navigate(['/']);
  }

}
