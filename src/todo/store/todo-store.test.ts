import { beforeEach, describe, expect, test } from 'vitest';
import { TodoStore } from './todo-store.ts';

describe('TodoStoreImpl', () => {
  let store: TodoStore;

  beforeEach(() => {
    store = new TodoStore();
  });

  test('добавление новой задачи', () => {
    store.addTask('Новая задача');
    expect(store.tasks.length).toBe(1);
    expect(store.tasks[0].text).toBe('Новая задача');
    expect(store.tasks[0].completed).toBe(false);
  });

  test('удалить задачу', () => {
    store.addTask('Задача для удаления');
    const taskId = store.tasks[0].id;
    store.removeTask(taskId);
    expect(store.tasks.length).toBe(0);
  });

  test('переключение задачи', () => {
    store.addTask('Переключить задачу');
    const taskId = store.tasks[0].id;
    store.toggleTask(taskId);
    expect(store.tasks[0].completed).toBe(true);
  });

  test('все задачи выполнен', () => {
    store.addTask('Задача 1');
    store.addTask('Задача 2');
    store.toggleAllTasks();
    expect(store.tasks.every(task => task.completed)).toBe(true);
  });

  test('Фильтрация активных задач', () => {
    store.addTask('Задача 1');
    store.addTask('Задача 2');
    store.toggleTask(store.tasks[0].id);
    store.setFilter('active');
    expect(store.filteredTasks.length).toBe(1);
    expect(store.filteredTasks[0].completed).toBe(false);
  });
});
