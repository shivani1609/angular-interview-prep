import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-interview-questions',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="interview-questions">
      <h1>Interview Q&A Preparation</h1>
      <p class="subtitle">Comprehensive collection of frontend architecture interview questions</p>
      
      <div class="filter-section">
        <input type="text" [(ngModel)]="searchQuery" placeholder="Search questions..." class="search-box">
        <select [(ngModel)]="selectedCategory" class="category-filter">
          <option>All Categories</option>
          <option>Angular</option>
          <option>TypeScript</option>
          <option>RxJS</option>
          <option>Performance</option>
          <option>Design Patterns</option>
        </select>
      </div>

      <div class="questions-grid">
        <div class="question-card" *ngFor="let q of filteredQuestions">
          <div class="question-header">
            <h3>{{ q.question }}</h3>
            <span class="category-tag">{{ q.category }}</span>
          </div>
          <p class="difficulty" [ngClass]="'difficulty-' + q.difficulty">
            {{ q.difficulty }}
          </p>
          <button (click)="toggleAnswer(q.id)" class="view-btn">
            {{ expandedQuestions.has(q.id) ? 'Hide' : 'View' }} Answer
          </button>
          <div *ngIf="expandedQuestions.has(q.id)" class="answer">
            <p>{{ q.answer }}</p>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .interview-questions {
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

    .filter-section {
      display: flex;
      gap: 15px;
      margin-bottom: 30px;
      flex-wrap: wrap;
    }

    .search-box, .category-filter {
      padding: 10px;
      border: 1px solid #ecf0f1;
      border-radius: 4px;
      font-size: 14px;
    }

    .search-box {
      flex: 1;
      min-width: 200px;
    }

    .category-filter {
      min-width: 150px;
    }

    .questions-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
      gap: 20px;
    }

    .question-card {
      background: white;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      transition: all 0.3s ease;
    }

    .question-card:hover {
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    }

    .question-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 15px;
      gap: 10px;
    }

    .question-header h3 {
      margin: 0;
      color: #2c3e50;
      font-size: 16px;
    }

    .category-tag {
      background-color: #e3f2fd;
      color: #1976d2;
      padding: 4px 8px;
      border-radius: 4px;
      font-size: 12px;
      white-space: nowrap;
    }

    .difficulty {
      display: inline-block;
      padding: 4px 8px;
      border-radius: 4px;
      font-size: 12px;
      font-weight: bold;
      margin-bottom: 15px;
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

    .view-btn {
      background-color: #3498db;
      color: white;
      border: none;
      padding: 8px 16px;
      border-radius: 4px;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }

    .view-btn:hover {
      background-color: #2980b9;
    }

    .answer {
      margin-top: 15px;
      padding: 15px;
      background-color: #f8f9fa;
      border-left: 3px solid #3498db;
      border-radius: 4px;
    }

    .answer p {
      margin: 0;
      color: #2c3e50;
      line-height: 1.6;
    }
  `]
})
export class InterviewQuestionsComponent implements OnInit {
  questions = [
    {
      id: 1,
      question: 'What is the difference between OnInit and ngOnInit?',
      category: 'Angular',
      difficulty: 'easy',
      answer: 'OnInit is an interface that defines the ngOnInit hook method, which Angular calls after the component is initialized.'
    },
    {
      id: 2,
      question: 'Explain the concept of dependency injection in Angular',
      category: 'Angular',
      difficulty: 'medium',
      answer: 'DI is a design pattern that Angular uses to manage the creation and injection of dependencies into components and services.'
    },
    {
      id: 3,
      question: 'What is a Subject in RxJS?',
      category: 'RxJS',
      difficulty: 'medium',
      answer: 'A Subject is a special Observable that acts as both an Observer and Observable, allowing multicasting to multiple subscribers.'
    }
  ];

  searchQuery: string = '';
  selectedCategory: string = 'All Categories';
  expandedQuestions = new Set<number>();

  filteredQuestions: any[] = [];

  ngOnInit(): void {
    this.updateFilteredQuestions();
  }

  updateFilteredQuestions(): void {
    this.filteredQuestions = this.questions.filter(q => {
      const matchesSearch = q.question.toLowerCase().includes(this.searchQuery.toLowerCase());
      const matchesCategory = this.selectedCategory === 'All Categories' || q.category === this.selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }

  toggleAnswer(id: number): void {
    if (this.expandedQuestions.has(id)) {
      this.expandedQuestions.delete(id);
    } else {
      this.expandedQuestions.add(id);
    }
  }
}
