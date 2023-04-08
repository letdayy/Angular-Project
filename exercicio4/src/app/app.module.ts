import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SharedModule } from "../shared/shared.module";
import { SellModule } from "./features/sell/sell.module";

@NgModule({
    declarations: [
        AppComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    exports: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        SharedModule,
        SellModule
    ]
})
export class AppModule { }
