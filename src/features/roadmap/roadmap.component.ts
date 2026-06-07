import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RoadmapService } from '@core/services/roadmap.service';

@Component({
  selector: 'app-roadmap',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="roadmap">
      <h1>30-Day Interview Prep Roadmap</h1>
      <p class="subtitle">Complete structured learning path for Frontend Architecture</p>
      
      <div class="roadmap-container">
        <div class="roadmap-item" *ngFor="let day of roadmap$ | async" 
             [class.completed]="day.completed">
          <div class="day-header">
            <h3>Day {{ day.day }}</h3>
            <span class="status" *ngIf="day.completed">✓ Completed</span>
          </div>
          <div class="topics">
            <div class="topic" *ngFor="let topic of day.topics">
              <p>{{ topic.title }}</p>
              <span class="level">{{ topic.level }}</span>
              <span class="duration">{{ topic.duration }}m</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .roadmap {
      padding: 20px;
    }

    h1 {
      color: #2c3e50;
      margin-bottom: 10px;
    }

    .subtitle {
      color: #7f8c8d;
      margin-bottom: 30px;
    }

    .roadmap-container {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      gap: 20px;
    }

    .roadmap-item {
      background: white;
      border: 2px solid #ecf0f1;
      border-radius: 8px;
      padding: 20px;
      transition: all 0.3s ease;
      cursor: pointer;
    }

    .roadmap-item:hover {
      border-color: #3498db;
      box-shadow: 0 4px 12px rgba(52, 152, 219, 0.15);
    }

    .roadmap-item.completed {
      background-color: #f0fdf4;
      border-color: #10b981;
    }

    .day-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 15px;
      border-bottom: 2px solid #ecf0f1;
      padding-bottom: 10px;
    }

    .day-header h3 {
      margin: 0;
      color: #2c3e50;
    }

    .status {
      background-color: #10b981;
      color: white;
      padding: 4px 8px;
      border-radius: 4px;
      font-size: 12px;
      font-weight: bold;
    }

    .topics {
      margin-top: 10px;
    }

    .topic {
      margin-bottom: 10px;
      padding: 8px;
      background-color: #f8f9fa;
      border-radius: 4px;
    }

    .topic p {
      margin: 0 0 8px 0;
      font-weight: 500;
      color: #2c3e50;
    }

    .level, .duration {
      display: inline-block;
      font-size: 12px;
      padding: 4px 8px;
      background-color: #e3f2fd;
      color: #1976d2;
      border-radius: 4px;
      margin-right: 8px;
    }

    .duration {
      background-color: #fff3e0;
      color: #f57c00;
    }
  `]
})
export class RoadmapComponent implements OnInit {
  roadmap$ = this.roadmapService.getRoadmap();

  constructor(private roadmapService: RoadmapService) {}

  ngOnInit(): void {
    // Component initialization
  }
}
