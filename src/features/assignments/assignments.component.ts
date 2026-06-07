import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-assignments',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="assignments">
      <h1>Assignments</h1>
      <p class="subtitle">Curated coding assignments with automated evaluation</p>
      
      <div class="assignment-grid">
        <div class="assignment-card" *ngFor="let i of [1,2,3,4,5,6]">
          <div class="assignment-header">
            <h3>Assignment {{ i }}</h3>
            <span class="difficulty" [ngClass]="'difficulty-' + getDifficulty(i)">
              {{ getDifficulty(i) }}
            </span>
          </div>
          <p class="description">Build a {{ getAssignmentTitle(i) }}</p>
          <div class="assignment-meta">
            <span>45 minutes</span>
            <span>JavaScript</span>
          </div>
          <button class="start-btn">Start Assignment</button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .assignments {
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

    .assignment-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 20px;
    }

    .assignment-card {
      background: white;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      transition: all 0.3s ease;
    }

    .assignment-card:hover {
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      transform: translateY(-2px);
    }

    .assignment-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 15px;
    }

    .assignment-header h3 {
      margin: 0;
      color: #2c3e50;
    }

    .difficulty {
      padding: 4px 8px;
      border-radius: 4px;
      font-size: 12px;
      font-weight: bold;
      text-transform: uppercase;
    }

    .difficulty-easy {
      background-color: #d4edda;
      color: #155724;
    }

    .difficulty-medium {
      background-color: #fff3cd;
      color: #856404;
    }

    .difficulty-hard {
      background-color: #f8d7da;
      color: #721c24;
    }

    .description {
      color: #7f8c8d;
      margin: 10px 0;
      font-size: 14px;
    }

    .assignment-meta {
      display: flex;
      gap: 15px;
      margin: 15px 0;
      font-size: 13px;
      color: #95a5a6;
    }

    .start-btn {
      width: 100%;
      padding: 10px;
      background-color: #3498db;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }

    .start-btn:hover {
      background-color: #2980b9;
    }
  `]
})
export class AssignmentsComponent {
  getDifficulty(index: number): string {
    const difficulties = ['easy', 'easy', 'medium', 'medium', 'hard', 'hard'];
    return difficulties[index - 1];
  }

  getAssignmentTitle(index: number): string {
    const titles = [
      'TypeScript utility types',
      'Observable chains',
      'Angular service architecture',
      'RxJS operators composition',
      'Advanced state management',
      'Performance optimization'
    ];
    return titles[index - 1];
  }
}
