import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '@core/services/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header class="header">
      <div class="header-content">
        <h1>Frontend Architect Interview Prep</h1>
        <div class="user-section" *ngIf="user$ | async as user">
          <span>Welcome, {{ user.name }}</span>
          <button (click)="logout()" class="logout-btn">Logout</button>
        </div>
      </div>
    </header>
  `,
  styles: [`
    .header {
      background-color: #34495e;
      color: white;
      padding: 15px 20px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    .header-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      max-width: 1400px;
      margin: 0 auto;
    }

    h1 {
      font-size: 24px;
      margin: 0;
    }

    .user-section {
      display: flex;
      align-items: center;
      gap: 15px;
    }

    .logout-btn {
      padding: 8px 16px;
      background-color: #e74c3c;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }

    .logout-btn:hover {
      background-color: #c0392b;
    }
  `]
})
export class HeaderComponent implements OnInit {
  user$ = this.authService.getCurrentUser();

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    // Header initialization if needed
  }

  logout(): void {
    this.authService.logout();
  }
}
