import { Component, type OnInit } from '@angular/core';
import { LucideAngularModule, CircleUserRound } from 'lucide-angular';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {

  readonly CircleUserRound = CircleUserRound;

  isLoggedIn: boolean = false;
  isAdmin: boolean = false;
  userName: string = 'John Doe';
  ngOnInit(): void { }
  login() {
    this.isLoggedIn = true;
    this.isAdmin = true;
    this.userName = 'John Doe';
  }
  logout() {}
  registerNewPet() {}
}
