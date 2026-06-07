import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from '@environments/environment';

export interface AIExplanation {
  id: string;
  topic: string;
  explanation: string;
  codeExamples: string[];
  visualDiagram?: string;
}

@Injectable({
  providedIn: 'root'
})
export class AiService {
  constructor(private http: HttpClient) {}

  getExplanation(topic: string): Observable<AIExplanation> {
    // In production, this would call the AI service
    return this.http.post<AIExplanation>(`${environment.aiServiceUrl}/explain`, {
      topic
    });
  }

  generateCodeExample(topic: string, language: string = 'typescript'): Observable<string> {
    return this.http.post<string>(`${environment.aiServiceUrl}/code-example`, {
      topic,
      language
    });
  }

  answerQuestion(question: string): Observable<string> {
    return this.http.post<string>(`${environment.aiServiceUrl}/answer`, {
      question
    });
  }

  reviewCode(code: string, language: string = 'typescript'): Observable<string> {
    return this.http.post<string>(`${environment.aiServiceUrl}/review`, {
      code,
      language
    });
  }
}
