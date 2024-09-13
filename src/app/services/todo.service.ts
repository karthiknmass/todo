import { Injectable } from '@angular/core';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  private todos: Todo[] = [];
  private idCounter = 1;

  addTodo(title: string): void {
    const todo: Todo = {
      id: this.idCounter++,
      title,
      completed: false
    };
    this.todos.push(todo);
  }

  getTodos(): Todo[] {
    return this.todos;
  }

  markTodoAsCompleted(id: number): void {
    const todo = this.todos.find(t => t.id === id);
    if (todo) {
      todo.completed = true;
    }
  }

  removeTodo(id: number): void {
    this.todos = this.todos.filter(t => t.id !== id);
  }
}
