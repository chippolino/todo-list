import '@mantine/core/styles.css';
import { MantineProvider } from '../mantine/mantine-provider.tsx';
import { Container } from '@mantine/core';
import { Todo } from '../todo/todo.tsx';

export const App = () => {
  return (
    <MantineProvider>
      <Container size={800} py={24}>
        <Todo />
      </Container>
    </MantineProvider>
  );
};
