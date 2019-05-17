import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { Child2Component } from './child2/child2.component';
import { ParentComponent } from './parent/parent.component';
import { HpComponent } from './httporigin/hp.component';

import {HttpClientModule} from '@angular/common/http';
import { HttpRequest } from './service/service.component';

import { Routes, RouterModule } from '@angular/router';
// https://www.cnblogs.com/starof/p/9012193.html angular 路由守卫
const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'h',
    component: HpComponent
  },
  {
    path: 'parent',
    component: ParentComponent,
    children: [{
      path: 'child',
      component: ChildComponent
    },
    {
      path: 'child2',
      component: Child2Component
    }
    ]
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ParentComponent,
    ChildComponent,
    HpComponent,
    Child2Component
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    // Angular刷新当前页面的几种方法https://blog.51cto.com/7308310/2335107
    RouterModule.forRoot(routes)
  ],
  providers: [HttpRequest],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }
