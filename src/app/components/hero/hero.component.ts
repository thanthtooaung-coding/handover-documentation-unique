import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  getStarted() {
    document.getElementById('learning')?.scrollIntoView({ behavior: 'smooth' });
  }

  learnMore() {
    document.getElementById('tasks')?.scrollIntoView({ behavior: 'smooth' });
  }
}
