import React from 'react';
import { Card, Image, Text, Space } from '@mantine/core';
import { Link } from 'react-router-dom';
import Project from '../classes/ProjectClass';

export default function ProjectCard(project: Project) {
  return (
    <Card shadow="sm" p="lg" radius="md" withBorder
      component={Link}
      to='/projects'
    >
      <Card.Section>
        <Image
          src={require('../resources'+ project.header_image + '.png')}
          height={425}
          alt={project.title}
        />
      </Card.Section>
      <Space h='sm'/>
      <Text weight={500} children={project.title}/>

      <Text size="sm" color="dimmed" children={project.description} lineClamp={3}/>
    </Card>
  );
}