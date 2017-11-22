import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { RobotComponent } from './robot/robot.component';
import { WelcomeComponent } from './welcomepage/welcome.component';

const routes: Routes = [
    {path: '', redirectTo: '/welcome', pathMatch: 'full'},
    {path: 'robot', component: RobotComponent},
    {path: 'welcome', component: WelcomeComponent}
];

@NgModule ({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}