import { Component } from "@angular/core"
import { CommonModule } from "@angular/common"

@Component({
  selector: "app-remaining-tasks",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./remaining-tasks.component.html",
  styleUrls: ["./remaining-tasks.component.css"],
})
export class RemainingTasksComponent {
  currentDate = new Date().toLocaleDateString("my-MM", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  preHandoverTasks = [
    {
      task: "Repository Access စစ်ဆေးခြင်း",
      description: "GitHub repository သို့ access ရှိမရှိ စစ်ဆေးပြီး permissions များ သတ်မှတ်ပေးရန်",
      priority: "high",
      completed: false,
    },
    {
      task: "Development Environment Setup",
      description: "Node.js, Angular CLI နှင့် လိုအပ်သော tools များ install လုပ်ထားရန်",
      priority: "high",
      completed: false,
    },
    {
      task: "Myanmar Font Installation",
      description: "Myanmar3 font ကို system တွင် install လုပ်ထားရန်",
      priority: "medium",
      completed: false,
    },
    {
      task: "Project Documentation ပြင်ဆင်ခြင်း",
      description: "README.md နှင့် technical documentation များ update လုပ်ရန်",
      priority: "medium",
      completed: false,
    },
  ]

  duringHandoverTasks = [
    {
      task: "Project Architecture ရှင်းပြခြင်း",
      description: "Component structure, routing နှင့် data flow များကို အသေးစိတ် ရှင်းပြရန်",
      priority: "high",
      completed: false,
    },
    {
      task: "Code Walkthrough",
      description: "အဓိက components များ၊ services များနှင့် utilities များကို ပြသရန်",
      priority: "high",
      completed: false,
    },
    {
      task: "Development Workflow သင်ကြားပေးခြင်း",
      description: "Git workflow, testing procedures နှင့် deployment process များ သင်ကြားပေးရန်",
      priority: "high",
      completed: false,
    },
    {
      task: "Known Issues ဆွေးနွေးခြင်း",
      description: "လက်ရှိ bugs များ၊ limitations များနှင့် workarounds များ ဆွေးနွေးရန်",
      priority: "medium",
      completed: false,
    },
    {
      task: "Future Roadmap ပြောဆိုခြင်း",
      description: "Planned features များနှင့် improvement suggestions များ မျှဝေရန်",
      priority: "low",
      completed: false,
    },
  ]

  postHandoverTasks = [
    {
      task: "Independent Setup စစ်ဆေးခြင်း",
      description: "Project ကို လွတ်လပ်စွာ run လုပ်နိုင်မရှိ test လုပ်ရန်",
      priority: "high",
      completed: false,
    },
    {
      task: "First Feature Implementation",
      description: "သေးငယ်သော feature တစ်ခု implement လုပ်ကြည့်ရန်",
      priority: "medium",
      completed: false,
    },
    {
      task: "Testing နှင့် Quality Assurance",
      description: "Existing functionality များ test လုပ်ပြီး quality စစ်ဆေးရန်",
      priority: "medium",
      completed: false,
    },
    {
      task: "Documentation Updates",
      description: "လိုအပ်ပါက documentation များကို ထပ်မံ update လုပ်ရန်",
      priority: "low",
      completed: false,
    },
  ]

  criticalItems = [
    {
      item: "Database Connection",
      description: "လက်ရှိတွင် static data သုံးထားသည်။ အနာဂတ်တွင် database integration လိုအပ်မည်",
      action: "Database schema design နှင့် API endpoints planning လုပ်ရန်",
    },
    {
      item: "Authentication System",
      description: "User authentication မရှိသေးပါ။ Multi-user support အတွက် လိုအပ်မည်",
      action: "Authentication strategy ရွေးချယ်ပြီး implement လုပ်ရန်",
    },
    {
      item: "Data Persistence",
      description: "လက်ရှိတွင် data များ browser refresh လုပ်ပါက ပျောက်သွားသည်",
      action: "LocalStorage သို့မဟုတ် backend storage implement လုပ်ရန်",
    },
    {
      item: "Mobile Responsiveness",
      description: "Mobile devices များတွင် အချို့ sections များ optimize မလုပ်ရသေးပါ",
      action: "Mobile UI/UX ကို ပိုမို optimize လုပ်ရန်",
    },
  ]

  futureEnhancements = [
    {
      feature: "Search Functionality",
      description: "Documentation များ search လုပ်နိုင်သော feature",
      priority: "medium",
    },
    {
      feature: "Export to PDF",
      description: "Handover documents များကို PDF format ဖြင့် export လုပ်နိုင်ခြင်း",
      priority: "low",
    },
    {
      feature: "Multi-language Support",
      description: "English နှင့် Myanmar အပြင် အခြား languages များ ထည့်သွင်းခြင်း",
      priority: "low",
    },
    {
      feature: "Real-time Collaboration",
      description: "Multiple users များ တစ်ပြိုင်နက် edit လုပ်နိုင်ခြင်း",
      priority: "high",
    },
  ]

  toggleTaskCompletion(taskList: any[], index: number) {
    taskList[index].completed = !taskList[index].completed
  }

  getCompletionPercentage(taskList: any[]): number {
    const completed = taskList.filter((task) => task.completed).length
    return Math.round((completed / taskList.length) * 100)
  }

  getPriorityClass(priority: string): string {
    return `priority-${priority}`
  }
}
