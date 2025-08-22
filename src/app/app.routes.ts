import type { Routes } from "@angular/router"
import { HomeComponent } from "./components/home/home.component"
import { DetailPageComponent } from "./components/detail-page/detail-page.component"
import { HandoverDocumentationComponent } from "./components/handover-documentation/handover-documentation.component"

export const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "detail/:section",
    component: DetailPageComponent,
  },
  {
    path: "handover",
    component: HandoverDocumentationComponent,
  },
  {
    path: "**",
    redirectTo: "",
  },
]
