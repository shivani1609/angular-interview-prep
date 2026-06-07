# File Structure Documentation

This document explains the complete file structure of the Angular Interview Prep Platform.

## Root Level Files

```
angular-interview-prep/
├── src/                      # Source code
├── dist/                     # Production build output (generated)
├── node_modules/            # NPM dependencies (generated)
├── angular.json             # Angular CLI configuration
├── tsconfig.json            # TypeScript base configuration
├── tsconfig.app.json        # TypeScript app-specific config
├── tsconfig.spec.json       # TypeScript test configuration
├── package.json             # NPM dependencies and scripts
├── package-lock.json        # Locked dependency versions
├── README.md                # Project documentation
├── DEVELOPMENT.md           # Development guide
├── CONTRIBUTING.md          # Contribution guidelines
├── LICENSE                  # MIT License
├── .gitignore               # Git ignore rules
├── .editorconfig            # Editor configuration
├── .prettierrc               # Prettier code formatting
├── .eslintrc.json           # ESLint configuration
└── karma.conf.js            # Karma test runner config (if added)
```

## Source Structure (src/)

### Core Module
```
src/core/
├── services/
│   ├── api.service.ts          # HTTP client service
│   ├── api.service.spec.ts     # API service tests
│   ├── auth.service.ts         # Authentication service
│   ├── auth.service.spec.ts    # Auth service tests
│   ├── roadmap.service.ts      # Roadmap & topics service
│   ├── roadmap.service.spec.ts # Roadmap service tests
│   ├── ai.service.ts           # AI integration service
│   ├── ai.service.spec.ts      # AI service tests
│   ├── progress.service.ts     # User progress service
│   └── progress.service.spec.ts # Progress service tests
├── interceptors/              # HTTP interceptors (planned)
│   ├── auth.interceptor.ts
│   ├── error.interceptor.ts
│   └── loading.interceptor.ts
├── guards/                    # Route guards (planned)
│   └── auth.guard.ts
└── models/                    # Shared data models
    └── common.models.ts
```

### Shared Module
```
src/shared/
├── components/
│   ├── sidebar/
│   │   ├── sidebar.component.ts
│   │   ├── sidebar.component.spec.ts
│   │   └── sidebar.component.scss
│   ├── header/
│   │   ├── header.component.ts
│   │   ├── header.component.spec.ts
│   │   └── header.component.scss
│   ├── loading-spinner/       # To be added
│   │   ├── loading-spinner.component.ts
│   │   ├── loading-spinner.component.spec.ts
│   │   └── loading-spinner.component.scss
│   ├── footer/                # To be added
│   └── card/                  # To be added
├── directives/                # To be added
│   ├── highlight.directive.ts
│   ├── auto-focus.directive.ts
│   └── debounce.directive.ts
├── pipes/                     # To be added
│   ├── duration.pipe.ts
│   ├── highlight.pipe.ts
│   └── truncate.pipe.ts
└── models/
    └── shared.models.ts
```

### Features Modules

Each feature module follows the same pattern:

