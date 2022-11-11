import React from 'react';
import { Card, Image, Text, Space, AspectRatio } from '@mantine/core';
import { Link } from 'react-router-dom';
import { Project } from '../classes/ProjectType';

export default function ProjectCard(project: Project) {
  return (
  <Card shadow="sm" p="lg" radius="md" withBorder
    component={Link}
    to='/projects'
  >
    <Card.Section >
      <AspectRatio ratio={770/425}>
        <Image
          src={require('../resources'+ project.header_image + '.png')}
          alt={project.title}
        />
      </AspectRatio>
    </Card.Section>
    <Space h='sm'/>
    <Text weight={500} children={project.title}/>

    <Text size="sm" color="dimmed" children={project.description} lineClamp={2}/>
  </Card>
  );
}