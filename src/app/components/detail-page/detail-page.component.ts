import { Component, type OnInit } from "@angular/core"
import { CommonModule } from "@angular/common"
import { ActivatedRoute, Router, RouterModule } from "@angular/router"

@Component({
  selector: "app-detail-page",
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: "./detail-page.component.html",
  styleUrls: ["./detail-page.component.css"],
})
export class DetailPageComponent implements OnInit {
  currentSection = ""

  sidebarItems = [
    {
      title: "Project မိတ်ဆက်",
      route: "introduction",
      sections: [
        { title: "ခြုံငုံသုံးသပ်ချက်", id: "overview" },
        { title: "ရည်မှန်းချက်များ", id: "objectives" },
        { title: "အဓိကအင်္ဂါရပ်များ", id: "features" },
      ],
    },
    {
      title: "နည်းပညာများ",
      route: "technologies",
      sections: [
        { title: "Frontend နည်းပညာများ", id: "frontend" },
        { title: "Backend နည်းပညာများ", id: "backend" },
        { title: "ဒေတာဘေ့စ်", id: "database" },
        { title: "DevOps & Deployment", id: "devops" },
      ],
    },
    {
      title: "လုပ်ငန်းစဉ်များ",
      route: "processes",
      sections: [
        { title: "Development Workflow", id: "workflow" },
        { title: "Code Review လုပ်ငန်းစဉ်", id: "code-review" },
        { title: "Testing လုပ်ငန်းစဉ်", id: "testing" },
        { title: "Deployment လုပ်ငန်းစဉ်", id: "deployment" },
      ],
    },
  ]

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.currentSection = params["section"] || "introduction"
    })
  }

  navigateToSection(route: string) {
    this.router.navigate(["/detail", route])
  }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }
}
