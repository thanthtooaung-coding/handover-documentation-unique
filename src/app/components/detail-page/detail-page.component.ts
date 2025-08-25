import { Component, type OnInit } from "@angular/core"; // This line is corrected
import { CommonModule } from "@angular/common";
import { ActivatedRoute, Router, RouterModule } from "@angular/router";

@Component({
  selector: "app-detail-page",
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: "./detail-page.component.html",
  styleUrls: ["./detail-page.component.css"],
})
export class DetailPageComponent implements OnInit {
  currentSection = "";

  sidebarItems = [
    {
      title: "Introduction",
      route: "introduction",
      sections: [
        { title: "Overview", id: "overview" },
        { title: "Objectives", id: "objectives" },
        { title: "Features", id: "features" },
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
        { title: "Database Backup လုပ်ငန်းစဉ်", id: "database-backup" },
      ],
    },
    // {
    //   title: "Features & Tasks",
    //   route: "features-tasks",
    //   sections: [
    //     { title: "Customize Features", id: "customize-features" },
    //     { title: "Tasks Required to Do", id: "tasks-required" },
    //   ],
    // },
  ];

  customFeatures = [
    { name: 'Loan Approval Workflow', description: 'Customize the number of approval steps and criteria for different loan products.', status: 'Completed' },
    { name: 'Client Dashboard Widgets', description: 'Add or remove widgets from the main client dashboard for a personalized view.', status: 'Pending' },
    { name: 'Custom Reporting Fields', description: 'Ability to add custom fields to standard reports for more detailed analytics.', status: 'Pending' },
    { name: 'Third-party API Integration', description: 'Integrate with external services like credit scoring agencies or payment gateways.', status: 'Completed' },
  ];

  requiredTasks = [
    { title: 'Update User Documentation', description: 'Update the user guides to reflect the newly added custom features and changes in workflows.' },
    { title: 'Perform Security Audit', description: 'Conduct a full security audit of the new codebase, focusing on potential vulnerabilities in third-party integrations.' },
    { title: 'Optimize Database Queries', description: 'Review and optimize database queries for custom reports to ensure performance at scale.' },
    { title: 'End-to-End Testing', description: 'Complete end-to-end testing for the entire application, including all customized features.' },
  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.currentSection = params["section"] || "introduction";
    });
  }

  navigateToSection(route: string) {
    this.router.navigate(["/detail", route]);
  }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }
}