// src/app/app.component.ts
import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterOutlet } from "@angular/router";
import { HeaderComponent } from "./components/header/header.component"; // Assuming you create this component
import { FooterComponent } from "./components/footer/footer.component"; // Assuming you create this component

@Component({
  selector: "app-root",
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, FooterComponent],
  template: `
    <app-header></app-header>
    <router-outlet></router-outlet>
    <app-footer></app-footer>
  `,
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "handover-documentation-angular";
}
