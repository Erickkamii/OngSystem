import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';  // Importando MatFormFieldModule
import { MatInputModule } from '@angular/material/input';  // Importando MatInputModule
import { MatButtonModule } from '@angular/material/button';  // Importando MatButtonModule

@Component({
  selector: 'app-login',
  standalone: true,  // Componente standalone
  imports: [
    ReactiveFormsModule,
    CommonModule,
    MatFormFieldModule,  // Adicionando MatFormFieldModule
    MatInputModule,      // Adicionando MatInputModule
    MatButtonModule      // Adicionando MatButtonModule
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  validateForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
  ) {


  }

  ngOnInit() {
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
    });
  }

  submitForm() {
    this.authService.login(this.validateForm.get(['userName'])!.value, this.validateForm.get(['password'])!.value)
      .subscribe(res => {
        console.log(res);
      }, error => {
        console.log('Error: ', error);
      });
  }
}
