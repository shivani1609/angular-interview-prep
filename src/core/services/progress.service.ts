import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface ProgressData {
  userId: string;
  totalTopicsCompleted: number;
  totalHoursSpent: number;
  currentStreak: number;
  weakAreas: string[];
  strongAreas: string[];
}

@Injectable({
  providedIn: 'root'
})
export class ProgressService {
  private progress$ = new BehaviorSubject<ProgressData | null>(null);

  constructor() {
    this.loadProgress();
  }

  private loadProgress(): void {
    // Mock progress data
    const mockProgress: ProgressData = {
      userId: '1',
      totalTopicsCompleted: 5,
      totalHoursSpent: 12.5,
      currentStreak: 3,
      weakAreas: ['System Design', 'Advanced RxJS'],
      strongAreas: ['TypeScript Basics', 'Components']
    };
    this.progress$.next(mockProgress);
  }

  getProgress(): Observable<ProgressData | null> {
    return this.progress$.asObservable();
  }

  updateProgress(progress: Partial<ProgressData>): void {
    const current = this.progress$.value;
    if (current) {
      this.progress$.next({ ...current, ...progress });
    }
  }
}
