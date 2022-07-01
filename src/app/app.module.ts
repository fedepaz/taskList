import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { BotonComponent } from './component/boton/boton.component';
import { TaskListComponent } from './component/task-list/task-list.component';
import { TaskItemComponent } from './component/task-item/task-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AddTaskComponent } from './component/add-task/add-task.component';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './component/about/about.component';
import { FooterComponent } from './component/footer/footer.component';

const appRoute:Routes=[
  { path:'', component:TaskListComponent},
  { path:'about', component:AboutComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BotonComponent,
    TaskListComponent,
    TaskItemComponent,
    AddTaskComponent,
    AboutComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoute, {enableTracing:true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
