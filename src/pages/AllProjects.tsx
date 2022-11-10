import React from 'react';
import { Title, Divider, Text, Space } from '@mantine/core';
import Projects from './ProjectDetails';
import ProjectCard from '../components/ProjectCard';

export default function AllProjects() {
    return(
        <>
        <Title my='md' order={1}>Projects</Title>
        <Divider my="md"/>
        {Projects.map((project) => {
                return <ProjectCard {...project} />
        })}
        </>
    );
}