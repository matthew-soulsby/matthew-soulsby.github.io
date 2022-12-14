import React from 'react';
import { Title, Divider, Stack } from '@mantine/core';
import Projects from './ProjectDetails';
import ProjectCardStacked from '../components/ProjectCardStacked';

export default function AllProjects() {
    return(
        <>
        <Title my='md' order={1}>Projects</Title>
        <Divider my="md"/>
        <Stack>
            {Projects.map((project, index) => {
                project.id = index;
                return <ProjectCardStacked {...project} key={index} />
            })}
        </Stack>
        </>
    );
}