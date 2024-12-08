import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup-volunteer',
  standalone: true,
  imports: [],
  templateUrl: './signup-volunteer.component.html',
  styleUrl: './signup-volunteer.component.css'
})
export class SignupVolunteerComponent {

    validateForm!: FormGroup;

    constructor(private fb: FormBuilder,
      private authService: AuthService,
      private snackBar: MatSnackBar,
      private router: Router){

      }
}
