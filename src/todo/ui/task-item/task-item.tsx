import { Card, Checkbox, CloseButton, Flex, Text } from '@mantine/core';
import { observer } from 'mobx-react-lite';
import { todoStore } from '../../store/todo-store.ts';
import { Task } from '../../types/types.ts';

type TaskProps = {
  task: Task;
};

export const TaskItem = observer(({ task }: TaskProps) => {
  return (
    <Card shadow="sm" padding="sm" radius="md" withBorder>
      <Flex align="center" gap="xl" justify="space-between">
        <Flex gap="sm" align="center">
          <Checkbox checked={task.completed} onChange={() => todoStore.toggleTask(task.id)} />
          <Text td={task.completed ? 'line-through' : ''}>{task.text}</Text>
        </Flex>
        <CloseButton onClick={() => todoStore.removeTask(task.id)} className="close-btn" />
      </Flex>
    </Card>
  );
});
