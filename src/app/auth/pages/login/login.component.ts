import { Component, inject, type OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGoogleService } from '../../services/auth-google.service';

declare const google: any;

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  private authService = inject(AuthGoogleService);

  constructor(private router: Router) {}

  ngOnInit(): void {

  }
  signInWithGoogle() {
    this.authService.login();
    this.router.navigate(['/home']);
  }
}
