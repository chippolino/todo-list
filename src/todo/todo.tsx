import { observer } from 'mobx-react-lite';
import { Center, Group, Space, Title } from '@mantine/core';
import { AddTask } from './ui/add-task/add-task.tsx';
import { TaskList } from './ui/task-list/task-list.tsx';
import { Footer } from './ui/footer/footer.tsx';
import { CheckAllTask } from './ui/check-all-task/check-all-task.tsx';

export const Todo = observer(() => {
  return (
    <>
      <Center>
        <Title size="h1">Список дел</Title>
      </Center>
      <Space h="md" />
      <Group>
        <CheckAllTask />
        <AddTask />
      </Group>
      <Space h="md" />
      <TaskList />
      <Space h="md" />
      <Footer />
    </>
  );
});
