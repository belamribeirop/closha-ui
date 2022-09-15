import { LoginService } from './login.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  constructor(private router: Router, private LoginService: LoginService) {}

  ngOnInit() {}
  handleLogin() {
    this.LoginService.autheticate().subscribe({
      next: () => {
        this.router.navigate(['/tabs/home']);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
