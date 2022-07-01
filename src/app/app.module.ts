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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BotonComponent,
    TaskListComponent,
    TaskItemComponent,
    AddTaskComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
