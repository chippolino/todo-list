export type Task = {
  id: number;
  text: string;
  completed: boolean;
};

export type Filters = 'all' | 'active' | 'completed';

export interface TodoRepository {
  tasks: Task[];
  filter: string;
  addTask: (text: string) => void;
  removeTask: (id: number) => void;
  toggleTask: (id: number) => void;
  toggleAllTasks: () => void;
  setFilter: (filter: Filters) => void;
  clearCompleted: () => void;
  readonly filteredTasks: Task[];
  readonly activeTaskCount: number;
  readonly hasCompletedTasks: boolean;
}
