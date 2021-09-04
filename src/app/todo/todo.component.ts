import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PagingInfo } from '../models/pagingInfo';
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
  pagingInfo: PagingInfo = { currentPage: 1, itemsPerPage: 10 };
  filterText: string = '';

  constructor(
    private todoService: TodoService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.todoService.getTodos().subscribe((data) => {
      this.todos = data;
      this.loading = false;
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
