import { Button, TextInput } from '@mantine/core';
import { useState } from 'react';
import { todoStore } from '../../store/todo-store.ts';
import { observer } from 'mobx-react-lite';

export const AddTask = observer(() => {
  const [text, setText] = useState('');

  const handleSubmit = () => {
    if (text.trim()) {
      todoStore.addTask(text);
      setText('');
    }
  };

  return (
    <>
      <TextInput
        miw={505}
        size="lg"
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Новая задача..."
      />
      <Button size="lg" onClick={handleSubmit}>
        Добавить
      </Button>
    </>
  );
});
