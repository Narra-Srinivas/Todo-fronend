import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layouts/header/header.component';
import { TodoComponent } from './page/todo/todo.component';
import { TodoRecordComponent } from './layouts/todo-record/todo-record.component';
import { LegendBarComponent } from './layouts/legend-bar/legend-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { TaskFormComponent } from './layouts/task-form/task-form.component';
import { AddFormComponent } from './page/add-form/add-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TodoComponent,
    TodoRecordComponent,
    LegendBarComponent,
    TaskFormComponent,
    AddFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
