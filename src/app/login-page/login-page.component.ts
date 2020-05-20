import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  constructor(private router: Router) { }
  loginForm: FormGroup;

  ngOnInit() {
    this.loginForm = new FormGroup({
      animalName: new FormControl(null, Validators.required)
    });
  }

  login(): void {
    this.router.navigate(['chat'], {queryParams: {user: this.loginForm.controls.animalName.value}});
  }
}
