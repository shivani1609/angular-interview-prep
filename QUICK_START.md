# Project Setup & Quick Reference Guide

## ⚡ Quick Start (Copy & Paste)

```bash
# 1. Navigate to project
cd angular-interview-prep

# 2. Install dependencies
npm install

# 3. Start development server
npm start

# 4. Open browser
# http://localhost:4200
```

## 📋 Essential Commands

```bash
# Development
npm start                    # Start dev server on port 4200
npm start -- --port 4300   # Start on different port

# Building
npm run build              # Build for development
npm run build:prod         # Build for production

# Testing
npm test                   # Run tests in watch mode
npm test:coverage          # Run tests with coverage report

# Code Quality
npm run format             # Auto-format all code
npm run format:check       # Check if code needs formatting
npm run lint               # Lint TypeScript files

# Angular CLI
ng generate component name                 # Create component
ng generate service name                   # Create service
ng generate interface models/name          # Create interface
```

## 🗂️ Project Structure at a Glance

```
src/
├── core/          → Services (API, Auth, Progress, AI)
├── shared/        → Reusable components (Header, Sidebar)
├── features/      → 11 feature modules
│   ├── dashboard/
│   ├── roadmap/
│   ├── playground/
│   ├── interview-questions/
│   └── ... (7 more)
├── app/           → Root component & routing
├── environments/  → Configuration (dev/prod)
├── assets/        → Images, icons, fonts
└── styles.scss    → Global styles
```

## 🔧 Configuration Files

| File | Purpose | Location |
|------|---------|----------|
| `angular.json` | Angular CLI config | Root |
| `tsconfig.json` | TypeScript config | Root |
| `package.json` | Dependencies & scripts | Root |
| `.editorconfig` | Editor settings | Root |
| `.prettierrc` | Code formatting | Root |
| `.eslintrc.json` | Linting rules | Root |
| `environment.ts` | Dev settings | src/environments/ |
| `environment.prod.ts` | Prod settings | src/environments/ |

## 🎯 Development Workflow

### 1. Before You Start
```bash
git checkout -b feature/my-feature
npm install
npm start
```

### 2. Make Changes
- Edit components in `src/features/` or `src/shared/`
- Edit services in `src/core/services/`
- Styles go in component `.scss` files or global `styles.scss`

### 3. Format & Lint
```bash
npm run format
npm run lint
```

### 4. Test Your Changes
```bash
npm test
```

### 5. Commit & Push
```bash
git add .
git commit -m "feat: Add new feature"
git push origin feature/my-feature
```

## 📱 Feature Modules Explained

### Dashboard
- User progress overview
- Quick access to features
- Statistics display

### 30-Day Roadmap
- Day-by-day learning plan
- Topic management
- Progress tracking

### Code Playground
- TypeScript/JavaScript editor
- Code execution
- AI-powered review

### Interview Questions
- Q&A database
- Search & filter
- Category organization

### More Features
- Company tracks, mock interviews, notes, system design, assignments, progress analytics

## 🎨 Styling Guidelines

### Global Styles
```scss
// src/styles.scss
// Use for app-wide styles
// Colors, fonts, resets
```

### Component Styles
```scss
// my-component.component.scss
// Scoped to component
// Use standard CSS with SCSS features
```

### Common Colors
```scss
$primary: #3498db;      // Blue
$success: #10b981;      // Green
$danger: #e74c3c;       // Red
$warning: #f39c12;      // Orange
$secondary: #95a5a6;    // Gray
```

## 🚀 Deployment

### Build for Production
```bash
npm run build:prod
# Output: dist/angular-interview-prep/
```

### Deploy Options

**Firebase**
```bash
npm install -g firebase-tools
firebase init
firebase deploy
```

**Netlify**
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist/angular-interview-prep
```

**AWS S3**
```bash
aws s3 sync dist/ s3://your-bucket/
```

## 🐛 Troubleshooting

### Port 4200 in use?
```bash
ng serve --port 4300
# Or kill the process using port 4200
```

### Dependencies error?
```bash
rm -rf node_modules
npm install
```

### Build failing?
```bash
npm run clean  # If script exists
npm install
npm run build:prod
```

### Tests failing?
```bash
npm test -- --no-watch
npm test -- --browsers=Chrome
```

## 📚 Resources

- [Angular Docs](https://angular.io)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [RxJS Docs](https://rxjs.dev/)
- [Angular Material](https://material.angular.io)
- [MDN Web Docs](https://developer.mozilla.org/)

## 💡 Tips & Tricks

1. **Use Angular DevTools**
   - Install "Angular DevTools" extension
   - Inspect components in Chrome DevTools

2. **Debug in VS Code**
   - Set breakpoints in .ts files
   - Run debugger through VS Code

3. **Hot Module Replacement**
   - Changes auto-reload in browser
   - No need to refresh manually

4. **Use Snippets**
   - Angular snippets speed up development
   - Install "Angular Essentials" extension

5. **TypeScript Strict Mode**
   - Enabled by default
   - Catch errors early
   - Don't use `any` type

## 🔑 Key Services

### ApiService
```typescript
import { ApiService } from '@core/services/api.service';

constructor(private api: ApiService) {}

// Use it
this.api.get<Data>('/endpoint').subscribe(data => {
  // Handle data
});
```

### AuthService
```typescript
import { AuthService } from '@core/services/auth.service';

constructor(private auth: AuthService) {}

// Check authentication
this.auth.isAuthenticated().subscribe(isAuth => {
  // Handle auth state
});
```

## 📝 Adding a New Component

```bash
ng generate component features/my-new-feature/my-new-feature
```

Then update:
1. Add route in `src/app/app.routes.ts`
2. Add navigation link in `src/shared/components/sidebar/sidebar.component.ts`
3. Import necessary modules
4. Implement functionality

## 🔄 Component Template Example

```typescript
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-my-component',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container">
      <h1>{{ title }}</h1>
      <p *ngIf="items.length > 0">{{ items.length }} items</p>
    </div>
  `,
  styles: [`
    .container {
      padding: 20px;
    }
  `]
})
export class MyComponent implements OnInit {
  title = 'My Component';
  items: string[] = [];

  ngOnInit(): void {
    // Initialize component
  }
}
```

## 🎓 Best Practices

- ✅ Use standalone components
- ✅ Use TypeScript strict mode
- ✅ Use RxJS for async operations
- ✅ Implement OnDestroy for subscriptions
- ✅ Use async pipe in templates
- ✅ Keep components small & focused
- ✅ Use services for shared logic
- ✅ Write unit tests
- ✅ Add JSDoc comments
- ✅ Use meaningful variable names

## ⚠️ Avoid

- ❌ Using `any` type
- ❌ Direct DOM manipulation
- ❌ Unsubscribed observables
- ❌ Large components (>300 lines)
- ❌ Tight coupling
- ❌ Magic strings/numbers
- ❌ Console.log in production
- ❌ Missing error handling

---

**Need more help?** Read [DEVELOPMENT.md](DEVELOPMENT.md) or [STRUCTURE.md](STRUCTURE.md)
