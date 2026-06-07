# Contributing to Frontend Architect Interview Prep Platform

Thank you for your interest in contributing! This document provides guidelines and instructions for contributing.

## Code of Conduct

Be respectful, inclusive, and professional in all interactions.

## Getting Started

### Prerequisites
- Node.js v20+
- npm v10+
- Git

### Setup Development Environment

1. **Fork the repository**
```bash
git clone https://github.com/yourusername/angular-interview-prep.git
cd angular-interview-prep
```

2. **Create a feature branch**
```bash
git checkout -b feature/your-feature-name
```

3. **Install dependencies**
```bash
npm install
```

4. **Start development server**
```bash
npm start
```

## Development Workflow

### Before You Start

1. Check existing issues to avoid duplicate work
2. Discuss major changes in an issue first
3. Reference the issue number in your PR

### Making Changes

1. **Write meaningful code**
   - Follow Angular style guide
   - Use TypeScript strict mode
   - Add JSDoc comments for complex functions

2. **Format your code**
```bash
npm run format
```

3. **Check for errors**
```bash
npm run lint
```

4. **Test your changes**
```bash
npm test
```

### Commit Guidelines

Write clear, descriptive commit messages:

```
feat: Add new feature description
fix: Fix bug description
docs: Documentation updates
style: Code style changes (formatting, etc.)
refactor: Code refactoring without behavior change
test: Add or update tests
chore: Build process, dependencies, tools
```

### Pull Request Process

1. **Update your branch with latest main**
```bash
git fetch origin
git rebase origin/main
```

2. **Push your branch**
```bash
git push origin feature/your-feature-name
```

3. **Create Pull Request**
   - Provide clear description
   - Reference related issues
   - Include screenshots for UI changes
   - Ensure all checks pass

4. **Address feedback**
   - Respond to review comments
   - Make requested changes
   - Push updates (don't force push)

## Types of Contributions

### Bug Reports
- Use GitHub issues
- Provide reproduction steps
- Include expected vs actual behavior
- Add screenshots if applicable

### Feature Requests
- Describe the feature clearly
- Explain the use case
- Provide examples if possible
- Consider impact on performance

### Documentation
- Fix typos and unclear sections
- Add examples and tutorials
- Improve API documentation
- Update README as needed

### Code Improvements
- Refactor for clarity
- Improve performance
- Add tests
- Remove technical debt

## Code Standards

### Angular/TypeScript
```typescript
// Use strict types
const items: string[] = [];

// Use meaningful names
function calculateProgress(completed: number, total: number): number {
  return (completed / total) * 100;
}

// Add JSDoc comments
/**
 * Formats a number as percentage
 * @param value - The value to format
 * @returns Formatted percentage string
 */
function formatAsPercentage(value: number): string {
  return `${value.toFixed(2)}%`;
}
```

### Components
```typescript
@Component({
  selector: 'app-my-component',
  standalone: true,
  imports: [CommonModule],
  template: `...`,
  styles: [`...`]
})
export class MyComponent {
  // Implementation
}
```

### Testing
```typescript
describe('MyComponent', () => {
  it('should create', () => {
    // Test implementation
  });

  it('should calculate correct progress', () => {
    // Test implementation
  });
});
```

## File Structure

When adding new features:

```
src/features/my-feature/
├── my-feature.component.ts
├── my-feature.component.spec.ts
├── services/
│   └── my-feature.service.ts
└── models/
    └── my-feature.model.ts
```

## Performance Considerations

- Lazy load feature modules
- Use OnPush change detection
- Implement virtual scrolling for large lists
- Optimize bundle size
- Avoid memory leaks in subscriptions

## Testing Requirements

- Write tests for new features
- Aim for 80%+ code coverage
- Test edge cases
- Test error handling

## Documentation Requirements

- Update README if adding features
- Add inline comments for complex logic
- Document public APIs
- Include usage examples

## Common Issues & Solutions

### Port 4200 in use
```bash
ng serve --port 4300
```

### Dependency conflicts
```bash
npm install
npm audit fix
```

### Build errors
```bash
npm run clean
npm install
npm start
```

## Review Process

Maintainers will:
- Review code quality
- Check for test coverage
- Verify documentation
- Test functionality
- Provide constructive feedback

## Approval & Merge

PRs will be merged when:
- ✅ Code review approved
- ✅ All tests passing
- ✅ No conflicts with main branch
- ✅ Documentation updated

## Questions or Need Help?

- 📖 Read DEVELOPMENT.md for setup help
- 💬 Join community discussions
- 📧 Contact maintainers

---

Thank you for contributing! Your efforts help make this platform better for everyone. 🙏
