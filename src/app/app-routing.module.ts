import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoComponent } from './page/todo/todo.component';
import { AddFormComponent } from './page/add-form/add-form.component';

const routes: Routes = [
  {path: "", component: TodoComponent},
  {path: "add-task", component: AddFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})  
export class AppRoutingModule { }
