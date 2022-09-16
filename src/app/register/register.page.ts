import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { error } from 'protractor';
import { RegisterService } from './register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  register = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
    name: ['', Validators.required],
    birthDate: ['', Validators.required],
    phone: ['', Validators.required],
    address: ['', Validators.required],
    neighbourhood: ['', Validators.required],
    city: ['', Validators.required],
    cep: ['', Validators.required],
    state: ['', Validators.required],
  });
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private registerService: RegisterService
  ) {}

  ngOnInit() {}
  handleRegister() {
    //TODO: do the registration
    this.registerService.register(this.register.value).subscribe({
      next: (response) => {
        if (response) this.router.navigate(['/login']);
      },
    });
  }
}
