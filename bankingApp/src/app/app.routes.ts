import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { LogowanieComponent } from './logowanie/logowanie.component';


export const routes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: '', component: LogowanieComponent}
];

@NgModule({
    imports: [ 
        FormsModule,
        CommonModule,
        BrowserModule,
        RouterModule.forRoot(routes),
    ],
    exports: [ RouterModule ]
})

export class AppRoutingModule {}
