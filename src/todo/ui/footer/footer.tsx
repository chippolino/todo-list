import { Button, Grid, Group } from '@mantine/core';
import { observer } from 'mobx-react-lite';
import { todoStore } from '../../store/todo-store.ts';

const TaskCounter = observer(() => {
  return <span>Осталось {todoStore.activeTaskCount} заданий</span>;
});

const ClearCompletedButton = observer(() => {
  if (!todoStore.hasCompletedTasks) return null;

  return (
    <Button variant="subtle" size="xs" onClick={() => todoStore.clearCompleted()}>
      Очистить завершенные
    </Button>
  );
});

const FilterButtons = observer(() => {
  return (
    <Group gap="xs">
      <Button
        variant={todoStore.filter === 'all' ? 'filled' : 'subtle'}
        size="xs"
        onClick={() => todoStore.setFilter('all')}
      >
        Все
      </Button>
      <Button
        variant={todoStore.filter === 'active' ? 'filled' : 'subtle'}
        size="xs"
        onClick={() => todoStore.setFilter('active')}
      >
        Активные
      </Button>
      <Button
        variant={todoStore.filter === 'completed' ? 'filled' : 'subtle'}
        size="xs"
        onClick={() => todoStore.setFilter('completed')}
      >
        Завершенные
      </Button>
    </Group>
  );
});

export const Footer = () => {
  return (
    <Grid gutter="lg" justify="space-between">
      <Grid.Col span={3}>
        <TaskCounter />
      </Grid.Col>
      <Grid.Col span={5}>
        <FilterButtons />
      </Grid.Col>
      <Grid.Col span={3}>
        <ClearCompletedButton />
      </Grid.Col>
    </Grid>
  );
};
