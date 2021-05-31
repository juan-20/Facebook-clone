import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})



export class LoginComponent implements OnInit {

  formgroup: FormGroup;
  title = 'app';

  constructor(
    changePassword: FormBuilder,
  ) {
    this.formgroup = changePassword.group({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    });
    console.log(changePassword);
  }


  ngOnInit() {
  }

  login() {
    console.log(this.formgroup.value)
  }

  openRegister(): void {

  }

}
