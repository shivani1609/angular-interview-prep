import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressService } from '@core/services/progress.service';

@Component({
  selector: 'app-progress',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="progress">
      <h1>Your Progress</h1>
      
      <div class="progress-container" *ngIf="progress$ | async as progress">
        <div class="progress-section">
          <h2>Overall Statistics</h2>
          <div class="stats-grid">
            <div class="stat">
              <span class="label">Topics Completed</span>
              <span class="value">{{ progress.totalTopicsCompleted }}/30</span>
            </div>
            <div class="stat">
              <span class="label">Total Hours</span>
              <span class="value">{{ progress.totalHoursSpent }}h</span>
            </div>
            <div class="stat">
              <span class="label">Current Streak</span>
              <span class="value">{{ progress.currentStreak }} days</span>
            </div>
          </div>
        </div>

        <div class="progress-section">
          <h2>Progress Bar</h2>
          <div class="progress-bar-container">
            <div class="progress-bar" 
                 [style.width.%]="(progress.totalTopicsCompleted / 30 * 100)">
            </div>
          </div>
          <p class="progress-text">{{ (progress.totalTopicsCompleted / 30 * 100) | number:'1.0-0' }}% Complete</p>
        </div>

        <div class="progress-section">
          <h2>Strong Areas</h2>
          <div class="tags">
            <span class="tag strong" *ngFor="let area of progress.strongAreas">
              ✓ {{ area }}
            </span>
          </div>
        </div>

        <div class="progress-section">
          <h2>Areas for Improvement</h2>
          <div class="tags">
            <span class="tag weak" *ngFor="let area of progress.weakAreas">
              ! {{ area }}
            </span>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .progress {
      padding: 20px;
    }

    h1 {
      color: #2c3e50;
      margin-bottom: 30px;
    }

    h2 {
      color: #2c3e50;
      margin-bottom: 15px;
      font-size: 18px;
    }

    .progress-container {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 20px;
    }

    .progress-section {
      background: white;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    .stats-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 15px;
    }

    .stat {
      text-align: center;
      padding: 15px;
      background-color: #f8f9fa;
      border-radius: 8px;
    }

    .stat .label {
      display: block;
      font-size: 12px;
      color: #7f8c8d;
      text-transform: uppercase;
      margin-bottom: 8px;
    }

    .stat .value {
      display: block;
      font-size: 24px;
      font-weight: bold;
      color: #3498db;
    }

    .progress-bar-container {
      width: 100%;
      height: 30px;
      background-color: #ecf0f1;
      border-radius: 15px;
      overflow: hidden;
      margin-bottom: 10px;
    }

    .progress-bar {
      height: 100%;
      background: linear-gradient(90deg, #3498db, #2ecc71);
      transition: width 0.5s ease;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      padding-right: 10px;
    }

    .progress-text {
      text-align: center;
      color: #7f8c8d;
      margin: 0;
    }

    .tags {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
    }

    .tag {
      display: inline-block;
      padding: 8px 12px;
      border-radius: 20px;
      font-size: 14px;
      font-weight: 500;
    }

    .tag.strong {
      background-color: #d4edda;
      color: #155724;
    }

    .tag.weak {
      background-color: #f8d7da;
      color: #721c24;
    }

    @media (max-width: 768px) {
      .stats-grid {
        grid-template-columns: 1fr;
      }

      .progress-container {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class ProgressComponent implements OnInit {
  progress$ = this.progressService.getProgress();

  constructor(private progressService: ProgressService) {}

  ngOnInit(): void {
    // Component initialization
  }
}
