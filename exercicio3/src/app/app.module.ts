import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SharedModule } from "./shared/shared.module";
import { ColaboradoresComponent } from './features/colaboradores/colaboradores.component';

@NgModule({
    declarations: [
        AppComponent,
        ColaboradoresComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        SharedModule
    ]
})
export class AppModule { }
