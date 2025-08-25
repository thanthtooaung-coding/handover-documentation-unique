import { Component } from "@angular/core"
import { CommonModule } from "@angular/common"
import { HeroComponent } from "../hero/hero.component"
import { LearningSection } from "../learning-section/learning-section.component"

@Component({
  selector: "app-home",
  standalone: true,
  imports: [CommonModule, HeroComponent, LearningSection],
  template: `
    <app-hero></app-hero>
    <app-learning-section></app-learning-section>
  `,
})
export class HomeComponent {}
