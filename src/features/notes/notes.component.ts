import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-notes',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="notes">
      <h1>My Notes</h1>
      <p class="subtitle">Create and organize your study notes</p>
      
      <div class="notes-container">
        <div class="notes-sidebar">
          <button class="new-note-btn">+ New Note</button>
          <div class="notes-list">
            <div class="note-item" *ngFor="let note of notes">
              <h4>{{ note.title }}</h4>
              <p>{{ note.preview }}</p>
            </div>
          </div>
        </div>
        
        <div class="notes-editor">
          <input type="text" placeholder="Note Title" class="note-title">
          <textarea placeholder="Start typing your notes..." class="note-content"></textarea>
          <button class="save-btn">Save Note</button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .notes {
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

    .notes-container {
      display: grid;
      grid-template-columns: 250px 1fr;
      gap: 20px;
      height: 600px;
    }

    .notes-sidebar {
      background: white;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    .new-note-btn {
      width: 100%;
      padding: 15px;
      background-color: #3498db;
      color: white;
      border: none;
      cursor: pointer;
      font-weight: bold;
      transition: background-color 0.3s ease;
    }

    .new-note-btn:hover {
      background-color: #2980b9;
    }

    .notes-list {
      padding: 10px;
      overflow-y: auto;
      max-height: calc(100% - 55px);
    }

    .note-item {
      padding: 15px;
      border-bottom: 1px solid #ecf0f1;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }

    .note-item:hover {
      background-color: #f8f9fa;
    }

    .note-item h4 {
      margin: 0 0 8px 0;
      color: #2c3e50;
    }

    .note-item p {
      margin: 0;
      color: #7f8c8d;
      font-size: 13px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .notes-editor {
      background: white;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      display: flex;
      flex-direction: column;
    }

    .note-title {
      padding: 10px;
      border: 1px solid #ecf0f1;
      border-radius: 4px;
      font-size: 16px;
      font-weight: bold;
      margin-bottom: 10px;
    }

    .note-content {
      flex: 1;
      padding: 10px;
      border: 1px solid #ecf0f1;
      border-radius: 4px;
      font-family: 'Courier New', monospace;
      font-size: 14px;
      resize: none;
      margin-bottom: 10px;
    }

    .save-btn {
      padding: 10px 20px;
      background-color: #10b981;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-weight: bold;
      transition: background-color 0.3s ease;
    }

    .save-btn:hover {
      background-color: #059669;
    }
  `]
})
export class NotesComponent {
  notes = [
    {
      title: 'Angular Basics',
      preview: 'Components, Services, Dependency Injection...'
    },
    {
      title: 'RxJS Operators',
      preview: 'map, filter, reduce, switchMap...'
    },
    {
      title: 'TypeScript Advanced',
      preview: 'Generics, Utility types, Decorators...'
    }
  ];
}
