import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface User {
  id: string;
  name: string;
  email: string;
  level: 'beginner' | 'intermediate' | 'advanced';
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private user$ = new BehaviorSubject<User | null>(null);
  private isAuthenticated$ = new BehaviorSubject<boolean>(false);

  constructor() {
    this.loadUserFromStorage();
  }

  private loadUserFromStorage(): void {
    const user = localStorage.getItem('currentUser');
    if (user) {
      this.user$.next(JSON.parse(user));
      this.isAuthenticated$.next(true);
    }
  }

  login(email: string, password: string): Observable<User> {
    // Implementation would connect to actual API
    return new Observable(observer => {
      const mockUser: User = {
        id: '1',
        name: 'User',
        email: email,
        level: 'intermediate'
      };
      this.user$.next(mockUser);
      this.isAuthenticated$.next(true);
      localStorage.setItem('currentUser', JSON.stringify(mockUser));
      observer.next(mockUser);
      observer.complete();
    });
  }

  logout(): void {
    this.user$.next(null);
    this.isAuthenticated$.next(false);
    localStorage.removeItem('currentUser');
  }

  getCurrentUser(): Observable<User | null> {
    return this.user$.asObservable();
  }

  isAuthenticated(): Observable<boolean> {
    return this.isAuthenticated$.asObservable();
  }
}
