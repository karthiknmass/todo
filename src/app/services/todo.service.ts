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

  private todos: Todo[] = [];
  private static readonly INITIAL_TODO_ID = 1;

  private idCounter: number = TodoService.INITIAL_TODO_ID;

  addTodo(title: string): void {
    const todo = this.createTodoObject(title);
    this.todos.push(todo);
  }

  getTodos(): Todo[] {
    return this.todos;
  }

  markTodoAsCompleted(id: number): void {
    const todo = this.findTodoById(id);
    if (todo) {
      todo.completed = true;
    }
  }

  removeTodo(id: number): void {
    this.todos = this.todos.filter(todo => todo.id !== id);
  }

  // Private helper methods to keep code clean
  private createTodoObject(title: string): Todo {
    return {
      id: this.idCounter++,
      title,
      completed: false
    };
  }

  private findTodoById(id: number): Todo | undefined {
    return this.todos.find(todo => todo.id === id);
  }
}
