import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/todo';
import { TodoService } from 'src/app/todo.service';

@Component({
  selector: 'app-todo-record',
  templateUrl: './todo-record.component.html',
  styleUrls: ['./todo-record.component.css']
})
export class TodoRecordComponent implements OnInit{
  todos: Todo[];
  
  constructor(private todoService: TodoService) {

  }

  ngOnInit(): void {
   this.getTodos();
  
  }

  private getTodos(){
    this.todoService.getTodoList().subscribe(data => {this.todos = data})
  }

}
