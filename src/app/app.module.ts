import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HashLocationStrategy, LocationStrategy, PathLocationStrategy} from '@angular/common';


import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from './/app-routing.module';
import { IndexComponent } from './index/index.component';
import { EventComponent } from './event/event.component';
import { InputComponent } from './input/input.component';
import { LifeComponent } from './life/life.component';
import { CycleComponent } from './cycle/cycle.component';


@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    AboutComponent,
    IndexComponent,
    EventComponent,
    InputComponent,
    LifeComponent,
    CycleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    {provide: LocationStrategy, useClass: PathLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
