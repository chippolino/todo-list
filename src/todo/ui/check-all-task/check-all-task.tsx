import { Button } from '@mantine/core';
import { todoStore } from '../../store/todo-store.ts';

export const CheckAllTask = () => {
  return (
    <Button size="lg" variant="outline" onClick={() => todoStore.toggleAllTasks()}>
      ВСЕ
    </Button>
  );
};
