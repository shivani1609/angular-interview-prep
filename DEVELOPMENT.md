## Getting Started with Angular Interview Prep Platform

### Quick Start (5 minutes)

1. **Install dependencies**
```bash
npm install
```

2. **Start development server**
```bash
npm start
```

3. **Open in browser**
Navigate to `http://localhost:4200`

---

## Development Workflow

### Common Commands

```bash
# Start development server with live reload
npm start

# Build for production
npm run build:prod

# Run unit tests
npm test

# Run tests with code coverage
npm test:coverage

# Format code
npm run format

# Lint code
npm run lint
```

---

## Project Structure Quick Reference

- **`src/core/`** - Core services and business logic
- **`src/shared/`** - Shared components and utilities
- **`src/features/`** - Feature modules (dashboard, roadmap, etc.)
- **`src/app/`** - Root component and routing
- **`src/environments/`** - Environment-specific configuration

---

## Adding a New Feature

1. Create component in `src/features/my-feature/`
2. Add route in `src/app/app.routes.ts`
3. Create service if needed in `src/core/services/`
4. Import and use shared components from `src/shared/`

---

## Key Configuration Files

- **`angular.json`** - Angular project configuration
- **`tsconfig.json`** - TypeScript configuration
- **`package.json`** - Dependencies and scripts
- **`.prettierrc`** - Code formatting rules
- **`.editorconfig`** - Editor settings

---

## Architecture Overview

```
AppComponent (Root)
├── HeaderComponent
├── SidebarComponent
└── Main Content Area
    └── Route Components
        ├── DashboardComponent
        ├── RoadmapComponent
        ├── PlaygroundComponent
        └── ... (other features)
```

---

## Service Architecture

```
Components
    ↓
Services (Core)
    ├── ApiService (HTTP calls)
    ├── AuthService (User management)
    ├── RoadmapService (Content)
    ├── ProgressService (Analytics)
    └── AiService (AI features)
```

---

## Angular 20 Features Used

- ✅ Standalone Components
- ✅ Standalone Routing
- ✅ Signal-based reactivity (planned)
- ✅ Dependency Injection
- ✅ TypeScript Strict Mode
- ✅ RxJS Observables

---

## Debugging Tips

1. **Enable Chrome DevTools**
   - Right-click → Inspect
   - Open Angular DevTools extension

2. **Check Console**
   - F12 → Console tab
   - Look for TypeScript compilation errors

3. **Use Browser DevTools**
   - Network tab: Monitor API calls
   - Performance tab: Check load times
   - Storage tab: View local data

4. **Angular Debug Messages**
   - Set `ng.probe()` in console
   - Access component instance

---

## Performance Optimization

- Use OnPush change detection
- Implement virtual scrolling for large lists
- Lazy load feature modules
- Tree-shake unused code
- Minify and bundle optimization

---

## Deployment

### Build Production
```bash
npm run build:prod
```

Output will be in `dist/angular-interview-prep/`

### Deploy to Server
```bash
# Using Firebase
firebase deploy

# Using Netlify
netlify deploy --prod

# Using AWS S3 + CloudFront
aws s3 sync dist/ s3://your-bucket/
```

---

## Troubleshooting

### Port 4200 already in use
```bash
ng serve --port 4300
```

### Clear cache
```bash
npm run clean
rm -rf dist node_modules
npm install
```

### Update Angular CLI
```bash
npm install -g @angular/cli@latest
ng update @angular/cli @angular/core
```

---

## Resources

- [Angular Official Docs](https://angular.io)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [RxJS Documentation](https://rxjs.dev/)
- [MDN Web Docs](https://developer.mozilla.org/)

---

**Happy Coding! 🚀**
