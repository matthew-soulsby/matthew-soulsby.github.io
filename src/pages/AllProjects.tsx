import React from 'react';
import { Title, Divider, Text, Space, Stack } from '@mantine/core';
import Projects from './ProjectDetails';
import ProjectCardStacked from '../components/ProjectCardStacked';

export default function AllProjects() {
    return(
        <>
        <Title my='md' order={1}>Projects</Title>
        <Divider my="md"/>
        <Stack>
            {Projects.map((project) => {
                    return <ProjectCardStacked {...project} />
            })}
        </Stack>
        </>
    );
}