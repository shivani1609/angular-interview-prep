import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-system-design',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="system-design">
      <h1>System Design Preparation</h1>
      <p class="subtitle">Learn architectural patterns and scalable system design</p>
      
      <div class="topics-grid">
        <div class="topic-card" *ngFor="let topic of systemDesignTopics">
          <h3>{{ topic.title }}</h3>
          <p class="description">{{ topic.description }}</p>
          <div class="subtopics">
            <span class="subtopic" *ngFor="let sub of topic.subtopics">{{ sub }}</span>
          </div>
          <button class="learn-btn">Learn More</button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .system-design {
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

    .topics-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 20px;
    }

    .topic-card {
      background: white;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      transition: all 0.3s ease;
    }

    .topic-card:hover {
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      transform: translateY(-2px);
    }

    .topic-card h3 {
      color: #2c3e50;
      margin: 0 0 10px 0;
    }

    .description {
      color: #7f8c8d;
      font-size: 14px;
      margin: 0 0 15px 0;
      line-height: 1.6;
    }

    .subtopics {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      margin-bottom: 15px;
    }

    .subtopic {
      background-color: #e8f4f8;
      color: #0369a1;
      padding: 4px 8px;
      border-radius: 4px;
      font-size: 12px;
    }

    .learn-btn {
      width: 100%;
      padding: 10px;
      background-color: #9b59b6;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }

    .learn-btn:hover {
      background-color: #8e44ad;
    }
  `]
})
export class SystemDesignComponent {
  systemDesignTopics = [
    {
      title: 'Scalability & Load Balancing',
      description: 'Design systems that can handle millions of concurrent users',
      subtopics: ['Horizontal Scaling', 'Load Balancing', 'Caching']
    },
    {
      title: 'Database Design',
      description: 'Master SQL, NoSQL, and distributed databases',
      subtopics: ['Sharding', 'Replication', 'ACID vs BASE']
    },
    {
      title: 'Microservices Architecture',
      description: 'Build scalable and maintainable microservices',
      subtopics: ['Service Discovery', 'API Gateway', 'Message Queues']
    },
    {
      title: 'Real-time Systems',
      description: 'Design systems with real-time data processing',
      subtopics: ['WebSockets', 'Event Streaming', 'Pub/Sub']
    },
    {
      title: 'Security & Performance',
      description: 'Implement security best practices and optimize performance',
      subtopics: ['Authentication', 'CDN', 'Rate Limiting']
    },
    {
      title: 'Cloud Architecture',
      description: 'Deploy and manage applications on cloud platforms',
      subtopics: ['AWS', 'Docker', 'Kubernetes']
    }
  ];
}
