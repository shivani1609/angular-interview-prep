import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface Topic {
  id: string;
  title: string;
  description: string;
  level: string;
  duration: number; // in minutes
  subtopics: string[];
}

export interface Roadmap {
  id: string;
  day: number;
  topics: Topic[];
  completed: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class RoadmapService {
  private roadmap$ = new BehaviorSubject<Roadmap[]>([]);

  constructor() {
    this.loadRoadmap();
  }

  private loadRoadmap(): void {
    // Mock 30-day roadmap
    const mockRoadmap: Roadmap[] = Array.from({ length: 30 }, (_, i) => ({
      id: `day-${i + 1}`,
      day: i + 1,
      topics: this.generateTopicsForDay(i + 1),
      completed: false
    }));
    this.roadmap$.next(mockRoadmap);
  }

  private generateTopicsForDay(day: number): Topic[] {
    const topicsList = [
      { title: 'TypeScript Basics', duration: 60 },
      { title: 'Angular Components', duration: 90 },
      { title: 'RxJS Observables', duration: 120 },
      { title: 'Angular Services', duration: 75 },
      { title: 'Routing & Navigation', duration: 60 }
    ];

    return [topicsList[(day - 1) % topicsList.length]].map((t, idx) => ({
      id: `topic-${day}-${idx}`,
      title: t.title,
      description: `Learn about ${t.title}`,
      level: day <= 10 ? 'beginner' : day <= 20 ? 'intermediate' : 'advanced',
      duration: t.duration,
      subtopics: []
    }));
  }

  getRoadmap(): Observable<Roadmap[]> {
    return this.roadmap$.asObservable();
  }

  getRoadmapDay(day: number): Observable<Roadmap | undefined> {
    return new Observable(observer => {
      this.roadmap$.subscribe(roadmap => {
        observer.next(roadmap.find(r => r.day === day));
        observer.complete();
      });
    });
  }

  markDayAsComplete(day: number): void {
    const currentRoadmap = this.roadmap$.value;
    const dayIndex = currentRoadmap.findIndex(r => r.day === day);
    if (dayIndex !== -1) {
      currentRoadmap[dayIndex].completed = true;
      this.roadmap$.next([...currentRoadmap]);
    }
  }
}
