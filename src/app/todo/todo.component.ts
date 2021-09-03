import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodoService } from '../services/todo.service';
import { Todo } from './todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  todos: Todo[] = [];
  loading: boolean = true;
  itemsPerPage?:number;
  page:number=1;
  totalItems?:number;

  constructor(
    private todoService: TodoService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.todoService.getTodos().subscribe((data) => {
      this.todos = data;
      this.loading = false;
      this.totalItems = data.length;
    });

    this.activatedRoute.params.subscribe((params) => {
      this.getTodosByUser(params['userId']);
    });
  }

  getTodosByUser(userId: number) {
    this.todoService.getTodosByUser(userId).subscribe((data) => {
      this.todos = data;
    });
  }
}
