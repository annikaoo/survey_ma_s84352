import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { SurveyModule } from "survey-angular-ui";

import { AppComponent } from "./app.component";
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


@NgModule ({
    declarations: [
        
    ],
    imports: [
        BrowserModule,
        SurveyModule
    ],
    providers:[],
    bootstrap:[
        
    ]
})

export class AppModule {
    ngDoBootstrap() {}
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));