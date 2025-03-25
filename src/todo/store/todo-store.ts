import { makeAutoObservable } from 'mobx';
import { Filters, Task, TodoRepository } from '../types/types.ts';

export class TodoStore implements TodoRepository {
  tasks: Task[] = [];
  filter: Filters = 'all';

  constructor() {
    makeAutoObservable(this);
  }

  addTask(text: string) {
    this.tasks.push({ id: Date.now(), text, completed: false });
  }

  removeTask(id: number) {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }

  toggleTask(id: number) {
    const task = this.tasks.find(task => task.id === id);
    if (task) task.completed = !task.completed;
  }

  toggleAllTasks() {
    const allCompleted = this.tasks.every(task => task.completed);
    this.tasks.forEach(task => (task.completed = !allCompleted));
  }

  setFilter(filter: Filters) {
    this.filter = filter;
  }

  clearCompleted() {
    this.tasks = this.tasks.filter(task => !task.completed);
  }

  get filteredTasks() {
    return this.tasks.filter(task =>
      this.filter === 'all' ? true : this.filter === 'active' ? !task.completed : task.completed,
    );
  }

  get activeTaskCount() {
    return this.tasks.filter(task => !task.completed).length;
  }

  get hasCompletedTasks() {
    return this.tasks.some(task => task.completed);
  }
}

export const todoStore = new TodoStore();
