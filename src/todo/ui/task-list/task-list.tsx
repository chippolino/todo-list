import { TaskItem } from '../task-item/task-item.tsx';
import { Stack } from '@mantine/core';
import { observer } from 'mobx-react-lite';
import { todoStore } from '../../store/todo-store.ts';

export const TaskList = observer(() => {
  return (
    <Stack>
      {todoStore.filteredTasks.map(task => (
        <TaskItem key={task.id} task={task} />
      ))}
    </Stack>
  );
});
