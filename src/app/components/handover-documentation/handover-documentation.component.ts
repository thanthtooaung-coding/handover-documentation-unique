import { Component } from "@angular/core"
import { CommonModule } from "@angular/common"

@Component({
  selector: "app-handover-documentation",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./handover-documentation.component.html",
  styleUrls: ["./handover-documentation.component.css"],
})
export class HandoverDocumentationComponent {
  currentDate = new Date().toLocaleDateString("my-MM", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  projectInfo = {
    name: "Handover Documentation Angular",
    version: "1.0.0",
    startDate: "2024-01-01",
    handoverDate: this.currentDate,
    developer: "Development Team",
    recipient: "New Team Member",
  }

  technicalStack = [
    { name: "Angular", version: "17+", description: "Frontend Framework" },
    { name: "TypeScript", version: "5.0+", description: "Programming Language" },
    { name: "CSS3", version: "Latest", description: "Styling" },
    { name: "Node.js", version: "18+", description: "Runtime Environment" },
  ]

  setupSteps = [
    {
      step: 1,
      title: "Repository Clone လုပ်ခြင်း",
      command: "git clone [repository-url]",
      description: "Project repository ကို local machine သို့ clone လုပ်ပါ",
    },
    {
      step: 2,
      title: "Dependencies Install လုပ်ခြင်း",
      command: "npm install",
      description: "လိုအပ်သော packages များကို install လုပ်ပါ",
    },
    {
      step: 3,
      title: "Development Server စတင်ခြင်း",
      command: "ng serve",
      description: "Local development server ကို port 4200 တွင် စတင်ပါ",
    },
    {
      step: 4,
      title: "Production Build",
      command: "ng build --prod",
      description: "Production အတွက် optimized build ပြုလုပ်ပါ",
    },
  ]

  importantFiles = [
    {
      path: "src/app/app.component.ts",
      description: "Main application component နှင့် routing configuration",
    },
    {
      path: "src/app/components/",
      description: "အားလုံးသော UI components များ",
    },
    {
      path: "src/styles.css",
      description: "Global styles နှင့် Myanmar font configuration",
    },
    {
      path: "angular.json",
      description: "Angular project configuration",
    },
    {
      path: "package.json",
      description: "Project dependencies နှင့် scripts",
    },
  ]

  knownIssues = [
    {
      issue: "Myanmar Font Display",
      solution: "Myanmar3 font ကို system တွင် install လုပ်ရန် လိုအပ်သည်",
      priority: "High",
    },
    {
      issue: "Routing Navigation",
      solution: "Browser refresh လုပ်ပါက 404 error ဖြစ်နိုင်သည်။ ng serve ဖြင့် development mode တွင် အသုံးပြုပါ",
      priority: "Medium",
    },
  ]
}
