import { Component } from "@angular/core"
import { CommonModule } from "@angular/common"
import { Router } from "@angular/router"

@Component({
  selector: "app-learning-section",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./learning-section.component.html",
  styleUrls: ["./learning-section.component.css"],
})
export class LearningSection {
  constructor(private router: Router) {}

  lessons = [
    {
      title: "Introduction",
      description: "Project overview and objectives",
      route: "introduction",
    },
    {
      title: "နည်းပညာများ",
      description: "အသုံးပြုထားသော နည်းပညာများနှင့် ကိရိယာများ",
      route: "technologies",
    },
    {
      title: "လုပ်ငန်းစဉ်များ",
      description: "အဓိက လုပ်ငန်းစဉ်များနှင့် လုပ်ထုံးလုပ်နည်းများ",
      route: "processes",
    },
  ]

  navigateToDetail(route: string) {
    this.router.navigate(["/detail", route])
  }
}
