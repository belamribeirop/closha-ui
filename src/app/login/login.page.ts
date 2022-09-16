import { LoginService } from './login.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  userLogin = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });
  constructor(
    private router: Router,
    private LoginService: LoginService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {}
  handleLogin() {
    this.LoginService.autheticate(this.userLogin.value).subscribe({
      next: () => {
        this.router.navigate(['/tabs/home']);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