```
src/features/dashboard/
├── dashboard.component.ts          # Main component
├── dashboard.component.spec.ts     # Component tests
├── dashboard.component.scss        # Component styles
├── models/                         # Feature-specific models
│   └── dashboard.models.ts
└── services/                       # Feature-specific services
    └── dashboard.service.ts        # (if needed)

src/features/roadmap/
├── roadmap.component.ts
├── roadmap.component.spec.ts
├── roadmap.component.scss
└── models/
    └── roadmap.models.ts

src/features/topic-detail/
├── topic-detail.component.ts
├── topic-detail.component.spec.ts
├── topic-detail.component.scss
└── models/
    └── topic.models.ts

src/features/playground/
├── playground.component.ts
├── playground.component.spec.ts
├── playground.component.scss
├── services/
│   ├── code-execution.service.ts
│   └── code-execution.service.spec.ts
└── models/
    └── playground.models.ts

src/features/assignments/
├── assignments.component.ts
├── assignments.component.spec.ts
├── assignments.component.scss
├── services/
│   ├── assignments.service.ts
│   └── assignments.service.spec.ts
└── models/
    └── assignments.models.ts

src/features/interview-questions/
├── interview-questions.component.ts
├── interview-questions.component.spec.ts
├── interview-questions.component.scss
├── services/
│   ├── questions.service.ts
│   └── questions.service.spec.ts
└── models/
    └── question.models.ts

src/features/company-track/
├── company-track.component.ts
├── company-track.component.spec.ts
├── company-track.component.scss
├── services/
│   ├── company-track.service.ts
│   └── company-track.service.spec.ts
└── models/
    └── company.models.ts

src/features/mock-interview/
├── mock-interview.component.ts
├── mock-interview.component.spec.ts
├── mock-interview.component.scss
├── services/
│   ├── mock-interview.service.ts
│   └── mock-interview.service.spec.ts
└── models/
    └── mock-interview.models.ts

src/features/notes/
├── notes.component.ts
├── notes.component.spec.ts
├── notes.component.scss
├── services/
│   ├── notes.service.ts
│   └── notes.service.spec.ts
└── models/
    └── notes.models.ts

src/features/progress/
├── progress.component.ts
├── progress.component.spec.ts
├── progress.component.scss
└── models/
    └── progress.models.ts

src/features/system-design/
├── system-design.component.ts
├── system-design.component.spec.ts
├── system-design.component.scss
├── services/
│   ├── system-design.service.ts
│   └── system-design.service.spec.ts
└── models/
    └── system-design.models.ts
```

### App Module
```
src/app/
├── app.component.ts           # Root component
├── app.component.spec.ts      # Root component tests
├── app.routes.ts              # Application routing
└── app.config.ts              # Application configuration (optional)
```

### Configuration & Assets
```
src/
├── environments/
│   ├── environment.ts         # Development environment
│   └── environment.prod.ts    # Production environment
├── assets/                    # Static assets
│   ├── images/
│   ├── icons/
│   ├── fonts/
│   └── data/
├── styles.scss                # Global styles
├── index.html                 # HTML entry point
└── main.ts                    # Application bootstrap
```

## Naming Conventions

### Components
```
ComponentNameComponent
my-component.component.ts
my-component.component.html
my-component.component.spec.ts
my-component.component.scss
```

### Services
```
MyFeatureService
my-feature.service.ts
my-feature.service.spec.ts
```

### Models/Interfaces
```
interface MyModel { }
type MyType = string | number;
```

### Variables & Functions
```
camelCase for variables and functions
UPPER_CASE for constants
```

## Key Files Explanation

### `angular.json`
Angular CLI configuration including:
- Build settings
- Dev server configuration
- Test runner setup
- Production optimization rules

### `tsconfig.json`
TypeScript compiler options:
- Target ES version
- Module system
- Strict type checking
- Path aliases

### `package.json`
NPM configuration with:
- Project metadata
- Dependencies
- Scripts (build, test, etc.)
- Development dependencies

### `main.ts`
Application entry point:
- Bootstrap root component
- Configure providers
- Set up global services

### `app.routes.ts`
Application routing configuration:
- Route definitions
- Lazy-loaded modules
- Route guards (planned)

## Build Output

### `dist/angular-interview-prep/`
Production build output contains:
- Bundled and minified code
- Optimized assets
- Source maps (optional)
- index.html with scripts loaded

## Development Workflow Files

### `.gitignore`
Files and directories excluded from Git:
- `node_modules/`
- `dist/`
- `.angular/`
- IDE files

### `.editorconfig`
Editor settings for consistency:
- Indentation (2 spaces)
- Line endings (LF)
- Character encoding (UTF-8)

### `.prettierrc`
Code formatting rules:
- Print width
- Tab width
- Quote style
- Semicolon usage

### `.eslintrc.json`
Linting configuration:
- ESLint rules
- Parser options
- Environment settings

## Adding New Files

When adding new features, follow the existing structure:

1. **Component files**: Follow naming convention
2. **Test files**: One `.spec.ts` per component/service
3. **Style files**: One `.scss` per component
4. **Models**: Group related interfaces in `models/` directory
5. **Services**: Keep shared services in `core/services/`, feature-specific in `features/feature-name/services/`

## Important: Do Not Modify

- `node_modules/` - Generated by npm
- `dist/` - Generated by build process
- `.angular/` - Generated by Angular CLI
- `package-lock.json` - Should not be manually edited

---

For more information, see [DEVELOPMENT.md](DEVELOPMENT.md)
