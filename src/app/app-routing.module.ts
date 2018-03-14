import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { IndexComponent } from './index/index.component';
import { LifeComponent } from './life/life.component';
import { EventComponent } from './event/event.component';
import { InputComponent } from './input/input.component';

const routes: Routes = [
  { path: '', 
    component: IndexComponent
  },
  {
    path: 'index',
    component: IndexComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'event',
    component: EventComponent
  },
  {
    path: 'life',
    component: LifeComponent
  },
  {
    path: 'input',
    component: InputComponent
  },
  { path: '**', 
    component: IndexComponent
  }
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
