import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-signup-ong',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    RouterModule,
    CommonModule
  ],
  templateUrl: './signup-ong.component.html',
  styleUrl: './signup-ong.component.css'
})
export class SignupOngComponent {
  validateForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      email: [null, [Validators.email, Validators.required]],
      name: [null, [Validators.required]],
      address: [null, [Validators.required]],
      phone: [null],
      password: [null, [Validators.required]],
      checkPassword: [null, [Validators.required]],
    });
  }

  submitForm(): void {
    if (this.validateForm.invalid) {
      this.snackBar.open('Formulário inválido. Verifique os campos.', 'Fechar', {
        duration: 5000,
        panelClass: ['error-snackbar'],
      });
      return;
    }

    this.authService.registerOng(this.validateForm.value).subscribe(
      (res) => {
        // Exibe mensagem de sucesso
        this.snackBar.open('Cadastro realizado com sucesso!', 'Fechar', {
          duration: 5000,
          panelClass: ['success-snackbar'],
        });

        this.router.navigateByUrl('/login'); // Removido o redirecionamento
      },
      (error) => {
        // Exibe mensagem de erro, se houver
        const errorMessage =
          error?.error?.message || 'Erro desconhecido ao tentar cadastrar.';
        this.snackBar.open(errorMessage, 'Fechar', {
          duration: 5000,
          panelClass: ['error-snackbar'],
        });
      }
    );
  }
}
