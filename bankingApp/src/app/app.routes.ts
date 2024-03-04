import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogowanieComponent } from './logowanie/logowanie.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';



export const routes: Routes = [
    { path: 'logowanie', component: LogowanieComponent }
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
