import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-company-track',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="company-track">
      <h1>Company-Specific Track</h1>
      <p class="subtitle">Tailored preparation for specific tech companies</p>
      
      <div class="companies-grid">
        <div class="company-card" *ngFor="let company of companies">
          <div class="company-header">
            <h3>{{ company.name }}</h3>
            <span class="difficulty">{{ company.difficulty }}</span>
          </div>
          <p class="interview-style">Interview: {{ company.interviewType }}</p>
          <ul class="topics-list">
            <li *ngFor="let topic of company.focusAreas">{{ topic }}</li>
          </ul>
          <button class="start-track-btn">Start Track</button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .company-track {
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

    .companies-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 20px;
    }

    .company-card {
      background: white;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      transition: all 0.3s ease;
    }

    .company-card:hover {
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      transform: translateY(-2px);
    }

    .company-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 15px;
    }

    .company-header h3 {
      margin: 0;
      color: #2c3e50;
    }

    .difficulty {
      background-color: #fff3cd;
      color: #856404;
      padding: 4px 8px;
      border-radius: 4px;
      font-size: 12px;
      font-weight: bold;
    }

    .interview-style {
      color: #7f8c8d;
      margin: 10px 0;
      font-size: 14px;
    }

    .topics-list {
      list-style: none;
      padding: 0;
      margin: 15px 0;
      font-size: 14px;
    }

    .topics-list li {
      padding: 5px 0;
      color: #2c3e50;
      border-bottom: 1px solid #ecf0f1;
    }

    .topics-list li:before {
      content: '✓ ';
      color: #10b981;
      font-weight: bold;
    }

    .start-track-btn {
      width: 100%;
      padding: 10px;
      margin-top: 15px;
      background-color: #e74c3c;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }

    .start-track-btn:hover {
      background-color: #c0392b;
    }
  `]
})
export class CompanyTrackComponent {
  companies = [
    {
      name: 'Google',
      difficulty: 'Hard',
      interviewType: 'System Design + Coding',
      focusAreas: ['System Design', 'Algorithm Optimization', 'Scalability']
    },
    {
      name: 'Meta',
      difficulty: 'Hard',
      interviewType: 'React + System Design',
      focusAreas: ['React Performance', 'State Management', 'Component Architecture']
    },
    {
      name: 'Microsoft',
      difficulty: 'Medium',
      interviewType: 'Full-stack + Design',
      focusAreas: ['TypeScript', 'Angular', 'Cloud Architecture']
    },
    {
      name: 'Amazon',
      difficulty: 'Hard',
      interviewType: 'Behavioral + Technical',
      focusAreas: ['Leadership', 'Scalable Systems', 'AWS']
    },
    {
      name: 'Apple',
      difficulty: 'Hard',
      interviewType: 'iOS/macOS Frontend',
      focusAreas: ['Performance', 'UI/UX', 'Accessibility']
    },
    {
      name: 'Netflix',
      difficulty: 'Medium',
      interviewType: 'Full-stack + Design',
      focusAreas: ['Streaming Architecture', 'Performance', 'Analytics']
    }
  ];
}
