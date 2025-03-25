import { ReactNode } from 'react';
import { createTheme, MantineProvider as MantineProviderReal } from '@mantine/core';

const theme = createTheme({
  cursorType: 'pointer',
});

export const MantineProvider = ({ children }: { children: ReactNode }) => {
  return <MantineProviderReal theme={theme}>{children}</MantineProviderReal>;
};
