import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { FactsComponentComponent } from "./components/facts-component/facts-component.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";
import { StartComponent } from "./components/starti-component/start.component";

const appRoutes: Routes = [
    { path: '', redirectTo: '/facts/1', pathMatch: 'full'},
    { path: 'facts', component: StartComponent, children:[
        { path: ':page', component: FactsComponentComponent }
        //,{ path: ':**', component: NotFoundComponent }
    ] },
    { path: '**', component: NotFoundComponent }
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule{

}