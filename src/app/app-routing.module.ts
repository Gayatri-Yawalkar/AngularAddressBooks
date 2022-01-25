import { NgModule } from "@angular/core";
import { RouterModule,Routes } from "@angular/router"
import { DashboardComponent } from "./component/dashboard/dashboard.component";
import { AddPersonComponent } from "./component/add-person/add-person.component";
const routes: Routes = [
                            { path: '', redirectTo: 'personDetail', pathMatch: 'full' },
                            { path: 'personDetail',component: DashboardComponent },
                            { path: 'addPerson',component: AddPersonComponent}
                        ];
@NgModule({
            imports: [RouterModule.forRoot(routes)],
            exports: [RouterModule]
        })
export class AppRoutingModule { }
