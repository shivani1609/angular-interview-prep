import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProgressService } from '@core/services/progress.service';
import { RoadmapService } from '@core/services/roadmap.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="dashboard">
      <h1>Dashboard</h1>
      
      <div class="stats-grid" *ngIf="progress$ | async as progress">
        <div class="stat-card">
          <h3>Topics Completed</h3>
          <p class="stat-value">{{ progress.totalTopicsCompleted }}/30</p>
        </div>
        <div class="stat-card">
          <h3>Hours Spent</h3>
          <p class="stat-value">{{ progress.totalHoursSpent }}h</p>
        </div>
        <div class="stat-card">
          <h3>Current Streak</h3>
          <p class="stat-value">{{ progress.currentStreak }} days</p>
        </div>
        <div class="stat-card">
          <h3>Progress</h3>
          <p class="stat-value">{{ (progress.totalTopicsCompleted / 30 * 100) | number:'1.0-0' }}%</p>
        </div>
      </div>

      <div class="quick-links">
        <h2>Quick Start</h2>
        <div class="link-grid">
          <a routerLink="/roadmap" class="link-card">
            <h4>30-Day Roadmap</h4>
            <p>Follow structured learning path</p>
          </a>
          <a routerLink="/playground" class="link-card">
            <h4>Code Playground</h4>
            <p>Practice coding problems</p>
          </a>
          <a routerLink="/interview-questions" class="link-card">
            <h4>Interview Questions</h4>
            <p>Prepare with company questions</p>
          </a>
          <a routerLink="/mock-interview" class="link-card">
            <h4>Mock Interview</h4>
            <p>Full interview simulation</p>
          </a>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .dashboard {
      padding: 20px;
    }

    h1 {
      color: #2c3e50;
      margin-bottom: 30px;
    }

    .stats-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 20px;
      margin-bottom: 40px;
    }

    .stat-card {
      background: white;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      text-align: center;
    }

    .stat-card h3 {
      color: #7f8c8d;
      font-size: 14px;
      margin-bottom: 10px;
      text-transform: uppercase;
    }

    .stat-value {
      font-size: 32px;
      font-weight: bold;
      color: #3498db;
      margin: 0;
    }

    .quick-links {
      margin-top: 40px;
    }

    .quick-links h2 {
      color: #2c3e50;
      margin-bottom: 20px;
    }

    .link-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 20px;
    }

    .link-card {
      background: white;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      transition: all 0.3s ease;
      cursor: pointer;
    }

    .link-card:hover {
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      transform: translateY(-2px);
    }

    .link-card h4 {
      color: #2c3e50;
      margin: 0 0 10px 0;
    }

    .link-card p {
      color: #7f8c8d;
      margin: 0;
      font-size: 14px;
    }
  `]
})
export class DashboardComponent implements OnInit {
  progress$ = this.progressService.getProgress();

  constructor(
    private progressService: ProgressService,
    private roadmapService: RoadmapService
  ) {}

  ngOnInit(): void {
    // Component initialization
  }
}
