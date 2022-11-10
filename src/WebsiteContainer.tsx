import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import { IconSun, IconMoonStars, IconPrompt } from '@tabler/icons';
import { AppShell, Header, Group, ActionIcon, useMantineColorScheme, UnstyledButton, Title, Button, Space } from '@mantine/core';

export default function WebsiteContainer() {
    const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  
    return (
      <BrowserRouter>
        <AppShell
          padding="md"
          fixed={false}
          header={
            <Header height={60}>
              <Group sx={{ height: '100%' }} px={20} position="apart">
                
                <Group>
                  <UnstyledButton onClick={() => {}}>
                    <Group position='center'>
                      <IconPrompt/>
                      <Title size={24}>Matthew Soulsby</Title>
                    </Group>
                  </UnstyledButton>
                  
                  <Space w='md'/>
                  
                  <Button variant="subtle">
                    Home
                  </Button>
                  <Button variant="subtle">
                    Projects
                  </Button>
                </Group>
                
                <ActionIcon variant="default" onClick={() => toggleColorScheme()} size={30}>
                  {colorScheme === 'dark' ? <IconSun size={16} /> : <IconMoonStars size={16} />}
                </ActionIcon>

              </Group>
            </Header>
          }
          styles={(theme) => ({
            main: {
              backgroundColor:
                theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
            },
          })}
        >
          Your application goes here
        </AppShell>
      </BrowserRouter>
    );
}