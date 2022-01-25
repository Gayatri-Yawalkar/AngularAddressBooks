import { NgModule } from "@angular/core";
import { RouterModule,Routes } from "@angular/router"
import { DashboardComponent } from "./component/dashboard/dashboard.component";
const routes: Routes = [
                            { path: '', redirectTo: 'personDetail', pathMatch: 'full' },
                            { path: 'personDetail',component: DashboardComponent }
                        ];
@NgModule({
            imports: [RouterModule.forRoot(routes)],
            exports: [RouterModule]
        })
export class AppRoutingModule { }
