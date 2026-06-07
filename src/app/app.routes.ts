import { Routes } from '@angular/router';

export const APP_ROUTES: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    loadComponent: () => import('@features/dashboard/dashboard.component').then(m => m.DashboardComponent)
  },
  {
    path: 'roadmap',
    loadComponent: () => import('@features/roadmap/roadmap.component').then(m => m.RoadmapComponent)
  },
  {
    path: 'topic/:id',
    loadComponent: () => import('@features/topic-detail/topic-detail.component').then(m => m.TopicDetailComponent)
  },
  {
    path: 'playground',
    loadComponent: () => import('@features/playground/playground.component').then(m => m.PlaygroundComponent)
  },
  {
    path: 'assignments',
    loadComponent: () => import('@features/assignments/assignments.component').then(m => m.AssignmentsComponent)
  },
  {
    path: 'interview-questions',
    loadComponent: () => import('@features/interview-questions/interview-questions.component').then(m => m.InterviewQuestionsComponent)
  },
  {
    path: 'company-track',
    loadComponent: () => import('@features/company-track/company-track.component').then(m => m.CompanyTrackComponent)
  },
  {
    path: 'mock-interview',
    loadComponent: () => import('@features/mock-interview/mock-interview.component').then(m => m.MockInterviewComponent)
  },
  {
    path: 'notes',
    loadComponent: () => import('@features/notes/notes.component').then(m => m.NotesComponent)
  },
  {
    path: 'progress',
    loadComponent: () => import('@features/progress/progress.component').then(m => m.ProgressComponent)
  },
  {
    path: 'system-design',
    loadComponent: () => import('@features/system-design/system-design.component').then(m => m.SystemDesignComponent)
  }
];
