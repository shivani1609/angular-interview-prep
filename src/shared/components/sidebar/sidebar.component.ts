import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <nav class="sidebar">
      <div class="logo">
        <h2>InterviewPrep</h2>
      </div>
      <ul class="nav-items">
        <li><a routerLink="/dashboard" routerLinkActive="active">Dashboard</a></li>
        <li><a routerLink="/roadmap" routerLinkActive="active">30-Day Roadmap</a></li>
        <li><a routerLink="/playground" routerLinkActive="active">Code Playground</a></li>
        <li><a routerLink="/interview-questions" routerLinkActive="active">Interview Q&A</a></li>
        <li><a routerLink="/company-track" routerLinkActive="active">Company Track</a></li>
        <li><a routerLink="/mock-interview" routerLinkActive="active">Mock Interview</a></li>
        <li><a routerLink="/system-design" routerLinkActive="active">System Design</a></li>
        <li><a routerLink="/assignments" routerLinkActive="active">Assignments</a></li>
        <li><a routerLink="/notes" routerLinkActive="active">My Notes</a></li>
        <li><a routerLink="/progress" routerLinkActive="active">Progress</a></li>
      </ul>
    </nav>
  `,
  styles: [`
    .sidebar {
      width: 250px;
      background-color: #2c3e50;
      color: white;
      padding: 20px 0;
      overflow-y: auto;
      height: 100%;
    }

    .logo {
      padding: 20px;
      border-bottom: 1px solid #34495e;
    }

    .logo h2 {
      color: #3498db;
      margin: 0;
    }

    .nav-items {
      list-style: none;
      padding: 0;
    }

    .nav-items li {
      margin: 0;
    }

    .nav-items a {
      display: block;
      padding: 15px 20px;
      color: #ecf0f1;
      transition: all 0.3s ease;
      border-left: 3px solid transparent;
    }

    .nav-items a:hover {
      background-color: #34495e;
      border-left-color: #3498db;
    }

    .nav-items a.active {
      background-color: #34495e;
      border-left-color: #3498db;
      color: #3498db;
    }
  `]
})
export class SidebarComponent {}
