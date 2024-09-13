import { TestBed } from '@angular/core/testing';

import { TodoService } from './todo.service';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

describe('TodoService', () => {
  let service: TodoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add a new todo', () => {
    service.addTodo('Test Todo');
    const todos = service.getTodos();
    expect(todos.length).toBe(1);
    expect(todos[0].title).toBe('Test Todo');
  });

  it('should mark a todo as completed', () => {
    service.addTodo('Test Todo');
    service.markTodoAsCompleted(1);
    const todo = service.getTodos()[0];
    expect(todo.completed).toBeTrue();
  });

  it('should remove a todo', () => {
    service.addTodo('Test Todo');
    service.removeTodo(1);
    const todos = service.getTodos();
    expect(todos.length).toBe(0);
  });

  it('should list all todos', () => {
    service.addTodo('Test Todo 1');
    service.addTodo('Test Todo 2');
    const todos = service.getTodos();
    expect(todos.length).toBe(2);
  });
});
