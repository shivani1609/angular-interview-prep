import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mock-interview',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="mock-interview">
      <h1>Mock Interview</h1>
      <p class="subtitle">Full interview simulation with real-time feedback</p>
      
      <div class="interview-selector">
        <button *ngFor="let type of interviewTypes" 
                (click)="startInterview(type)"
                class="interview-type-btn">
          <h3>{{ type.name }}</h3>
          <p>{{ type.duration }} minutes</p>
          <span class="difficulty">{{ type.difficulty }}</span>
        </button>
      </div>

      <div *ngIf="interviewStarted" class="interview-container">
        <div class="interview-timer">
          <span>Time: {{ currentTime | number:'2.0-0' }}s</span>
        </div>
        <div class="interview-question">
          <h2>{{ currentQuestion }}</h2>
          <textarea placeholder="Type your answer here..." class="answer-box"></textarea>
          <div class="interview-controls">
            <button class="next-btn">Next Question</button>
            <button class="submit-btn">Submit Interview</button>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .mock-interview {
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

    .interview-selector {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 20px;
      margin-bottom: 30px;
    }

    .interview-type-btn {
      background: white;
      padding: 20px;
      border: 2px solid #ecf0f1;
      border-radius: 8px;
      cursor: pointer;
      transition: all 0.3s ease;
      text-align: left;
    }

    .interview-type-btn:hover {
      border-color: #3498db;
      box-shadow: 0 4px 12px rgba(52, 152, 219, 0.15);
    }

    .interview-type-btn h3 {
      margin: 0 0 10px 0;
      color: #2c3e50;
    }

    .interview-type-btn p {
      margin: 0 0 10px 0;
      color: #7f8c8d;
      font-size: 14px;
    }

    .difficulty {
      display: inline-block;
      background-color: #fff3cd;
      color: #856404;
      padding: 4px 8px;
      border-radius: 4px;
      font-size: 12px;
      font-weight: bold;
    }

    .interview-container {
      background: white;
      padding: 30px;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    .interview-timer {
      display: flex;
      justify-content: flex-end;
      margin-bottom: 20px;
      padding-bottom: 20px;
      border-bottom: 2px solid #ecf0f1;
    }

    .interview-timer span {
      font-size: 16px;
      font-weight: bold;
      color: #e74c3c;
    }

    .interview-question h2 {
      color: #2c3e50;
      margin-bottom: 20px;
    }

    .answer-box {
      width: 100%;
      min-height: 250px;
      padding: 15px;
      border: 1px solid #ecf0f1;
      border-radius: 4px;
      font-family: 'Courier New', monospace;
      font-size: 14px;
      resize: vertical;
    }

    .interview-controls {
      display: flex;
      gap: 15px;
      margin-top: 20px;
    }

    .next-btn, .submit-btn {
      padding: 10px 20px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-weight: bold;
      transition: background-color 0.3s ease;
    }

    .next-btn {
      background-color: #3498db;
      color: white;
    }

    .next-btn:hover {
      background-color: #2980b9;
    }

    .submit-btn {
      background-color: #10b981;
      color: white;
    }

    .submit-btn:hover {
      background-color: #059669;
    }
  `]
})
export class MockInterviewComponent {
  interviewTypes = [
    { name: 'Technical Round - 45 min', duration: 45, difficulty: 'Medium' },
    { name: 'System Design - 60 min', duration: 60, difficulty: 'Hard' },
    { name: 'Behavioral - 30 min', duration: 30, difficulty: 'Easy' },
    { name: 'Full Stack - 90 min', duration: 90, difficulty: 'Hard' }
  ];

  interviewStarted = false;
  currentQuestion = '';
  currentTime = 0;

  startInterview(type: any): void {
    this.interviewStarted = true;
    this.currentQuestion = 'Explain the concept of dependency injection in Angular...';
  }
}
