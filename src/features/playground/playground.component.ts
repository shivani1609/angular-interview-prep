import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-playground',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="playground">
      <h1>Code Playground</h1>
      <p class="subtitle">Interactive coding environment with AI-assisted code review</p>
      
      <div class="editor-container">
        <div class="editor-panel">
          <h3>Code Editor</h3>
          <textarea 
            [(ngModel)]="code"
            placeholder="Write your code here..."
            class="code-editor">
          </textarea>
          <button (click)="runCode()" class="run-btn">Run Code</button>
          <button (click)="reviewCode()" class="review-btn">Get AI Review</button>
        </div>
        
        <div class="output-panel">
          <h3>Output</h3>
          <div class="output">{{ output || 'Run code to see output...' }}</div>
        </div>
      </div>

      <div *ngIf="aiReview" class="ai-review">
        <h3>AI Code Review</h3>
        <p>{{ aiReview }}</p>
      </div>
    </div>
  `,
  styles: [`
    .playground {
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

    .editor-container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
      margin-bottom: 20px;
    }

    .editor-panel, .output-panel {
      background: white;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    h3 {
      color: #2c3e50;
      margin-top: 0;
    }

    .code-editor {
      width: 100%;
      height: 300px;
      padding: 10px;
      border: 1px solid #ecf0f1;
      border-radius: 4px;
      font-family: 'Courier New', monospace;
      font-size: 14px;
      resize: vertical;
    }

    .output {
      min-height: 300px;
      padding: 10px;
      background-color: #f8f9fa;
      border-radius: 4px;
      font-family: 'Courier New', monospace;
      font-size: 14px;
      white-space: pre-wrap;
      color: #2c3e50;
    }

    .run-btn, .review-btn {
      padding: 10px 20px;
      margin-top: 10px;
      margin-right: 10px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-size: 14px;
      transition: all 0.3s ease;
    }

    .run-btn {
      background-color: #3498db;
      color: white;
    }

    .run-btn:hover {
      background-color: #2980b9;
    }

    .review-btn {
      background-color: #9b59b6;
      color: white;
    }

    .review-btn:hover {
      background-color: #8e44ad;
    }

    .ai-review {
      background: white;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      border-left: 4px solid #9b59b6;
    }

    .ai-review h3 {
      color: #9b59b6;
      margin-top: 0;
    }

    @media (max-width: 768px) {
      .editor-container {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class PlaygroundComponent implements OnInit {
  code = '// Write your TypeScript code here\nconst greeting: string = "Hello, World!";\nconsole.log(greeting);';
  output: string = '';
  aiReview: string = '';

  ngOnInit(): void {
    // Component initialization
  }

  runCode(): void {
    // Execute code logic
    this.output = 'Code executed successfully!';
  }

  reviewCode(): void {
    // Get AI review
    this.aiReview = 'Your code looks good! Consider adding proper error handling.';
  }
}
