import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  visible: boolean = false;
  changeType: boolean = true;
  loginForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private route: Router, private toast: ToastrService) {
    this.loginForm = this.formBuilder.group({
      Email: ['', [Validators.required, Validators.email]],
      Password: ['', [Validators.required, Validators.minLength(2)]]
    })
  }

  loginBtn() {
    if (this.loginForm.valid) {
      this.route.navigateByUrl('/home');
    } else {
      this.toast.error('Invalid Credentilas');
    }
  }
}
